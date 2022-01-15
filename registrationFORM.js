
function createElement (tag,className,id) {
    let element = document.createElement(tag)
    element.classList.add(className);
    element.id = id;
    return element

}

const userNick = createElement('input','input','userNick');
userNick.setAttribute('type','text');
userNick.setAttribute('placeholder','Введите логин');

const userMail = createElement('input','input','userMail');
userMail.setAttribute('type','email');
userMail.setAttribute('placeholder','e-mail');

const password = createElement('input','input','password');
password.setAttribute('type','password');
password.setAttribute('placeholder','Придумайте пароль');

const checkPassword = createElement('input','input','check');
checkPassword.setAttribute('type','password');
checkPassword.setAttribute('placeholder','Повторите пароль');

let error = createElement('div','other', 'error');

const buttonSubmit = createElement('button','submit','submit');
buttonSubmit.append('Войти')


const regForm = createElement('div','reg','reg');
regForm.append('Регистрация',userNick,userMail, password,checkPassword,error,buttonSubmit);


const body =  document.querySelector('body');  

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
