import fishBones from '../assets/icons/fish-bones.png'
import shirt from '../assets/icons/shirt.png'
import bill from '../assets/icons/bill.png'
import phone from '../assets/icons/phone.png'

import render from './render.js'
import home from '../pages/home.js'
import menu from '../pages/menu.js'
import desserts from '../pages/desserts.js'
import information from '../pages/information'

const createHeader = function() {
    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);

    const fishHeader = new Image()
    fishHeader.classList.add('headerItem');
    fishHeader.addEventListener('click', function() {
        render();
        home();
        createHeader();
        createFooter();
    });
    fishHeader.src = fishBones;
    header.appendChild(fishHeader);

    const menuHeader = document.createElement('button');
    menuHeader.classList.add('headerItem');
    menuHeader.textContent = 'uzkodas un pamatēdieni'
    menuHeader.addEventListener('click', function() {
        render();
        menu();
        createHeader();
        createFooter();
    });
    header.appendChild(menuHeader);

    const aboutHeader = document.createElement('button');
    aboutHeader.classList.add('headerItem');
    aboutHeader.textContent = 'deserti'
    aboutHeader.addEventListener('click', function() {
        render();
        desserts();
        createHeader();
        createFooter();
    });
    header.appendChild(aboutHeader);

    const bookHeader = document.createElement('button');
    bookHeader.classList.add('headerItem');
    bookHeader.textContent = 'informāciju';
    bookHeader.addEventListener('click', function() {
        render();
        information();
        createHeader();
        createFooter();
    });
    header.appendChild(bookHeader);
};

const createFooter = function() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    content.appendChild(footer);

    const footerItemOne = document.createElement('div');
    footerItemOne.classList.add('footerItem');
    footerItemOne.textContent = 'Autentiska Latviešu virtuve'
    footer.appendChild(footerItemOne);
// ------------------------------------------- //
    const footerItemTwo = document.createElement('div');
    footerItemTwo.classList.add('footerItem');
    const billPrice = new Image();
    billPrice.src = bill;
    billPrice.id = 'billPrice'
    footerItemTwo.appendChild(billPrice);
    const footerPrice = document.createElement('div');
    footerPrice.textContent = '$'
    footerItemTwo.appendChild(footerPrice);
    footer.appendChild(footerItemTwo);
// ------------------------------------------- //
    const footerItemThree = document.createElement('div');
    footerItemThree.classList.add('footerItem');
    const shirtCasual = new Image();
    shirtCasual.src = shirt;
    shirtCasual.id = 'shirtCasual';
    footerItemThree.appendChild(shirtCasual);
    
    const footerCasual = document.createElement('div');
    footerCasual.textContent = 'Ikdienišks'
    footerItemThree.appendChild(footerCasual);
    footer.appendChild(footerItemThree);
// ------------------------------------------ //
    const footerItemFour = document.createElement('div');
    footerItemFour.classList.add('footerItem');
    const telephone = new Image();
    telephone.src = phone;
    telephone.id = 'telephone';
    footerItemFour.appendChild(telephone);

    const footerPhone = document.createElement('div');
    footerPhone.textContent = '371 27 841 569'
    footerItemFour.appendChild(footerPhone);
    footer.appendChild(footerItemFour);
};

export { createFooter, createHeader };
