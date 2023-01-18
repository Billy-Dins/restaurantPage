import ventspilsPic from '../assets/imgs/ventspils.jpg'

console.log('hello')
const content = document.querySelector('#content')

const reservations = function() {
    const resBackground = new Image();
    resBackground.src = ventspilsPic;
    resBackground.id = 'res-background';
    content.appendChild(resBackground);

    const resContent = document.createElement('div');
    resContent.id = 'res-content';
    content.appendChild(resContent);

    const resTabOne = document.createElement('div');
    resTabOne.id = 'res-tab-one';
    resContent.appendChild(resTabOne);
}

export default reservations