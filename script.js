document.addEventListener("DOMContentLoaded", function () {

const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");

//  código js para mostrar/ocultar senha e alterar ícone
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if (pwField.type ==="password") {
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        }) 
    })
})

    // Inicialmente, mostre a tela de login e oculte as outras telas
    showLoginForm();

    // Manipuladores de eventos para alternar entre telas
    document.querySelector('.signup-link').addEventListener('click', showSignupForm);
    document.querySelector('.login-link').addEventListener('click', showLoginForm);
    document.querySelector('.forgot-password-email-link').addEventListener('click', showForgotPasswordEmailForm);
    document.querySelector('.back-to-login1-link').addEventListener('click', showLoginForm);
    document.querySelector('.forgot-password-phone-link').addEventListener('click', showForgotPasswordPhoneForm);
    document.querySelector('.back-to-login2-link').addEventListener('click', showLoginForm);
    document.querySelector('.back-to-email-link').addEventListener('click', showForgotPasswordEmailForm);
    
function showLoginForm() {
    // Código para exibir a tela de login
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const forgotPasswordEmailForm = document.querySelector('.form.forgotPasswordEmail');
    const forgotPasswordPhoneForm = document.querySelector('.form.forgotPasswordPhone');
    const forgotPasswordNewForm = document.querySelector('.form.forgotPasswordNew');

    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    forgotPasswordEmailForm.style.display = 'none';
    forgotPasswordPhoneForm.style.display = 'none';
    forgotPasswordNewForm.style.display = 'none';
}

function showSignupForm() {
    // Código para exibir a tela de cadastro
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const forgotPasswordEmailForm = document.querySelector('.form.forgotPasswordEmail');
    const forgotPasswordPhoneForm = document.querySelector('.form.forgotPasswordPhone');
    const forgotPasswordNewForm = document.querySelector('.form.forgotPasswordNew');

    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    forgotPasswordEmailForm.style.display = 'none';
    forgotPasswordPhoneForm.style.display = 'none';
    forgotPasswordNewForm.style.display = 'none';
}

function showForgotPasswordEmailForm() {
    // Código para exibir a tela de redefinição de senha por email
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const forgotPasswordEmailForm = document.querySelector('.form.forgotPasswordEmail');
    const forgotPasswordPhoneForm = document.querySelector('.form.forgotPasswordPhone');
    const forgotPasswordNewForm = document.querySelector('.form.forgotPasswordNew');

    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    forgotPasswordEmailForm.style.display = 'block';
    forgotPasswordPhoneForm.style.display = 'none';
    forgotPasswordNewForm.style.display = 'none';
}

function showForgotPasswordPhoneForm() {
    // Código para exibir a tela de redefinição de senha por telefone
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const forgotPasswordEmailForm = document.querySelector('.form.forgotPasswordEmail');
    const forgotPasswordPhoneForm = document.querySelector('.form.forgotPasswordPhone');
    const forgotPasswordNewForm = document.querySelector('.form.forgotPasswordNew');

    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    forgotPasswordEmailForm.style.display = 'none';
    forgotPasswordPhoneForm.style.display = 'block';
    forgotPasswordNewForm.style.display = 'none';
}

function showForgotPasswordNewForm() {
    // Código para exibir a tela de redefinição de senha com código de ativação
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const forgotPasswordEmailForm = document.querySelector('.form.forgotPasswordEmail');
    const forgotPasswordPhoneForm = document.querySelector('.form.forgotPasswordPhone');
    const forgotPasswordNewForm = document.querySelector('.form.forgotPasswordNew');

    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    forgotPasswordEmailForm.style.display = 'none';
    forgotPasswordPhoneForm.style.display = 'none';
    forgotPasswordNewForm.style.display = 'block';
}
    const send1CodeButton = document.getElementById('sendCodeButton1');

        // Adicionar um evento de clique ao botão
        send1CodeButton.addEventListener('click', function() {
            showForgotPasswordNewForm(); // Chama a função para mostrar a tela de Redefinição de Senha NEW Form
        });

    const send2CodeButton = document.getElementById('sendCodeButton2');

        // Adicionar um evento de clique ao botão
        send2CodeButton.addEventListener('click', function() {
            showForgotPasswordNewForm(); // Chama a função para mostrar a tela de Redefinição de Senha NEW Form
        });

    const reset = document.getElementById('reset');

        // Adicionar evento de clique ao botão "Redefinir"
        reset.addEventListener('click', function() {
            showLoginForm(); // Chama a função para mostrar a tela de Login
        });
});