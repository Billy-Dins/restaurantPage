import bridge from '../assets/imgs/bridge.jpg'

import sweetSoups from '../assets/imgs/sweetSoup.jpg'
import honeyCakes from '../assets/imgs/honeyCake.jpg'
import pancakes from '../assets/imgs/pancakes.jpg'
import debesmanna from '../assets/imgs/debesmanna.jpg'
import breadPudding from '../assets/imgs/rupjmaizes-kartojums.jpg'


const content = document.querySelector('#content')

const desserts = function() {
        const dessertBackground = new Image();
        dessertBackground.id = 'dessert-background'
        dessertBackground.src = bridge
        content.appendChild(dessertBackground);

    const dessertContent = function () {
        const dessertContent = document.createElement('main');
        dessertContent.classList.add('dessertContent');
        content.appendChild(dessertContent);
// --------------------------------------------------------- //
        const dessertItemOne = document.createElement('div');
        dessertItemOne.id = 'dessertItemOne';
        dessertItemOne.classList.add('dessertTab');

        const dessertOneTitle = document.createElement('div');
        dessertOneTitle.textContent = 'Maizes zupa';
        dessertOneTitle.id = 'dessertOneTitle'
        dessertItemOne.appendChild(dessertOneTitle);

        const dessertTextOne = document.createElement('div');
        dessertTextOne.classList.add('dessert-text');
        dessertTextOne.textContent = 'Klasiskā maizes zupa, apvieno rupjmaizi ar garšvielām, cukuru un žāvētiem augļiem. Google saka, ka to vislabāk var pasniegt aukstā Elza...'
        dessertItemOne.appendChild(dessertTextOne);

        const sweetSoup = new Image();
        sweetSoup.src = sweetSoups
        sweetSoup.id = 'sweet-soup'
        dessertItemOne.appendChild(sweetSoup);
        dessertContent.appendChild(dessertItemOne);
// ---------------------------------------------------------- //
        const dessertItemTwo = document.createElement('div');
        dessertItemTwo.id = 'dessertItemTwo';
        dessertItemTwo.classList.add('dessertTab');

        const dessertTwoTitle = document.createElement('div');
        dessertTwoTitle.textContent = 'Medus kūka';
        dessertTwoTitle.id = 'dessertTwoTitle'
        dessertItemTwo.appendChild(dessertTwoTitle);

        const honeyCake = new Image();
        honeyCake.src = honeyCakes;
        honeyCake.id = 'honey-cake';
        dessertItemTwo.appendChild(honeyCake);

        const dessertTwoText = document.createElement('div');
        dessertTwoText.classList.add('dessert-text')
        dessertTwoText.textContent = 'Šī medus kūka ir tik mīksta un fantastiska. Kūkas kārtās ceptais medus lieliski sader ar vienkāršu saldā krējuma glazūru.'
        dessertItemTwo.appendChild(dessertTwoText);
        dessertContent.appendChild(dessertItemTwo);
// ------------------------------------------------------------ //
        const dessertItemThree = document.createElement('div');
        dessertItemThree.id = 'dessertItemThree';
        dessertItemThree.classList.add('dessertTab');

        const dessertThreeTitle = document.createElement('div');
        dessertThreeTitle.textContent = 'pankūkas pildītas ar biezpienu';
        dessertThreeTitle.id = 'dessertThreeTitle'
        dessertItemThree.appendChild(dessertThreeTitle);

        const dessertThreeText = document.createElement('div');
        dessertThreeText.classList.add('dessert-text')
        dessertThreeText.textContent = 'Katru rītu svaigas pankūkas pildītas ar biezpienu. Garšīgs un absolūts mīļākais'
        dessertItemThree.appendChild(dessertThreeText);

        const pancake = new Image();
        pancake.src = pancakes;
        pancake.id = 'pancake';
        dessertItemThree.appendChild(pancake);
        dessertContent.appendChild(dessertItemThree);
// ---------------------------------------------------------- //
        const dessertItemFour = document.createElement('div');
        dessertItemFour.id = 'dessertItemFour';
        dessertItemFour.classList.add('dessertTab');

        const mousse = new Image();
        mousse.src = debesmanna;
        mousse.id = 'mousse'
        dessertItemFour.appendChild(mousse);

        const dessertFourTitle = document.createElement('div');
        dessertFourTitle.textContent = 'Debesmanna';
        dessertFourTitle.id = 'dessertFourTitle'
        dessertItemFour.appendChild(dessertFourTitle);

        const dessertFourText = document.createElement('div')
        dessertFourText.classList.add('dessert-text')
        dessertFourText.textContent = 'upeņu un ābolu biezenis sajaukts ar saldo krējumu, lai tas paliktu maigs un krēmīgs. Bet uzmanies! Jums varētu sagribēties otro porciju.'
        dessertItemFour.appendChild(dessertFourText);
        dessertContent.appendChild(dessertItemFour);
// ----------------------------------------------------------- //
        const dessertItemFive = document.createElement('div');
        dessertItemFive.id = 'dessertItemFive';
        dessertItemFive.classList.add('dessertTab');

        const dessertFiveTitle = document.createElement('div');
        dessertFiveTitle.textContent = 'Rupjmaizes kārtojums';
        dessertFiveTitle.id = 'dessertFiveTitle'
        dessertItemFive.appendChild(dessertFiveTitle);

        const dessertFiveText = document.createElement('div');
        dessertFiveText.classList.add('dessert-text')
        dessertFiveText.textContent = 'Smalki sarīvēts, pēc tam grauzdēts rupjmaizes pudiņš, kas aromatizēts ar kanēli un cukuru. Noteikti jāmirst';
        dessertItemFive.appendChild(dessertFiveText);

        const pudding = new Image();
        pudding.src = breadPudding;
        pudding.id = 'pudding';
        dessertItemFive.appendChild(pudding);
        dessertContent.appendChild(dessertItemFive);
    };

    dessertContent();
}

export default desserts