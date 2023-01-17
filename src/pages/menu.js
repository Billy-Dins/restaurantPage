import skyline from '../assets/imgs/RigaSkyline.jpg'
import beatSoup from '../assets/imgs/cold-beat-soup.jpg'
import potatoPancakes from '../assets/imgs/potato-pancakes.jpg'
import peaSoup from '../assets/imgs/gray-pea-soup.jpg'
import meatPatty from '../assets/imgs/meat-patty.jpg'
import smokedCod from '../assets/imgs/smoked-cod.jpg'

const content = document.querySelector('#content')

const main = function() {
    const RigaSkyline = new Image();
    RigaSkyline.src = skyline;
    RigaSkyline.classList.add('Riga')
    content.appendChild(RigaSkyline);

    const mainContent = document.createElement('main');
    mainContent.classList.add('mainContent');
// -------------------------------------------------- //
    const mainItemOne = document.createElement('div');
    mainItemOne.id = 'mainItemOne';
    mainItemOne.classList.add('mainTab');

    const coldBeatSoup = new Image();
    coldBeatSoup.src = beatSoup;
    coldBeatSoup.id = 'main-img-one';
    mainItemOne.appendChild(coldBeatSoup);

    const mainTitleOne = document.createElement('div');
    mainTitleOne.id = 'main-title-one';
    mainTitleOne.textContent = 'Aukstā zupa';
    mainItemOne.appendChild(mainTitleOne);

    const mainTextOne = document.createElement('div');
    mainTextOne.id = 'main-text-one';
    mainTextOne.textContent = 'Atsvaidzinoša zupa karstai vasaras dienai, bagāta ar uzturvielām un pārlieta ar cieti vārītu olu';
    mainItemOne.appendChild(mainTextOne);

    mainContent.appendChild(mainItemOne);
// ---------------------------------------------------- //
    const mainItemTwo = document.createElement('div');
    mainItemTwo.id = 'mainItemTwo';
    mainItemTwo.classList.add('mainTab');

    const mainTitleTwo = document.createElement('div');
    mainTitleTwo.id = 'main-title-two';
    mainTitleTwo.textContent = 'Kartupeļu pankūkas'
    mainItemTwo.appendChild(mainTitleTwo);

    const mainTextTwo = document.createElement('div');
    mainTextTwo.id = 'main-text-two';
    mainTextTwo.textContent = 'pagatavots no rīvētu kartupeļu, olu un miltu kombinācijas, tikai ar sāli un pipariem. Cepta līdz zeltaini brūnai, pasniedz ar krējumu un brūkleņu mērci.'
    mainItemTwo.appendChild(mainTextTwo);

    const potatoPancake = new Image();
    potatoPancake.src = potatoPancakes;
    potatoPancake.id = 'main-img-two';
    mainItemTwo.appendChild(potatoPancake);

    mainContent.appendChild(mainItemTwo);
// ---------------------------------------------------- //
    const mainItemThree = document.createElement('div');
    mainItemThree.id = 'mainItemThree';
    mainItemThree.classList.add('mainTab');

    const liepajaCod = new Image();
    liepajaCod.src = smokedCod;
    liepajaCod.id = 'main-img-three';
    mainItemThree.appendChild(liepajaCod);

    const mainTitleThree = document.createElement('div');
    mainTitleThree.id = 'main-title-three';
    mainTitleThree.textContent = 'Aukstā zupa';
    mainItemThree.appendChild(mainTitleThree);

    const mainTextThree = document.createElement('div');
    mainTextThree.id = 'main-text-three';
    mainTextThree.textContent = 'Atsvaidzinoša zupa karstai vasaras dienai, bagāta ar uzturvielām un pārlieta ar cieti vārītu olu';
    mainItemThree.appendChild(mainTextThree);

    mainContent.appendChild(mainItemThree);
// ---------------------------------------------------- //
    const mainItemFour = document.createElement('div');
    mainItemFour.id = 'mainItemFour';
    mainItemFour.classList.add('mainTab');

    const mainTitleFour = document.createElement('div');
    mainTitleFour.id = 'main-title-four';
    mainTitleFour.textContent = 'Kartupeļu pankūkas'
    mainItemFour.appendChild(mainTitleFour);

    const mainTextFour = document.createElement('div');
    mainTextFour.id = 'main-text-four';
    mainTextFour.textContent = 'pagatavots no rīvētu kartupeļu, olu un miltu kombinācijas, tikai ar sāli un pipariem. Cepta līdz zeltaini brūnai, pasniedz ar krējumu un brūkleņu mērci.'
    mainItemFour.appendChild(mainTextFour);

    const grayPeaSoup = new Image();
    grayPeaSoup.src = peaSoup;
    grayPeaSoup.id = 'main-img-four';
    mainItemFour.appendChild(grayPeaSoup);

    mainContent.appendChild(mainItemFour);
    content.appendChild(mainContent)
};

export default main;