import ventspilsPic from '../assets/imgs/ventspils.jpg'

const content = document.querySelector('#content')

const contact = function() {
    const contactBackground = new Image();
    contactBackground.src = ventspilsPic;
    contactBackground.id = 'contact-background';
    content.appendChild(contactBackground);

    const contactContent = document.createElement('div');
    contactContent.id = 'contact-content';
    content.appendChild(contactContent);

    const contactTabOne = document.createElement('div');
    contactTabOne.id = 'contact-tab-one';
    contactContent.appendChild(contactTabOne);
}

export default contact