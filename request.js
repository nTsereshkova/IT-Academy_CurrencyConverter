export async function getFetchURL (date,q){
    const request = await fetch(`https://www.nbrb.by/api/exrates/rates?ondate=${date}&periodicity=0`)
    const result  = await request.json();
     console.log(result);
     result[27] = {
        Cur_Abbreviation: "BYN",
        Cur_Name: "Белорусский рубль",
        Cur_OfficialRate: 1,
        Cur_Scale: 1,}

       console.log(result);

        const currencyAbbrev = result.map(element => {
             return element.Cur_Abbreviation });
            console.log(currencyAbbrev)

        const currencyRate = result.map(element => {
        return element.Cur_OfficialRate});
        console.log(currencyRate)

        const currencyScale = result.map(element => {
        return element.Cur_Scale});
        console.log(currencyScale);

        const currencyName = result.map(element => {
        return element.Cur_Name;});
        console.log(currencyName);
// а если оставить этот объект и просто пользоваться деструктуризацией 
// function getRate(i,N) {
//     console.log(currencyScale)
//     const courseConverse = (currencyRate[i]/currencyScale[i]*N).toFixed(2);
//     console.log(`${ currencyAbbrev[i]}: courseConverse BYN`)
    
//     return courseConverse;
//     }
    //  const usd = getRate(5,1000)
    //  console.log(usd)
// как прокинуть курс в блоки 

        const elementUSD=document.querySelector('[data-value = "USD-rate"]');
        const elementEUR=document.querySelector('[data-value = "EUR-rate"]');
        const elementRUB=document.querySelector('[data-value = "RUB-rate"]');


// достаю индекс доллара через метод find у массива currencyAbbrev
// индекс для всех параметров валюты будет одинаков 
        let indexUSD;
        let indexEUR;
        let indexRUB;

// функция для получения индекса доллара 
        const getIndexUSD = function() {
            currencyAbbrev.find((el,index) => {
                if(el == 'USD') {
                indexUSD=index
                console.log(indexUSD)}
                }) 
                return indexUSD;
                };
        getIndexUSD();

// функция для получения индекса EUR
        const getIndexEUR = function() {
                currencyAbbrev.find((el,index) => {
                    if(el == 'EUR') {
                    indexEUR=index
                    console.log(indexEUR)
                    }
                     } ) 
                return indexEUR
         };
        getIndexEUR();

// фукнция для получения индекса RUR
        const getIndexRUB = function() {
            currencyAbbrev.find((el,index) => {
                if(el == 'RUB') {
                    indexRUB=index
                    console.log(indexRUB)
                    }
                    } ) 
            return indexRUB
        };
        getIndexRUB();

// вставляем курсы валют в блоки по найденым индексам 
        elementUSD. append(`${currencyScale[indexUSD]} ${currencyAbbrev[indexUSD]} = ${currencyRate[indexUSD]} BYN`);
        elementEUR. append(`${currencyScale[indexEUR]} ${currencyAbbrev[indexEUR]} = ${currencyRate[indexEUR]} BYN`);
        elementRUB. append(`${currencyScale[indexRUB]} ${currencyAbbrev[indexRUB]} = ${currencyRate[indexRUB]} BYN`);


// теперь получим количество введенной базовой валюты

        const resultConversion =  document.querySelector('#resultConversion');
        const conversionCurrency = document.querySelector('#selectedCurrency'); 
        const baseCurrency = document.querySelector('#baseCurrency');

        
        let baseIndex;
     
         const getBaseIndex = function (){
             currencyAbbrev.find((el,i) => {
                 if( el == baseCurrency.value) {
                     baseIndex= i;
                    console.log(`base index --------////-----  ${baseIndex}`)
                    return baseIndex}
                        }) 
                    }
         getBaseIndex();
        

        baseCurrency.oninput = function (){
         getBaseIndex();
           console.log('Изменили базовая валюту')
        };

 let baseCurrencyDiv  = document.querySelector('#iHaveCurrency');
  baseCurrencyDiv.innerHTML = `${currencyName[baseIndex]}`
  
  baseCurrency.onchange = function(){
    getBaseIndex();
    baseCurrencyDiv.innerHTML = `${currencyName[baseIndex]}`
  }
// добавляем слушатель на смену валюты для изменения ее наименования
        
        let index;
        const getSelectedIndex = function (){
        currencyAbbrev.find((el,i) => {
     if( el == conversionCurrency.value) {
            index= i;
            console.log(` --------////-----  ${index}`)
            return index}
     }) 
}
console.log(conversionCurrency.value);

getSelectedIndex();

let conversionCurrencyDiv  = document.querySelector('#iGetCurrency');
conversionCurrencyDiv.innerHTML = `${currencyName[index]}`
  
conversionCurrency.onchange = function(){
    getSelectedIndex();
    conversionCurrencyDiv.innerHTML = `${currencyName[index]}`
  }
// добавляем слушатель на смену валюты для изменения ее наименования
console.log
// это мы ловим количесвто введенной валюты N для функции
     const input = document.querySelector('#input');
    //  добавлено для автоматического пересчета  уже введенного содержимого при смене даты 
     function checkInput () {
        // убраем пробелы в инпуте если их много 
        input.value = input.value.trim();
        if(isNaN (+input.value)  || input.value == '' || input.value == ' ' || input.value == null)  {
            resultConversion.value = 0
        } else {
            resultConversion.value = (parseFloat(input.value)*((currencyScale[index]/currencyRate[index])/(currencyScale[baseIndex]/currencyRate[baseIndex]))).toFixed(4)
        }   
     }
 
     checkInput();
 // попробовать не вызывать ее здесь, а при срабатывании события смены даты 
 
 // слушатель событий на ввод суммы к переводу 
input.addEventListener('input',checkInput)
 



// работающий вариант с oninput 
        // input.oninput = function (){  
        //     input.value = input.value.trim();
        //     if(isNaN (+input.value)  || input.value == '' || input.value == ' ' || input.value == null)  {
        //         resultConversion.value = 0
        //     } else {
        //         resultConversion.value = (parseFloat(input.value)*((currencyScale[index]/currencyRate[index])/(currencyScale[baseIndex]/currencyRate[baseIndex]))).toFixed(4)
        //     }
        // }
 // Не раюотает проверка на пробелы лишние 
 // попробовать зпвтра черз тайп оф 


    //     if(isNaN (+input.value)  || input.value == '' || input.value == ' ' || input.value == null)  {
    //         resultConversion.value = 0
    //     } else {
    //         resultConversion.value = (parseFloat(input.value)*((currencyScale[index]/currencyRate[index])/(currencyScale[baseIndex]/currencyRate[baseIndex]))).toFixed(4)
    //     }
    // }
//             if (input.value) {resultConversion.value = (parseFloat(input.value)*((currencyScale[index]/currencyRate[index])/(currencyScale[baseIndex]/currencyRate[baseIndex]))).toFixed(4)}
//             else {resultConversion.value = 0}
// }

    // добавляем слушатель на изменение выбранной валюты 

    conversionCurrency.addEventListener('input',function(){
        getSelectedIndex();
        console.log('Изменили выбранную валюту')
        checkInput();
    })

    //  conversionCurrency.oninput = function (){
    //     getSelectedIndex();
    //      console.log('Изменили выбранную валюту')
         
    //      if (input.value) {resultConversion.value = (parseFloat(input.value)*((currencyScale[index]/currencyRate[index])/(currencyScale[baseIndex]/currencyRate[baseIndex]))).toFixed(4)}
    //      else {resultConversion.value = 0}
    //     };



// добавляем слушатель на случай изменения базовой валюты 
baseCurrency.addEventListener('input',function() {
    getBaseIndex();
    console.log('Изменили выбранную валюту')
    checkInput();

})

//  baseCurrency.oninput = function (){
//         getBaseIndex();
//          console.log('Изменили выбранную валюту')
  

//          if (input.value) {resultConversion.value = (parseFloat(input.value)*((currencyScale[index]/currencyRate[index])/(currencyScale[baseIndex]/currencyRate[baseIndex]))).toFixed(4)}
//          else {resultConversion.value = 0}       
//          };

        //  if(input.value==undefined ||input.value==null ) {resultConversion.value = 0}
     // resultConversion.value = ((parseFloat (input.value)*currencyScale[index])/currencyRate[index]).toFixed(2); 
     // изначальный расчет с одноц базовой валютой

     // разобраться посему по дефолту Nan и как с этим бороться 
     // если не введено число, то счиатть количесвто равным нулю 
     
     // focus был до этого 
    // добавить защиту от введения всякой чуши 


    console.log('---------------')
     return result;
 
        }



    // запрос открытого API с сайта нацбанка курсов валют 
    // возвращет массив курсов 27 основных валют 
    //  если делать через async/await то проблема в доступе к массиву курсов и прочим переменным, переделываю на
    
