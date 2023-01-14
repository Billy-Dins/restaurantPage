import skyline from '../assets/imgs/RigaSkyline.jpg'

const content = document.querySelector('#content')

const menu = function() {
    const RigaSkyline = new Image();
    RigaSkyline.src = skyline;
    RigaSkyline.classList.add('Riga')
    content.appendChild(RigaSkyline);
};

export default menu;