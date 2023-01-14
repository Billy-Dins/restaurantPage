import skates from '../assets/imgs/skates.jpg';
import mikelbaka from '../assets/imgs/Mikelbaka.jpg'

const home = function() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);

    const headerContent = document.createElement('div');
    headerContent.classList.add('headerContent');
    header.appendChild(headerContent);

    const menuHeader = document.createElement('button');
    menuHeader.classList.add('headerItem');
    menuHeader.textContent = 'Menu'
    headerContent.appendChild(menuHeader);

    const aboutHeader = document.createElement('button');
    aboutHeader.classList.add('headerItem');
    aboutHeader.textContent = 'About'
    headerContent.appendChild(aboutHeader);

    const bookHeader = document.createElement('button');
    bookHeader.classList.add('headerItem');
    bookHeader.textContent = 'Book';
    headerContent.appendChild(bookHeader);

    const background = document.createElement('img');
    background.src = mikelbaka;
    background.classList.add('background');
    content.appendChild(background);

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

export default home