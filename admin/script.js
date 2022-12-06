const dom = {
    login: document.getElementById('auth_login'),
    pass: document.getElementById('auth_pass'),
    button: document.getElementById('authFormButton')
}

const authLog = "admin"
const authPas = "admin"

dom.button.addEventListener("click", (e) => {
    e.preventDefault();
    const username = dom.login.value;
    const password = dom.pass.value;

    if (username === authLog && password === authPas) {
        window.location.href = 'add-news/index.html'
    } else {
        alert('Неверные данные')
    }
})
