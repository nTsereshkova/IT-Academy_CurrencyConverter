
import { getFetchURL } from "./request.js";
import {wrapper,header,main,footer,createElement} from './addTags.js'
import { body,regForm, buttonSubmit, checkMail,checkPassLenght,checkPass} from './registrationFORM.js'


// вставляю форму регистрации в тег body 
body.prepend(regForm)

// если пользователь удачно зарегистировался, то скрываю форму регистрации
    if (localStorage.hasOwnProperty('user')) {
        console.log('-----1-----')
        regForm.style.display = 'none'
        // вставляем динамически теги конверетера послу удачной регистрации, в них уже все содержимое подготовлено 
       wrapper.prepend(header,main,footer);

        // из локал сторадж беру логин пользователя и прописываю его вместо текста Войти 
        const login = document.querySelector('#enter');
        const userLogin = (JSON.parse(localStorage.getItem('user'))).login;
        // первую букву логина делаю заглавной 
        const  newUserLogin = userLogin[0].toUpperCase() + userLogin.slice(1);
        login.textContent= `Привет,${newUserLogin}`
    } else {
        wrapper.style.display = 'none'
        // если в локал сторадж нет объекта user то функционал конвертера не отображается 
    }


// запускаю фетч запрос на получение курсов НБРБ 
try {
        getFetchURL()
    }
catch { (err) => console.log(err)}

// const input = document.querySelector('#input');
// console.log(input.value)
// input.oninput = function (){   
//     console.log(input.value)     
// if( input.value=='') {console.log(`sukA`)  
// console.log(resultConversion.value) 
//  }   
//    }   

//Проверка на NaN в поле результат 

// const suka = document.querySelector('.inputField')
// console.log(`sukA ${suka.value}`)
// suka.onchange = function() {
//     console.log(`sukA ${suka.value}`)
// //     if( isNaN(suka.value)) {suka.textContent =''
// // }
// return suka.value
//   }


// теперь  по клику на Привет, UserLogin сделать возможность выхода 
const login = document.querySelector('#enter');
login.onclick = function() {

    let userChoice = createElement('div', 'userChoice','userChoice');
    let userChoiceYes= createElement('div', 'userChoice','yes');
    userChoiceYes.append('Выйти')

    let userChoiceNo = createElement('div', 'userChoice','no');
    userChoiceNo.append('Отмена')

    login.after(userChoice);
    userChoice.append(userChoiceYes, userChoiceNo)

    userChoiceYes.onclick = function() {
        localStorage.clear();
    window.location.reload();
    }
    userChoiceNo.onclick = function() {
        userChoice.style.display = 'none';
}
}
    
const selectedDate = document.querySelector('#calendar')

 selectedDate.oninput = function() {
     console.log(selectedDate.value)
     try {
        const elementUSD=document.querySelector('[data-value = "USD-rate"]');
        const elementEUR=document.querySelector('[data-value = "EUR-rate"]');
        const elementRUB=document.querySelector('[data-value = "RUB-rate"]');
          elementUSD.textContent='';
          elementEUR.textContent ='';
          elementRUB.textContent ='';

    //    const selectedDateInput= document.querySelector('.inputField')
    //     selectedDateInput.value = '';

    //     const selectResultConversion= document.querySelector('#resultConversion');
    //     selectResultConversion.value = '';
// попробовать словить тут параметр инпута и прокинуть его в запрос 
         
        getFetchURL(selectedDate.value)
         
    }
catch { (err) => console.log(err)}
 }

    // чтоб загрузить форму регистрации сначала можно попробовать динамический импорт 
    // сначала импорт (форма регистрации) .then или через await уже прокидывать остальные теги 
    // или можно перезаписать иннер хтмл после регистрации пользователя  elem.innerHTML += "что хотим перезаписать";
    // добавить в форму регистарции nik пользователя и прокидывать его в кнопку вместо войти, типа Привет, Анастасия 
    //  elem.hidden = true; Технически, hidden работает так же, как style="display:none"
    // node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
    // Для удаления узла есть методы node.remove().
//     Например, чтобы скрыть элемент, мы можем задать elem.style.display = "none".

// Затем мы можем удалить свойство style.display, чтобы вернуться к первоначальному состоянию. Вместо delete elem.style.display мы должны присвоить ему пустую строку: elem.style.display = "".

// Ещё один пример поведения. Сделаем так, что при клике на элемент с атрибутом data-toggle-id будет скрываться/показываться элемент с заданным id:


// теперь я хочу сделать кнопку выхода из учетной записи 



