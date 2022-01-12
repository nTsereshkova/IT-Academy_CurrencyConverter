// создаем динамически элементы DOM и вставляем и в html 
// порядок аргументов - имя переменной, какой тег, имя класса,имя id

 function createElement (tag,className,id) {
    let element = document.createElement(tag)
    element.classList.add(className);
    element.id = id;
    return element
   
}
//получаем доступ к  корневому тегу wrapper
const wrapper = document.querySelector('div');

// работаем с header
// порядок аргументов - имя переменной, какой тег, имя класса,имя id
const header = createElement('header','header') ;
    const headerSpan = createElement('span','headerSpan','enter');
        headerSpan.append('Войти');

    const headerDiv = createElement('div','title');
        const headerDivH1 =  createElement('h1');
    headerDivH1.append('Конвертер валют/Currency converter')

    headerDiv.append(headerDivH1);

    header.append(headerSpan,headerDiv);



// создаем main 
// порядок аргументов - имя переменной, какой тег, имя класса,имя id
const main = createElement('main','main') ;

// создаем секцию с курсами 
    const section = createElement('section','section') ;
    section.classList.add('text');
        
        const courseBox1= createElement('div','courseBox') ;
            const courseTitle1 = createElement('div','courseTitle') ;
            courseTitle1.append('Курс USD');

            const courseValue1 = createElement('div','courseValue');
            courseValue1.setAttribute ('data-value','USD-rate');

            courseBox1.prepend(courseTitle1,courseValue1);
        // section.prepend (courseBox1);


        const courseBox2= createElement('div','courseBox') ;
            const courseTitle2 = createElement('div','courseTitle') ;
            courseTitle2.append('Курс EUR');

            const courseValue2 = createElement('div','courseValue');
            courseValue2.setAttribute('data-value','EUR-rate');

        courseBox2.append(courseTitle2,courseValue2);
        // courseBox1.after(courseBox2);

        const courseBox3= createElement('div','courseBox') ;
        const courseTitle3= createElement('div','courseTitle') ;
        courseTitle3.append('Курс RUB');

        const courseValue3 = createElement('div','courseValue');
        courseValue3.setAttribute('data-value','RUB-rate');

    courseBox3.append(courseTitle3,courseValue3);
    // courseBox2.after(courseBox3);


section.append(courseBox1,courseBox2,courseBox3)


// созадем левую колонку с базовой валютой
// порядок аргументов - имя переменной, какой тег, имя класса,имя id
const courseTitles = ["AUD","AMD","BGN","UAH","DKK","USD","EUR","PLN","JPY","IRR","ISK","CAD","CNY","KWD","MDL","NZD","NOK","RUB",
        "XDR","SGD","KGS","KZT","TRY","GBP","CZK","SEK","CHF","BYN"]
        console.log(` CorseTitles ${courseTitles}`)


const articleLeft = createElement('article','column')  
    const articleLeftP = createElement('p','iHave');
    articleLeftP.classList.add('text');
    articleLeftP.append('Базовая валюта');

    const articleDiv = createElement('div','iHave','iHaveCurrency');
    articleDiv.classList.add('text');
    // articleDiv.append('Белорусский рубль');


    
// создаю селект 
        const selectLeft = createElement('select','currencyAbbr','baseCurrency');    
            const option1 = createElement('option','currency');
             option1.value = courseTitles[27];
             option1.append(courseTitles[27])// BYN

            const option2 = createElement('option','currency');
            option2.value = courseTitles[5];
            option2.append(courseTitles[5]);//USD

            const option3 = createElement('option','currency');
            option3.value = courseTitles[17];
            option3.append(courseTitles[17]);//RUB

            const option4 = createElement('option','currency');
            option4.value = courseTitles[6];
            option4.append(courseTitles[6]);//EUR

            const option5 = createElement('option','currency');
            option5.value = courseTitles[0];
            option5.append(courseTitles[0]);//AUD

            const option6 = createElement('option','currency');
            option6.value = courseTitles[1];
            option6.append(courseTitles[1]);//AMD

            const option7 = createElement('option','currency');
            option7.value = courseTitles[2];
            option7.append(courseTitles[2]);//BGN

            const option8= createElement('option','currency');
            option8.value = courseTitles[3];
            option8.append(courseTitles[3]);//UAH

            const option9 = createElement('option','currency');
            option9.value = courseTitles[4];
            option9.append(courseTitles[4]);//DKK

            const option10 = createElement('option','currency');
            option10.value = courseTitles[7];
            option10.append(courseTitles[7]);//PLN

            const option11 = createElement('option','currency');
            option11.value = courseTitles[8];
            option11.append(courseTitles[8]);//JPY

            const option12 = createElement('option','currency');
            option12.value = courseTitles[9];
            option12.append(courseTitles[9]);//IRR

            const option13 = createElement('option','currency');
            option13.value = courseTitles[10];
            option13.append(courseTitles[10]);//ISK

            const option14 = createElement('option','currency');
            option14.value = courseTitles[11];
            option14.append(courseTitles[11]);//CAD

            const option15 = createElement('option','currency');
            option15.value = courseTitles[12];
            option15.append(courseTitles[12]);//CNY

            const option16 = createElement('option','currency');
            option16.value = courseTitles[13];
            option16.append(courseTitles[13]);//KWD

            const option17 = createElement('option','currency');
            option17.value = courseTitles[14];
            option17.append(courseTitles[14]);//MDL

            const option18 = createElement('option','currency');
            option18.value = courseTitles[15];
            option18.append(courseTitles[15]);//NZD

            const option19 = createElement('option','currency');
            option19.value = courseTitles[16];
            option19.append(courseTitles[16]);//NOK

            const option20 = createElement('option','currency');
            option20.value = courseTitles[18];
            option20.append(courseTitles[18]);//XDR

            const option21 = createElement('option','currency');
            option21.value = courseTitles[19];
            option21.append(courseTitles[19]);//SGD

            const option22 = createElement('option','currency');
            option22.value = courseTitles[20];
            option22.append(courseTitles[20]);//KGS

            const option23 = createElement('option','currency');
            option23.value = courseTitles[21];
            option23.append(courseTitles[21]);//KZT

            const option24 = createElement('option','currency');
            option24.value = courseTitles[22];
            option24.append(courseTitles[22]);//TRY

            const option25 = createElement('option','currency');
            option25.value = courseTitles[23];
            option25.append(courseTitles[23]);//GBP

            const option26 = createElement('option','currency');
            option26.value = courseTitles[24];
            option26.append(courseTitles[24]);//CZK

            const option27 = createElement('option','currency');
            option27.value = courseTitles[25];
            option27.append(courseTitles[25]);//SEK

            const option28 = createElement('option','currency');
            option28.value = courseTitles[26];
            option28.append(courseTitles[26]);//CHF


