const UsernameElement = document.querySelector("input[name='username']");
const PasswordElement = document.querySelector("input[name='passworld']");
const FormMessageUsername = UsernameElement.parentElement.querySelector(".form-message");
const FormMessagePassword = PasswordElement.parentElement.querySelector(".form-message");

function validate(event){
    event.preventDefault();
    if(UsernameElement.value.trim()=== ""){
        FormMessageUsername.innerText = "Không được để trống ! ";
    }
    if(PasswordElement.value.trim()=== ""){
    FormMessagePassword.innerText = "Không được để trống ! ";
    }
}

UsernameElement.addEventListener("blur", ( )=>{
    console.log(FormMessageUsername)
    if (UsernameElement.value.trim() === ""){
        FormMessageUsername.innerText = "Không được để trống !"
    }
});
PasswordElement.addEventListener("blur", ( )=>{
    console.log(FormMessagePassword)
    if (PasswordElement.value.trim() === ""){
        FormMessagePassword.innerText = "Không được để trống !"
    }
});
 UsernameElement.addEventListener("input", () =>{
    FormMessageUsername.innerText = "";
});
PasswordElement.addEventListener("input", () =>{
  FormMessagePassword.innerText = "";
});


