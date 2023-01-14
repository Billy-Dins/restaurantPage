import skates from '../assets/imgs/skates.jpg';
import mikelbaka from '../assets/imgs/Mikelbaka.jpg'
import fishBones from '../assets/icons/fish-bones.png'

const home = function() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const background = document.createElement('img');
    background.src = mikelbaka;
    background.classList.add('background');
    content.appendChild(background);

    const createHeader = function() {
        const header = document.createElement('header');
        header.classList.add('header');
        content.appendChild(header);

        const fishHeader = new Image()
        fishHeader.classList.add('headerItem');
        fishHeader.id = 'fishHeader'
        fishHeader.src = fishBones;
        header.appendChild(fishHeader);

        const menuHeader = document.createElement('button');
        menuHeader.classList.add('headerItem');
        menuHeader.textContent = 'Menu'
        header.appendChild(menuHeader);

        const aboutHeader = document.createElement('button');
        aboutHeader.classList.add('headerItem');
        aboutHeader.textContent = 'About'
        header.appendChild(aboutHeader);

        const bookHeader = document.createElement('button');
        bookHeader.classList.add('headerItem');
        bookHeader.textContent = 'Book';
        header.appendChild(bookHeader);
    };

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
    }

    const createFooter = function() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        content.appendChild(footer);

        const footerItemOne = document.createElement('div');
        footerItemOne.classList.add('footerItem');
        footerItemOne.textContent = 'Authentic Latvian Cuisine'
        footer.appendChild(footerItemOne);

        const footerItemTwo = document.createElement('div');
        footerItemTwo.classList.add('footerItem');
        footerItemTwo.textContent = '$'
        footer.appendChild(footerItemTwo);

        const footerItemThree = document.createElement('div');
        footerItemThree.classList.add('footerItem');
        footerItemThree.textContent = 'Casual'
        footer.appendChild(footerItemThree);

        const footerItemFour = document.createElement('div');
        footerItemFour.classList.add('footerItem');
        footerItemFour.textContent = '420-696-6969'
        footer.appendChild(footerItemFour);
    };

    createHeader();
    homeContent();
    createFooter();
};

export default home