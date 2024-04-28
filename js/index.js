// Находим элементы
const form = document.querySelector('#form');
const input = document.querySelector('#url');
const qrCardWrapper = document.querySelector('.card__qr');
const formBtn = document.querySelector('.card__btn');
input.focus();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Очищаем обвёртку под QR-код
    qrCardWrapper.innerHTML = '';

    // Держим фокус на поле ввода
    input.focus();

    // Формируем запрос
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&format=svg&data=`;
    const request = api + input.value;

    // Очищаем поле ввода
    input.value = '';

    // Генерируем разметку под картинку
    const img = `<img clas="card__qr-img" src="${request}" alt="QR code">`

    // Добавляем картинку на страницу
    qrCardWrapper.classList.add('open');
    qrCardWrapper.insertAdjacentHTML('beforeend', img);
})