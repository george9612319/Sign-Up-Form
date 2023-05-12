const inputs = document.querySelectorAll('input');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

inputs.forEach((input)=> {
    const label = document.querySelector(`label[for='${input.id}']`);

    input.addEventListener('focus', () => {
        label.style.color = 'aliceblue';
    });

    input.addEventListener('blur', () => {
        label.style.color = 'black';
    });
})

document.getElementById('myform').addEventListener("submit", () => {

    if(password1.value !== password2.value) {
        password2.setCustomValidity('Password do not match.');
        event.preventDefault();
    }
    else {
        password2.setCustomValidity('');
    }
});
