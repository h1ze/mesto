const forms = [...document.querySelectorAll('.form')];



forms.forEach(form => {
    const inputs = [...document.querySelectorAll('.form__input')];
    const button = form.querySelector('.form__button');
    console.log(button);
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const error = document.querySelector(`.${input.id}-error`);
            // console.log(`.${input.id}`);
            // console.log(`.${input.id}-error`);
            if (input.validity.valid) {
                //убрать ошибку
                error.textContent = '';
            } else {
                //показать ошибку
                error.textContent = input.validationMessage;
            }

            const isFormValid = inputs.every(input =>  input.validity.valid);
            if (isFormValid) {
                console.log("Отключить");
                button.classList.remove('form__button_status_disabled');
            } else {
                button.classList.add('form__button_status_disabled');
            }
        });
    });
});








