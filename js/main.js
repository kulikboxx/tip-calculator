'use strict';

const amount = document.querySelector('.amount'),
    peoples = document.querySelector('.peoples'),
    select = document.querySelector('.tip'),
    result = document.querySelector('.result'),
    clear = document.querySelector('.clear'),
    error = document.querySelector('.error');

const showResult = () => {
    let res = (+amount.value + ((+amount.value * select.value) / 100)) / +peoples.value;
    result.textContent = res.toFixed(2);
}

const checkInputs = () => {
    if (+amount.value === 0) amount.value = '';
    if (+peoples.value === 0) peoples.value = '';

    if (amount.value !== '' && peoples.value === '' && select.value == 0) {
        error.style.display = 'block';
        error.textContent = 'Please fill out all required fields!';
        result.textContent = '0.00';
    } else if (amount.value === '' && peoples.value !== '' && select.value == 0) {
        error.style.display = 'block';
        error.textContent = 'Please fill out all required fields!';
        result.textContent = '0.00';
    } else if (amount.value === '' && peoples.value === '' && select.value !== 0) {
        error.style.display = 'block';
        error.textContent = 'Please fill out all required fields!';
        result.textContent = '0.00';
    } else if (amount.value !== '' && peoples.value === '' && select.value !== 0) {
        error.style.display = 'block';
        error.textContent = 'Please fill out all required fields!';
        result.textContent = '0.00';
    } else if (amount.value === '' && peoples.value !== '' && select.value !== 0) {
        error.style.display = 'block';
        error.textContent = 'Please fill out all required fields!';
        result.textContent = '0.00';
    } else if (amount.value !== '' && peoples.value !== '' && select.value == 0) {
        error.style.display = 'block';
        error.textContent = 'Please fill out all required fields!';
        result.textContent = '0.00';
    } else {
        error.style.display = 'none';
        showResult();
    }
}

amount.addEventListener('focusout', checkInputs);
peoples.addEventListener('focusout', checkInputs);
select.addEventListener('change', checkInputs);
clear.addEventListener('click', () => {
    amount.value = '';
    peoples.value = '';
    select.value = 0;

    if (error.style.display === 'block') {
        error.style.display = 'none';
    }
});