import skates from '../assets/imgs/skates.jpg';

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

    const background = document.createElement('img');
    background.src = skates;
    background.classList.add('background');
    content.appendChild(background);
};

export default home