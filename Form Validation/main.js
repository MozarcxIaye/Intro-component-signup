const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');
const errorElement1 = document.getElementById('error1');
const errorElement2 = document.getElementById('error2');
const errorElement3 = document.getElementById('error3');
const errorElement4 = document.getElementById('error4');
console.log('hello');
button.addEventListener('click', function() {
    if (firstname.value === '' || firstname.value == null) {
        errorElement1.textContent = "First Name cannot be empty";
        document.getElementById('firstName').style.border = '2px solid hsl(0, 100%, 74%)';
        // firstname.placeholder= "❗";
        // firstname.classList.add('error');
        
        // document.body.appendChild(errorElement1);
    }
    if (lastname.value === '' || lastname.value == null) {
        errorElement2.textContent = 'Last Name cannot be empty';
        document.getElementById('lastName').style.border = '2px solid hsl(0, 100%, 74%)';
    }
    if (password.value === '' || password.value == null) {
        errorElement4.textContent = 'Password cannot be empty';
        document.getElementById('password').style.border = '2px solid hsl(0, 100%, 74%)';
    }
    if (password.value.length >=1 && password.value.length <= 6) {
        errorElement4.textContent = 'Password must be longer than 6 characters';
        document.getElementById('password').style.border = '2px solid hsl(0, 100%, 74%)';
    }
    if (password.value.length >= 20) {
        errorElement4.textContent = 'Password must be shorter than 20 characters';
        document.getElementById('password').style.border = '2px solid hsl(0, 100%, 74%)';
    }
    if (password.value === 'password') {
        errorElement4.textContent = 'Your Password cannot be password';
        document.getElementById('password').style.border = '2px solid hsl(0, 100%, 74%)';
    }
    if (email.value.includes('@') == false) {
        errorElement3.textContent = 'Looks like this is not an email';
        document.getElementById('email').style.border = '2px solid hsl(0, 100%, 74%)';
        document.getElementById("email").placeholder = "email@example.com";
        // document.getElementById("email").placeholder.style.color = 'hsl(0, 100%, 74%)';
        document.getElementById('email').classList.add('placeholderClr');

    }



})







