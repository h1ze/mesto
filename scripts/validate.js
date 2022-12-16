const inputs = document.querySelectorAll('.form__input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const error = document.querySelector(`.${input.id}-error`);
        if (input.validity.valid) {
            //убрать ошибку
            error.textContent = '';
        } else {
            //показать ошибку
            error.textContent = 'Ошибка!';
        }
    })
})