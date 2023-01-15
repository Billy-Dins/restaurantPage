import skyline from '../assets/imgs/RigaSkyline.jpg'

const content = document.querySelector('#content')

const menu = function() {
    const RigaSkyline = new Image();
    RigaSkyline.src = skyline;
    RigaSkyline.classList.add('Riga')
    content.appendChild(RigaSkyline);

    const menuContent = function () {
        const menuContent = document.createElement('main');
        menuContent.classList.add('menuContent');
        content.appendChild(menuContent);

        const menuItemOne = document.createElement('div');
        menuItemOne.id = 'menuItemOne';
        menuItemOne.classList.add('menuTab');
        menuItemOne.textContent = 'Some Appettizer'
        menuContent.appendChild(menuItemOne);

        const menuItemTwo = document.createElement('div');
        menuItemTwo.id = 'menuItemTwo';
        menuItemTwo.classList.add('menuTab');
        menuItemTwo.textContent = 'Some main course'
        menuContent.appendChild(menuItemTwo);

        const menuItemThree = document.createElement('div');
        menuItemThree.id = 'menuItemThree';
        menuItemThree.classList.add('menuTab');
        menuItemThree.textContent = 'Some other main course';
        menuContent.appendChild(menuItemThree);

        const menuItemFour = document.createElement('div');
        menuItemFour.id = 'menuItemFour';
        menuItemFour.classList.add('menuTab');
        menuItemFour.textContent = 'Some dessert'
        menuContent.appendChild(menuItemFour);

        const menuItemFive = document.createElement('div');
        menuItemFive.id = 'menuItemFive';
        menuItemFive.classList.add('menuTab');
        menuItemFive.textContent = 'Some Other Dessert';
        menuContent.appendChild(menuItemFive);
    };

    menuContent();
};

export default menu;