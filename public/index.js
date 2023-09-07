document.addEventListener('DOMContentLoaded', function () {
    const mainPageLink = document.querySelector('.main-page-button');
    const dataContainer = document.querySelector('.data-container');

    mainPageLink.addEventListener('click', function (event) {
        event.preventDefault();

        fetch('/mainPage')
            .then(response => response.text())
            .then(html => {
                dataContainer.innerHTML = html;
                //nomainija url
                history.pushState(null, '', '/mainPage');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutPageLink = document.querySelector('.about-button');
    const dataContainer = document.querySelector('.data-container');

    aboutPageLink.addEventListener('click', function (event) {
        event.preventDefault();

        fetch('/aboutPage')
            .then(response => response.text())
            .then(html => {
                dataContainer.innerHTML = html;
                //nomainija url
                history.pushState(null, '', '/aboutPage');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});