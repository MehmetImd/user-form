
const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const password = document.getElementById("password");

const repassword = document.getElementById("repassword");


function error(input,massage){
    input.className = "form-control is-invalid"
    let div = input.nextElementSibling;
    div.innerText = massage;
    div.className = 'invalid-feedback';
}


function success(input){
    
    input.className = "form-control is-valid" 
}


function checkEmail(input){
    
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(re.test(input.value)){
        success(input);
    }else{
        error(input,"Hatalı Email Adresi")
    }
}


function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value == ""){
            error(input, `${input.id} Boş Bırakılamaz.`);
        }else{
            success(input);
        }
    })
}


function checkLength(input,min,max){
    if(input.value.length < min){
        error(input, `${input.id} En Az ${min} Karakter Girilebilir`)
    }else if(input.value.length > max){
        error(input, `${input.id} En Fazla ${max} Karakter Girilebilir`)
    }else{
        success(input);
    }
}


function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        error(input2, "Parola Eşleşmiyor")
    }
}


function checkPhone(input){
    let exp = /^\d{10}$/;
    
    if(!exp.test(input.value)){
        error(input, "Telefon 10 Karakter Olmalıdır")
    }
}


form.addEventListener("submit",function(e){
    e.preventDefault();

    checkRequired([username,email,phone,password,repassword]);
    checkEmail(email)
    
    checkLength(username,6,20)
    checkLength(password,6,30)
    
    checkPassword(password,repassword)
    checkPhone(phone)



    // if(username.value === ""){
    //     error(username, "Alan boş bıraklamaz")
    // }else{
    //     success(username)
    // }
    // if(email.value === ""){
    //     error(email, "Alan boş bıraklamaz")
    // }else if(!validateEmail(email)){
    //     error(email,"mail formatına uygun değil")
    // }
    // else{
    //     success(email)
    // }
    // if(password.value === ""){
    //     error(password, "Alan boş bıraklamaz")
    // }else{
    //     success(password)
    // }
    // if(repassword.value === ""){
    //     error(repassword, "Alan boş bıraklamaz")
    // }else{
    //     success(repassword)
    // }
})
