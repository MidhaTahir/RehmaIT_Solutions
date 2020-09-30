document.getElementById('name').addEventListener("blur",validateName);
document.getElementById('company').addEventListener("blur",validateCompany);
document.getElementById('email').addEventListener("blur",validateEmail);
document.getElementById('phone').addEventListener("blur",validatePhone);
document.getElementById('message').addEventListener("blur",validateMessage);
document.getElementById('btnSubmit').addEventListener("click",onSubmit);

function onSubmit(e) {
    e.preventDefault()
    let checks = [];
    checks.push(validateName());
    checks.push(validateCompany());
    checks.push(validateEmail());
    checks.push(validatePhone());
    checks.push(validateMessage());
    if(checks.every(c => c)){
        //submit
        // console.log(document.getElementById('contact-form'))
        document.getElementById('contact-form').submit();

    }else{
        //not submit
        console.log('not submit')
        return
    }
}

function validateName() {
    const name = document.getElementById("name");
    const re = /^[a-zA-Z,.'-]{2,15}$/;
    let flag = false;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        flag = true;
    }
    return flag;
}

function validateCompany() {
    const company = document.getElementById("company");
    const re = /^[a-zA-Z0-9_\.\-\s]{2,15}$/;
    let flag = false;
    if (!re.test(company.value)) {
        company.classList.add('is-invalid');
    } else {
        company.classList.remove('is-invalid');
        flag = true;
    }
    return flag;

}

function validateEmail() {
    const email = document.getElementById("email");
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let flag = false;
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        flag = true;
    }
    return flag;
}

function validatePhone() {
    const phone = document.getElementById("phone");
    const re = /^\d{10}$/;
    let flag = false;
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        flag = true;
    }
    return flag;
}

function validateMessage() {
    const message = document.getElementById("message");
    let flag = false;
    if(message.value == ''){
        //empty message
        message.classList.add('is-invalid');
    }else{
        message.classList.remove('is-invalid');
        flag = true;
    }
    return flag
}