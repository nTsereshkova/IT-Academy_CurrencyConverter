export async function getFetchURL (date){
    const request = await fetch(`https://www.nbrb.by/api/exrates/rates?ondate=${date}&periodicity=0`)
    const result  = await request.json();
    //  console.log(result);
     result[27] = {
        Cur_Abbreviation: "BYN",
        Cur_Name: "Белорусский рубль",
        Cur_OfficialRate: 1,
        Cur_Scale: 1,}

       console.log(result);

        const currencyAbbrev = result.map(element => {
             return element.Cur_Abbreviation });
            // console.log(currencyAbbrev)

        const currencyRate = result.map(element => {
        return element.Cur_OfficialRate});
        // console.log(currencyRate)

        const currencyScale = result.map(element => {
        return element.Cur_Scale});
        // console.log(currencyScale);

        const currencyName = result.map(element => {
        return element.Cur_Name;});
        // console.log(currencyName);

// прокидываю курс в ифнормационные блоки блоки 

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
                // console.log(indexUSD)
            }
                }) 
                return indexUSD;
                };
        getIndexUSD();

// функция для получения индекса EUR
        const getIndexEUR = function() {
                currencyAbbrev.find((el,index) => {
                    if(el == 'EUR') {
                    indexEUR=index
                    // console.log(indexEUR)
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
                    // console.log(indexRUB)
                    }
                    } ) 
            return indexRUB
        };
        getIndexRUB();

// вставляем курсы валют в блоки по найденым индексам 
        elementUSD. append(`${currencyScale[indexUSD]} ${currencyAbbrev[indexUSD]} = ${currencyRate[indexUSD]} BYN`);
        elementEUR. append(`${currencyScale[indexEUR]} ${currencyAbbrev[indexEUR]} = ${currencyRate[indexEUR]} BYN`);
        elementRUB. append(`${currencyScale[indexRUB]} ${currencyAbbrev[indexRUB]} = ${currencyRate[indexRUB]} BYN`);


// теперь основной расчет

        const resultConversion =  document.querySelector('#resultConversion');
        const conversionCurrency = document.querySelector('#selectedCurrency'); 
        const baseCurrency = document.querySelector('#baseCurrency');

   // достаю  базовый индекс валюты  через метод find у массива currencyAbbrev     
        let baseIndex;
     
         const getBaseIndex = function (){
             currencyAbbrev.find((el,i) => {
                 if( el == baseCurrency.value) {
                     baseIndex= i;
                    // console.log(`base index --------////-----  ${baseIndex}`)
                    return baseIndex}
                        }) 
                    }
         getBaseIndex();
        

        baseCurrency.oninput = function (){
         getBaseIndex();
           console.log('Изменили базовая валюту')
        };
// добавляем слушатель событий на смену выбранной валюты БАЗОВОЙ
 let baseCurrencyDiv  = document.querySelector('#iHaveCurrency');
  baseCurrencyDiv.innerHTML = `${currencyName[baseIndex]}`
  
  baseCurrency.onchange = function(){
    getBaseIndex();
    baseCurrencyDiv.innerHTML = `${currencyName[baseIndex]}`
  }

  // достаю   индекс  Валюты конверсии через метод find у массива currencyAbbrev  
        let index;
        const getSelectedIndex = function (){
        currencyAbbrev.find((el,i) => {
     if( el == conversionCurrency.value) {
            index= i;
            // console.log(` --------////-----  ${index}`)
            return index}
     }) 
}
// console.log(conversionCurrency.value);

getSelectedIndex();

// добавляем слушатель на смену валюты КОНВЕРСИИ 
        
let conversionCurrencyDiv  = document.querySelector('#iGetCurrency');
conversionCurrencyDiv.innerHTML = `${currencyName[index]}`
  
conversionCurrency.onchange = function(){
    getSelectedIndex();
    conversionCurrencyDiv.innerHTML = `${currencyName[index]}`
  }

// ловим INPUT - сумму к конверсии 
     const input = document.querySelector('#input');

    //  добавлено для автоматического пересчета  уже введенного содержимого при смене даты 
    // ФУНКЦИЯ ПО ПРОВЕРКЕ ВВОДА И ОСУЩЕСТВЛЕНИЮ КОНВЕРСИИ
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
 
 // слушатель событий на ввод суммы к переводу 
input.addEventListener('input',checkInput)
 
// добавляем слушатель на изменение выбранной валюты 

    conversionCurrency.addEventListener('input',function(){
        getSelectedIndex();
        // console.log('Изменили выбранную валюту')
        checkInput();
    })

// добавляем слушатель на случай изменения базовой валюты 
baseCurrency.addEventListener('input',function() {
    getBaseIndex();
    // console.log('Изменили выбранную валюту')
    checkInput();
    })
     return result;
}

    // запрос открытого API с сайта нацбанка курсов валют 
    // возвращет массив курсов 27 основных валют 
    
