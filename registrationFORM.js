//  import {createElement} from './addTags';
// import './addTags.js'

function createElement (tag,className,id) {
    let element = document.createElement(tag)
    element.classList.add(className);
    element.id = id;
    return element

}


// порядок аргументов - какой тег, имя класса,имя id


const userNick = createElement('input','input','userNick');
userNick.setAttribute('type','text');
userNick.setAttribute('placeholder','Введите логин');

const userMail = createElement('input','input','userMail');
userMail.setAttribute('type','email');
userMail.setAttribute('placeholder','e-mail');

// const userMailError = createElement('div','other','errorMail');
// userMailError.append('') 

const password = createElement('input','input','password');
password.setAttribute('type','password');
password.setAttribute('placeholder','Придумайте пароль');

// const passwordError = createElement('div','other', 'errorPassword');

const checkPassword = createElement('input','input','check');
checkPassword.setAttribute('type','password');
checkPassword.setAttribute('placeholder','Повторите пароль');

let error = createElement('div','other', 'error');

const buttonSubmit = createElement('button','submit','submit');
buttonSubmit.append('Войти')


const regForm = createElement('div','reg','reg');
regForm.append('Регистрация',userNick,userMail, password,checkPassword,error,buttonSubmit);


const body =  document.querySelector('body'); // тут потом заменить  на нужный тег


// console.log(userNick.value)

// body.append(regForm)
// проверка на введенный email 

function checkMail() {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(userMail.value.match(emailRegExp)) return true;
     else {
        error.append('Вы ввели неверный e-mail')
        // return checkMail();
        }
}



// проверка парол на его длину
let pass;
  password.oninput = function() {
    pass = password.value
    console.log(pass)
    return +pass}

function checkPassLenght(min,max) {  
    if ( pass == 0 && pass <= min && pass >= max ) {
        error.append(`Пароль  должен быть от ${min} cимволов до ${max} символов`)
        // return checkPassLenght(min,max);
    } 
    return true
 }  

let checkP 
checkPassword.oninput = function() {
    checkP = checkPassword.value
    console.log(checkP)
    return checkP}

 // проверка совпадения паролей 
 function checkPass () {
    if (pass != checkP) {
        error.append(`Пароли не совпадают`)
        // alert(`Пароли не совпали`)
        // return  checkPass () 
    } return true
}

 // по клику на кнопку запускаем проверку - все функции 

  
  buttonSubmit.onclick = function () {
    checkMail();
    checkPass ()
    checkPassLenght(8,20);
    let user = {
        login: userNick.value.trim(),
        email: userMail.value.trim(),
        password: pass
        }
    console.log('Вы успешно прошли регистрацию');
    localStorage.setItem('user', JSON.stringify(user));
    window.location.reload();
    }

    export { body,regForm,buttonSubmit, checkMail,checkPassLenght,checkPass}
//  buttonSubmit.onclick = function () {
// checkMail();
// checkPass ()
// checkPassLenght(8,20);
// let user = {
//     email: userMail.value,
//     password: pass
//     }
// alert('Вы успешно прошли регистрацию')
// localStorage.setItem('user', JSON.stringify(user));
// }
// console.log('----0-----')

// if (localStorage.getItem('user' !== null )) {
//     console.log('-----1-----')
//     regForm.style.display = 'hidden'
//     const test = createElement('div','test', 'test')
//     console.log('-----2-----')
//     test.append('ВСЕ РАБОТАЕТ ')
//     body.prepend(test)
//     console.log('-----3-----')
// }

// прорабоать эту часть 


// предусмотреть кнопку выхода  из регистрации - то есть прокинуть вместо войти кнопку выйти 
// значит надо будет очистить локал сторадж при выходе 
// и подумать как прикрутить пусто ли локал сторадж 

// при загрузке страницы я должна видеть форму регистрации, и только при успехе должен загружаен быть див wrapper









// на кнопку войти повесить ыет локал сторадж 
// КУКИ?????
// не забыть вставить в страницу

// тут нужно завязать с локалсторадж
// пример валидации пароля в форме
// function passid_validation(passid,mx,my)
// {
// var passid_len = passid.value.length;
// if (passid_len == 0 ||passid_len>= my || passid_len<mx)
// {
// alert("Password should not be empty / length be between "+mx+" to "+my);
// passid.focus();
// return false;
// }
// return true;
// }


// пример валидации емайл в форме через регулярное выражение
// function ValidateEmail(uemail)
// {
//     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//     if(uemail.value.match(mailformat))
//     {
//     return true;
//     }
//     else
//     {
//     alert("You have entered an invalid email address!");
//     uemail.focus();
//     return false;
//     }
//     }


// еще проверка на емайл черех регулярное выражение
// const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;