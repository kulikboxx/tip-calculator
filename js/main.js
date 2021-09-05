"use strict";

const messages = {
    reqField: "Please fill out all required fields!",
};

function showError(alert) {
    document.querySelector('.error').textContent = alert;
}

function showResult(amount, people, tip) {
    let result = document.querySelector('.result');
    result.textContent = ((amount + (amount * tip) / 100) / people).toFixed(2);
};

function checkFields(selector) {
    let amount, people, tip,
        inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        switch (input.getAttribute('id')) {
            case 'amount':
                amount = +input.value;
                break;
            case 'people':
                people = +input.value;
                break;
            case 'tip':
                tip = +input.value;
                break;
        }
    });

    if (amount == 0 || people == 0 || tip == 0) {
        showError(messages.reqField);
    } else {
        showError();
        showResult(amount, people, tip);
    }
};

document.addEventListener('input', () => checkFields('.input'));

document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll('.input').forEach(input => input.value = 0);
    document.querySelector('.result').textContent = '0';
    showError();
});