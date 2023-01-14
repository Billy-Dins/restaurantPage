import fishBones from '../assets/icons/fish-bones.png'
import home from '../pages/home.js'
import render from './render.js'

const createHeader = function() {
    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);

    const fishHeader = new Image()
    fishHeader.classList.add('headerItem');
    fishHeader.addEventListener('click', function() {
        render();
        console.log('home')
        home();
        createHeader();
        createFooter();
    });
    fishHeader.src = fishBones;
    header.appendChild(fishHeader);

    const menuHeader = document.createElement('button');
    menuHeader.classList.add('headerItem');
    menuHeader.addEventListener('click', function() {
        render();
        console.log('menu')
        createHeader();
        createFooter();
    });
    menuHeader.textContent = 'Menu'
    header.appendChild(menuHeader);

    const aboutHeader = document.createElement('button');
    aboutHeader.classList.add('headerItem');
    aboutHeader.addEventListener('click', function() {
        render();
        console.log('about')
        createHeader();
        createFooter();
    });
    aboutHeader.textContent = 'About'
    header.appendChild(aboutHeader);

    const bookHeader = document.createElement('button');
    bookHeader.classList.add('headerItem');
    bookHeader.addEventListener('click', function() {
        render();
        console.log('book')
        createHeader();
        createFooter();
    });
    bookHeader.textContent = 'Book';
    header.appendChild(bookHeader);
};

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

export { createFooter, createHeader };
