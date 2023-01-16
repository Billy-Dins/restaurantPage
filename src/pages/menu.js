import skyline from '../assets/imgs/RigaSkyline.jpg'

const content = document.querySelector('#content')

const main = function() {
    const RigaSkyline = new Image();
    RigaSkyline.src = skyline;
    RigaSkyline.classList.add('Riga')
    content.appendChild(RigaSkyline);

    const mainContent = function () {
        const mainContent = document.createElement('main');
        mainContent.classList.add('mainContent');
        content.appendChild(mainContent);

        const mainItemOne = document.createElement('div');
        mainItemOne.id = 'mainItemOne';
        mainItemOne.classList.add('mainTab');
        mainItemOne.textContent = 'Some Appetizer'
        mainContent.appendChild(mainItemOne);

        const mainItemTwo = document.createElement('div');
        mainItemTwo.id = 'mainItemTwo';
        mainItemTwo.classList.add('mainTab');
        mainItemTwo.textContent = 'Some main course'
        mainContent.appendChild(mainItemTwo);

        const mainItemThree = document.createElement('div');
        mainItemThree.id = 'mainItemThree';
        mainItemThree.classList.add('mainTab');
        mainItemThree.textContent = 'Some other main course';
        mainContent.appendChild(mainItemThree);
    };

    mainContent();
};

export default main;