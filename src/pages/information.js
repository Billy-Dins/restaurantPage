import ventspilsPic from '../assets/imgs/ventspils.jpg'

const content = document.querySelector('#content')

const information = function() {
    const informationBackground = new Image();
    informationBackground.src = ventspilsPic;
    informationBackground.id = 'information-background';
    content.appendChild(informationBackground);

    const informationContent = document.createElement('div');
    informationContent.id = 'information-content';
    content.appendChild(informationContent);

    const informationTabOne = document.createElement('div');
    informationTabOne.id = 'information-tab-one';
    informationContent.appendChild(informationTabOne);
}

export default information