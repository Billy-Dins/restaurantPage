import mikelbaka from '../assets/imgs/Mikelbaka.jpg'

const home = function() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const background = document.createElement('img');
    background.src = mikelbaka;
    background.classList.add('background');
    content.appendChild(background);

    const homeContent = function () {
        const mainContent = document.createElement('main');
        mainContent.classList.add('homeContent');
        content.appendChild(mainContent);

        const tabOne = document.createElement('div');
        tabOne.id = 'tabOne';
        tabOne.classList.add('homeTab');
        tabOne.textContent = 'Grupām no 10 līdz 250, lūdzu, aizpildiet mūsu anketu. Ir pieejama telpu īre, personlizēta ēdienkarte un dzērienu paketes.'
        mainContent.appendChild(tabOne);

        const tabTwo = document.createElement('div');
        tabTwo.id = 'tabTwo';
        tabTwo.classList.add('homeTab');
        tabTwo.textContent = 'Pusdienot uz vietas, ēdiens līdzi ņemšanai, piegāde.'
        mainContent.appendChild(tabTwo);

        const tabThree = document.createElement('div');
        tabThree.id = 'tabThree';
        tabThree.classList.add('homeTab');
        tabThree.textContent = 'Nopelniet balvas!';
        mainContent.appendChild(tabThree);
    };

    homeContent();
};

export default home