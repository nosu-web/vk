const entering=document.querySelector("#entering");
const registration=document.querySelector("#registration");

entering.addEventListener("click", function(){
let name=document.querySelector("#input_login.form-input")
let password=document.querySelector("#input_password.form-input")
if(name=null)
{
window.setTimeout(function(){
    entering.classList.add('form-inpur-empty');
},500);
entering.classList.remove('form-input');
}
if(password=null)
{
window.setTimeout(function(){
    password.classList.add('form-inpur-empty');
},500);
password.classList.remove('form-input');
}
})


registration.addEventListener("click", function(){
    
})