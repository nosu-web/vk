let signInButton=document.getElementById("form-sign-in"); 
let intputLoging=document.getElementById("input_login");
let intputPassword=document.getElementById("input_password");
console.log("click");
signInButton.addEventListener("click",function(){
    console.log("click");
    if(intputLoging.value=="")
    {
       console.log("click");
       intputLoging.style.backgroundColor="#f1e1e1";
       setTimeout(() => { intputLoging.style.backgroundColor=' #ffffff'; }, 400);
    }
   else if(intputPassword.value=="")
    {
        console.log("click");
        intputPassword.style.backgroundColor='#f1e1e1';
       setTimeout(() => { intputPassword.style.backgroundColor=' #ffffff'; }, 400);
    }
});
