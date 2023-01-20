import ventspilsPic from '../assets/imgs/ventspils.jpg'

import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import tripadvisor from '../assets/icons/tripadvisor.png'

const content = document.querySelector('#content')

const information = function() {
    const informationBackground = new Image();
    informationBackground.src = ventspilsPic;
    informationBackground.id = 'information-background';
    content.appendChild(informationBackground);

    const informationContent = document.createElement('div');
    informationContent.id = 'information-content';
    content.appendChild(informationContent);

    const infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    infoContact.classList.add('info-tab');
    informationContent.appendChild(infoContact);

    const infoContactTitle = document.createElement('div');
    infoContactTitle.id = 'info-contact-title';
    infoContactTitle.textContent = 'Contact'
    infoContact.appendChild(infoContactTitle);

    const infoContactEmail = document.createElement('div');
    infoContactEmail.id = 'info-contact-email';
    infoContactEmail.textContent = 'Email: ElzasTastyYumYums@gmail.com';
    infoContact.appendChild(infoContactEmail);

    const infoContactPhone = document.createElement('div');
    infoContactPhone.id = 'info-contact-phone';
    infoContactPhone.textContent = 'Phone: 371 27 841 572';
    infoContact.appendChild(infoContactPhone);

    const infoContactAddress = document.createElement('div');
    infoContactAddress.id = 'info-contact-address';
    infoContactAddress.textContent = 'Brīvības iela 3/7, Liepāja, LV-3401, Latvia';
    infoContact.appendChild(infoContactAddress);

    const infoContactSocial = document.createElement('div');
    infoContactSocial.id = 'info-contact-social';

        const contactSocialFB = document.createElement('a')
        contactSocialFB.setAttribute('href', 'https://www.instagram.com/billy_dins/')
        contactSocialFB.classList.add('social-btn')
        contactSocialFB.id = 'social-btn-facebook'

            const socialFBIcon = new Image();
            socialFBIcon.src = facebook;
            socialFBIcon.classList.add('social-icon')
            socialFBIcon.id = 'facebook-icon'
            contactSocialFB.appendChild(socialFBIcon);

            const socialFBText = document.createElement('span');
            socialFBText.classList.add('social-text');
            socialFBText.id = 'facebook-text';
            socialFBText.textContent = 'Facebook'
            contactSocialFB.appendChild(socialFBText);

        const contactSocialTwitter = document.createElement('a');
        contactSocialTwitter.setAttribute('href', 'https://www.instagram.com/billy_dins/')
        contactSocialTwitter.classList.add('social-btn');
        contactSocialTwitter.id = 'social-btn-twitter'

            const socialTwitterIcon = new Image();
            socialTwitterIcon.src = twitter;
            socialTwitterIcon.classList.add('social-icon')
            socialTwitterIcon.id = 'twitter-icon'
            contactSocialTwitter.appendChild(socialTwitterIcon);

            const socialTwitterText = document.createElement('span');
            socialTwitterText.classList.add('social-text');
            socialTwitterText.id = 'Twitter-text';
            socialTwitterText.textContent = 'Twitter'
            contactSocialTwitter.appendChild(socialTwitterText);

            const contactSocialTA = document.createElement('a');
            contactSocialTA.setAttribute('href', 'https://www.instagram.com/billy_dins/')
            contactSocialTA.classList.add('social-btn');
            contactSocialTA.id = 'social-btn-tripadvisor'
    
                const socialTAIcon = new Image();
                socialTAIcon.src = tripadvisor;
                socialTAIcon.classList.add('social-icon')
                socialTAIcon.id = 'tripadvisor-icon'
                contactSocialTA.appendChild(socialTAIcon);
    
                const socialTAText = document.createElement('span');
                socialTAText.classList.add('social-text');
                socialTAText.id = 'Tripadvisor-text';
                socialTAText.textContent = 'Trip Advisor'
                contactSocialTA.appendChild(socialTAText);

        infoContactSocial.appendChild(contactSocialFB);
        infoContactSocial.appendChild(contactSocialTwitter);
        infoContactSocial.appendChild(contactSocialTA)
    infoContact.appendChild(infoContactSocial);

    const infoLocation = document.createElement('div');
    infoLocation.id = 'info-location';
    infoLocation.classList.add('info-tab');
    informationContent.appendChild(infoLocation);

    const infoHours = document.createElement('div');
    infoHours.id = 'info-hours';
    infoHours.classList.add('info-tab');
    informationContent.appendChild(infoHours);
}

export default information