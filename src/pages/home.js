import calendar from '../assets/icons/calendar.png'
import clock from '../assets/icons/clock.png'
import people from '../assets/icons/people.png'

const home = function() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const homeContent = function () {
        const mainContent = document.createElement('main');
        mainContent.classList.add('homeContent');
        content.appendChild(mainContent);
// ---------------- about us tab ------------------ //
        const tabOne = document.createElement('div');
        tabOne.id = 'about-us';
        tabOne.classList.add('homeTab');
        const aboutTitle = document.createElement('div')
        aboutTitle.id = 'about-us-title'
        aboutTitle.textContent = 'About us'
        tabOne.appendChild(aboutTitle);
        const aboutText = document.createElement('div')
        aboutText.id = 'about-us-text'
        aboutText.textContent = 'Mēs esam apceļojuši pasauli un baudījuši daudzas brīnišķīgas maltītes daudzās vietās. Mūsu secinājums: labākās maltītes tiek gatavotas no svaigākajiem, vietējiem produktiem. Mēs atbalstām savus vietējos lauksaimniekus un vēlamies saviem viesiem nodrošināt vislabāko ēdināšanas pieredzi. Mūsu ēdienkarte ir sagatavota no vietēji audzētiem, sezonas augļiem un dārzeņiem, kā arī uz vietas ražotas gaļas un amatnieku sieriem. Mūsu ēdienkarte ir apvienota ar vietējām garšām un receptēm. Mūsu unikālā, garšīgā virtuve, ko papildina rūpīgi atlasīti Latvijas un Baltijas vīni, atspoguļo mūsu mīlestību pret izcilu ēdienu, izcilu vīnu un mūsu sabiedrības atzinību.'
        tabOne.appendChild(aboutText);
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
            const party1 = document.createElement('option')
            party1.textContent = '1 - 2';
            resSizeDrop.appendChild(party1);
            const party2 = document.createElement('option')
            party2.textContent = '3 - 4';
            resSizeDrop.appendChild(party2);
            const party3 = document.createElement('option')
            party3.textContent = '5 - 8';
            resSizeDrop.appendChild(party3);
            const party4 = document.createElement('option')
            party4.textContent = '9 +';
            resSizeDrop.appendChild(party4);
            resSize.appendChild(resSizeDrop);
            resForm.appendChild(resSize)

            const resBtn = document.createElement('button')
            resBtn.id = 'res-submit-btn';
            resBtn.textContent = 'Find a table'
            resBtn.addEventListener('click', (e) => {
                e.preventDefault();
            })
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
        quantAdd.addEventListener('click', (e) => {
            e.preventDefault();
        })
        giftForm.appendChild(quantAdd)

        const giftCheckout = document.createElement('button');
        giftCheckout.id = 'gift-checkout-btn';
        giftCheckout.textContent = 'Checkout'
        giftCheckout.addEventListener('click', (e) => {
            e.preventDefault();
        })
        giftForm.appendChild(giftCheckout);

        tabThree.appendChild(giftForm);
        mainContent.appendChild(tabThree);
    };

    homeContent();
};

export default home