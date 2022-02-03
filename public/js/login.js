const loginForm = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#user-input-login');
    const passwordEl = document.querySelector('#password-input-login');
    fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(function() {
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err));
};

document
.querySelector('#login-form')
.addEventListener('submit', loginForm);