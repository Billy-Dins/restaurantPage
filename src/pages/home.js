import mikelbaka from '../assets/imgs/Mikelbaka.jpg'
import calendar from '../assets/icons/calendar.png'
import clock from '../assets/icons/clock.png'
import people from '../assets/icons/people.png'

const home = function() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const background = document.createElement('img');
    background.src = mikelbaka;
    background.classList.add('background');
    content.appendChild(background);

    const homeContent = function () {
        const mainContent = document.createElement('main');
        mainContent.classList.add('homeContent');
        content.appendChild(mainContent);
// ---------------- about us tab ------------------ //
        const tabOne = document.createElement('div');
        tabOne.id = 'about-us';
        tabOne.classList.add('homeTab');
        tabOne.textContent = 'Grupām no 10 līdz 250, lūdzu, aizpildiet mūsu anketu. Ir pieejama telpu īre, personlizēta ēdienkarte un dzērienu paketes.'
        mainContent.appendChild(tabOne);
// --------------- reservations form -------------- //
        const tabTwo = document.createElement('div');
        tabTwo.id = 'reservations';
        tabTwo.classList.add('homeTab');

            const resForm = document.createElement('form');
            resForm.id = 'res-form'

            const resTitle = document.createElement('div');
            resTitle.id = 'res-title'
            resTitle.textContent = 'Reservations'
            resForm.appendChild(resTitle);

            const resDate = document.createElement('div');
            resDate.id = 'res-date'
            const resDateIcon = new Image();
            resDateIcon.src = calendar
            resDateIcon.id = 'res-date-icon'
            resDate.appendChild(resDateIcon)
            const resDateTitle = document.createElement('div');
            resDateTitle.id = 'res-date-title'
            resDateTitle.textContent = 'Date'
            resDate.appendChild(resDateTitle);
            const resDateDrop = document.createElement('input');
            resDateDrop.setAttribute('type', 'date')
            resDateDrop.id = 'res-date-drop'
            resDate.appendChild(resDateDrop);
            resForm.appendChild(resDate);

            const resTime = document.createElement('div');
            resTime.id = 'res-time'
            const resTimeIcon = new Image();
            resTimeIcon.src = people
            resTimeIcon.id = 'res-time-icon'
            resTime.appendChild(resTimeIcon)
            const resTimeTitle = document.createElement('div');
            resTimeTitle.id = 'res-time-title'
            resTimeTitle.textContent = 'Time'
            resTime.appendChild(resTimeTitle);
            const resTimeDrop = document.createElement('input');
            resTimeDrop.setAttribute('type', 'time')
            resTimeDrop.id = 'res-time-drop'
            resTime.appendChild(resTimeDrop);
            resForm.appendChild(resTime)

            const resSize = document.createElement('div');
            resSize.id = 'res-size'
            const resSizeIcon = new Image();
            resSizeIcon.src = clock
            resSizeIcon.id = 'res-size-icon'
            resSize.appendChild(resSizeIcon)
            const resSizeTitle = document.createElement('div');
            resSizeTitle.id = 'res-size-title'
            resSizeTitle.textContent = 'Party Size'
            resSize.appendChild(resSizeTitle);
            const resSizeDrop = document.createElement('select')
            resSizeDrop.id = 'res-Size-drop'
            resSize.appendChild(resSizeDrop);
            resForm.appendChild(resSize)

            const resBtn = document.createElement('button')
            resBtn.id = 'res-submit-btn';
            resBtn.textContent = 'Find a table'
            resForm.appendChild(resBtn);

        tabTwo.appendChild(resForm);
        mainContent.appendChild(tabTwo);
// ---------------------------------------------------- //
        const tabThree = document.createElement('div');
        tabThree.id = 'gift-cards';
        tabThree.classList.add('homeTab');

        const giftForm = document.createElement('form');
        giftForm.id = 'gift-card-form';

        const giftTitle = document.createElement('div')
        giftTitle.id = 'gift-card-title';
        giftTitle.textContent = 'Gift cards'
        giftForm.appendChild(giftTitle);

        const giftDenom = document.createElement('select');
        giftDenom.id = 'gift-denomination';

        const denom1 = document.createElement('option');
        denom1.classList.add('gift-card-denominations')
        denom1.textContent = '$50';
        giftDenom.appendChild(denom1);

        const denom2 = document.createElement('option');
        denom2.classList.add('gift-card-denominations')
        denom2.textContent = '$75';
        giftDenom.appendChild(denom2);

        const denom3 = document.createElement('option');
        denom3.classList.add('gift-card-denominations')
        denom3.textContent = '$100';
        giftDenom.appendChild(denom3);
        giftForm.appendChild(giftDenom);

        const giftQuant = document.createElement('select');
        giftQuant.id = 'gift-card-quantity';
        const quant1 = document.createElement('option');
        quant1.classList.add('gift-card-quantities');
        quant1.textContent = '1'
        giftQuant.appendChild(quant1);

        const quant2 = document.createElement('option');
        quant2.classList.add('gift-card-quantities');
        quant2.textContent = '2'
        giftQuant.appendChild(quant2);

        const quant3 = document.createElement('option');
        quant3.classList.add('gift-card-quantities');
        quant3.textContent = '3'
        giftQuant.appendChild(quant3);

        giftForm.appendChild(giftQuant);
        const quantAdd = document.createElement('button');
        quantAdd.id = 'gift-quantity-add';
        quantAdd.textContent = '+';
        giftForm.appendChild(quantAdd)

        const giftCheckout = document.createElement('button');
        giftCheckout.id = 'gift-checkout-btn';
        giftCheckout.textContent = 'Checkout'
        giftForm.appendChild(giftCheckout);

        tabThree.appendChild(giftForm);
        mainContent.appendChild(tabThree);
    };

    homeContent();
};

export default home