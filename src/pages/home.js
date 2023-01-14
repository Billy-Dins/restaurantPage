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
        tabOne.classList.add('homeTab');
        tabOne.textContent = 'For groups of 10 - 250 please fill out our inquiry form. Venue buyouts, customized menus and beverage packages are available.'
        mainContent.appendChild(tabOne);

        const tabTwo = document.createElement('div');
        tabTwo.textContent = 'Dine-in!,  Take Out!,  Delivery!'
        tabTwo.classList.add('homeTab');
        mainContent.appendChild(tabTwo);

        const tabThree = document.createElement('div');
        tabThree.textContent = 'Earn Rewards!'
        tabThree.classList.add('homeTab');
        mainContent.appendChild(tabThree)
    };

    homeContent();
};

export default home