selectLeft.append(option1,option2,option3,option4,option5,option6,option7,option8,option9,option10,option11,option12,option13,option14,
    option15,option16, option17,option18,option19,option20, option21,option22,option23,option24,option25,option26,option27,option28);


    const courseNames = ['Австралийский доллар', 'Армянских драмов', 'Болгарский лев', 'Гривен', 'Датских крон', 'Доллар США', 
                        'Евро', 'Злотых', 'Иен', 'Иранских риалов', 'Исландских крон', 'Канадский доллар', 'Китайских юаней',
                         'Кувейтский динар', 'Молдавских леев', 'Новозеландский доллар', 'Норвежских крон', 'Российских рублей', 
                         'СДР (Специальные права заимствования)', 'Сингапурcкий доллар', 'Сомов', 'Тенге', 'Турецких лир', 
                         'Фунт стерлингов', 'Чешских крон', 'Шведских крон', 'Швейцарский франк', 'Белорусский рубль']

    // const selectLeft2 = document.getElementById('baseCurrency');

    // let indexLeft;
    // console.log(selectLeft2) // пока не работает 

    // selectLeft2.oninput= function (){
    //     courseTitles.find((el,i) => {
    //         if( el == selectLeft2.value) {
    //             indexLeft= i;
    //            console.log(`вы выбрали  ${indexLeft}`)
    //            return indexLeft}
    //                }) 
    //     articleDiv.append(courseNames[indexLeft]);
    // }





// const options = [option1,option2]

// создаю инпут 

    // const articleLeftInput = createElement('div','input');
    // articleLeftInput.classList.add('text');
        const articleLeftInputField = createElement('input','inputField', 'input');
        articleLeftInputField.setAttribute('type','text')
        articleLeftInputField.setAttribute('placeholder','Введите сумму')
        // articleLeftInput.append(articleLeftInputField)

articleLeft.append(articleLeftP,articleDiv,selectLeft,articleLeftInputField)


// создаю правую колонку с валютой конверсии

const articleRight = createElement('article','column')  
articleRight.id = 'articleRight';

    const articleRightP = createElement('p','iGet');
    articleRightP.classList.add('text');
    articleRightP.append('Валюта конверсии');

    const articleRightDiv = createElement('div','iGet','iGetCurrency');
    articleRightDiv.classList.add('text');

    const selectRight = selectLeft.cloneNode(true);
    selectRight.className = 'currencyAbbr right';
    selectRight.id = 'selectedCurrency';

    const option2Right = createElement('option','currency');
    option2Right.value = courseTitles[5];
    option2Right.append(courseTitles[5]);//USD
    option2Right.setAttribute('selected','selected')
    
     selectRight.append(option2Right);

    // const defaultValue = document.querySelector('#selectedCurrency')

    // const articleRightInput = createElement('div','input');
    // articleRightInput.classList.add('text');
        const articleRightInputField = createElement('input','inputField', 'resultConversion');
        articleRightInputField.setAttribute('type','text')
        articleRightInputField.setAttribute('placeholder','Сумма после конверсии')
        // articleRightInput.append(articleRightInputField)



    articleRight.append(articleRightP,articleRightDiv,selectRight,articleRightInputField)


    const columns = createElement('div','columns','columns' );
columns.append(articleLeft,articleRight)

main.append(section,columns);




{/* <article class="column right ">
<p class="iGet text">Валюта конверсии</p>

<select class="currencyAbbr right"  id="selectedCurrency">
   <option class="currency" value = "USD">USD</option>
   <option class="currency" value = "RUB">RUB</option>
   <option class="currency" value = "EUR">EUR</option>
   <option class="currency" value = "BYN">BYN</option>
</select>

<div class="input right text">
    <input  class= "inputField" id = "resultConversion" type="text" placeholder="Столько к выдаче"> 
</div>
<div class="saveButton right text">
    Сохраните свою конверсию
</div>
</article> */}




// создаем footer 
//  порядок аргументов - имя переменной, какой тег, имя класса,имя id
const footer =  createElement('footer','footer');
footer.classList.add('text');
    const footerP = createElement('p');
       
            const footerPA =  createElement('a','footerA');
            footerPA.append('www.nbrb.by')
            footerPA.setAttribute('href', 'https://www.nbrb.by/statistics/rates/ratesdaily.asp')
            // footerP.append(footerPA)
   footerP.append(`Данные курсов валют взяты с официального сайта Национального банка Республики Беларусь `,footerPA)          
footer.append(footerP);

export {wrapper,header,main,footer,createElement}
// wrapper.prepend(header,main,footer);