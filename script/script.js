let sliderElement = document.getElementById('slider');
let button = document.getElementById('button');
let sizePassword = document.getElementById('valor')
let password = document.getElementById('password')
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@.,"

let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function() {

    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = ""

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
      }

      containerPassword.classList.remove("hide")
      password.innerHTML = pass 
      newPassword = pass
    }


function copyPassword() {
    alert("Password copied successfully!")
    navigator.clipboard.writeText(newPassword)
}
