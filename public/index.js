document.addEventListener('DOMContentLoaded', function () {
    const mainPageLink = document.querySelector('.main-page-button');
    const aboutPageLink = document.querySelector('.about-button');
    const dataContainer = document.querySelector('.data-container');

    mainPageLink.addEventListener('click', function (event) {
        event.preventDefault();

        fetch('/mainPage')
            .then(response => response.text())
            .then(html => {
                dataContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    aboutPageLink.addEventListener('click', function (event) {
        event.preventDefault();

        fetch('/aboutPage')
            .then(response => response.text())
            .then(html => {
                dataContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});