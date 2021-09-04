let titleLengthChecker = (title) => {
    if (!title) {
        return false;
    } else {
        if (title.length < 5 || title.length > 50) {
            return false
        } else {
            return true
        }
    }
}

let alphaNumericTitleChecker = (title) => {
    if (!title) {
        return false;
    } else {
        const regex = new RegExp(/^[a-zA-Z0-9]+$/)
        return regex.test(title)
    }
}

let bodyLengthChecker = (body) => {
    if (!body) {
        return false
    } else {
        if (body.length < 5 || body.length > 500) {
            return false
        } else {
            return ture
        }
    }
}

let commentLengthChecker = (comment) => {
    if (!comment[0]) {
        return false
    } else {
        if (comment[0].length < 1 || comment[0].length > 200) {
            return false
        } else {
            return true
        }
    }
}

let validPassword = (password) => {
    if (!password) {
        return false
    } else {
        const regex = new RegExp((/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/))
        return regex.test(password)
    }
}

let getPasswordStrength = () => {
    let timeout,
        password = document.getElementById('pass-entry'),
        strengthBadge = document.getElementById('pass-entry-strength'),
        strongPasword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}')
        mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

    let strengthChecker = (param) => {
        if (password.val() !== '') {
            if (strongPasword.test(param)) {
                strengthBadge.style.backgroundColor = 'green'
                strengthBadge.textContent = 'Strong'
            } else if (mediumPassword.test(param)) {
                strengthBadge.style.backgroundColor = 'blue'
                strengthBadge.textContent = 'Medium'
            } else {
                strengthBadge.style.backgroundColor = 'red'
                strengthBadge.textContent = 'Weak'
            }
        }
    }
}