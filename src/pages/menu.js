import skyline from '../assets/imgs/RigaSkyline.jpg'
import debesmanna from '../assets/imgs/debesmanna.jpg'
import breadPudding from '../assets/imgs/rupjmaizes-kartojums.jpg'

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
        const mousse = new Image();
        mousse.src = debesmanna;
        mousse.id = 'mousse'
        menuItemFour.appendChild(mousse);
        menuItemFour.id = 'menuItemFour';
        menuItemFour.classList.add('menuTab');
        const menuFourText = document.createElement('div')
        menuFourText.textContent = 'upenes ar ābolu biezeni sajauc ar krējumu, lai padarītu šo maigu un krēmīgu peli. Bet uzmanieties, jūs varētu vēlēties sekundes'
        menuItemFour.appendChild(menuFourText);
        menuContent.appendChild(menuItemFour);

        const menuItemFive = document.createElement('div');
        menuItemFive.id = 'menuItemFive';
        menuItemFive.classList.add('menuTab');
        const menuFiveText = document.createElement('div');
        menuFiveText.textContent = 'Smalki sarīvēts, pēc tam grauzdēts rupjmaizes pudiņš, kas aromatizēts ar kanēli un cukuru. Noteikti jāmirst';
        menuItemFive.appendChild(menuFiveText);
        const pudding = new Image();
        pudding.src = breadPudding;
        pudding.id = 'pudding';
        menuItemFive.appendChild(pudding);
        menuContent.appendChild(menuItemFive);
    };

    menuContent();
};

export default menu;