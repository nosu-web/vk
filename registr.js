const entering=document.querySelector("#entering");


entering.addEventListener("click", function(){
let name=document.querySelector("#input_login.form-input")
let password=document.querySelector("#input_password.form-input")
if(name=null)
{
window.setTimeout(function(){
    input_login.classList.add('form-inpur-empty');
},5000);
input_login.classList.remove('form-input');
}
if(password=null)
{
window.setTimeout(function(){
    password.classList.add('form-inpur-empty');
},5000);
password.classList.remove('form-input');
}
console.log(3);
})



const registration=document.querySelector("#registration");

registration.addEventListener("click", function(){
    
})