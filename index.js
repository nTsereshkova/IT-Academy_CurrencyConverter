
import { getFetchURL } from "./request.js";
import {wrapper,header,main,footer,createElement} from './addTags.js'
import { body,regForm} from './registrationFORM.js'


// вставляю форму регистрации в тег body 
body.prepend(regForm)

// если пользователь удачно зарегистировался, то скрываю форму регистрации
    if (localStorage.hasOwnProperty('user')) {
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
         
        getFetchURL(selectedDate.value)         
    }
catch { (err) => console.log(err)}
 }




