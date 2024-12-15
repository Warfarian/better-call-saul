function createTrail(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(trail);
        }, 500);
    }, 100);
}

document.addEventListener('mousemove', createTrail);

let activePopup = null;

function consultationPopUp() {
    if (activePopup) {
        document.body.removeChild(activePopup);
    }
    
    activePopup = document.createElement('div');
    activePopup.innerText = '💼 What\'s cookin, good lookin\'! Need some legal help? Book your consultation NOW! 💰';
    activePopup.style.position = 'fixed';
    activePopup.style.bottom = '20px';
    activePopup.style.right = '20px';
    activePopup.style.backgroundColor = '#FF4500';
    activePopup.style.color = '#FFFF00';
    activePopup.style.padding = '15px';
    activePopup.style.border = '2px dashed #FFD700';
    activePopup.style.borderRadius = '10px';
    activePopup.style.zIndex = '1000';
    activePopup.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.7)';
    activePopup.style.fontSize = '20px';
    activePopup.style.fontWeight = 'bold';
    activePopup.style.textAlign = 'center';

    const closeButton = document.createElement('button');
    closeButton.innerText = '✖️ Close';
    closeButton.style.marginTop = '10px';
    closeButton.style.backgroundColor = '#FF0000';
    closeButton.style.color = '#FFFFFF';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.padding = '5px 10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s, transform 0.3s';
    closeButton.addEventListener('mouseover', () => {
        closeButton.style.backgroundColor = '#FF6347';
        closeButton.style.transform = 'scale(1.1)';
    });
    closeButton.addEventListener('mouseout', () => {
        closeButton.style.backgroundColor = '#FF0000';
        closeButton.style.transform = 'scale(1)';
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(activePopup);
        activePopup = null; // Reset activePopup
    });

    activePopup.appendChild(closeButton); 
    document.body.appendChild(activePopup);

    activePopup.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(1.1)', opacity: 1 },
        { transform: 'scale(1)', opacity: 1 }
    ], {
        duration: 1000,
        iterations: Infinity,
        direction: 'alternate'
    });

    setTimeout(() => {
        if (activePopup) {
            document.body.removeChild(activePopup);
            activePopup = null;
        }
    }, 5000);
}

function randomPopup() {
    const interval = Math.floor(Math.random() * 1000) + 10000; 
    consultationPopUp();
    setTimeout(randomPopup, interval);
}

randomPopup();

let dancePlayed = false;

function showDisco() {
    const discoBackground = document.createElement('div');
    discoBackground.className = 'disco-background';
    document.body.appendChild(discoBackground);
    discoBackground.style.display = 'block';

    const congratsMessage = document.createElement('div');
    congratsMessage.innerText = 'Case dismissed! You\'re walking out a free man!';
    congratsMessage.style.position = 'fixed';
    congratsMessage.style.top = '20%';
    congratsMessage.style.left = '50%';
    congratsMessage.style.transform = 'translate(-50%, -50%)';
    congratsMessage.style.color = 'black';
    congratsMessage.style.fontSize = '40px';
    congratsMessage.style.fontWeight = 'bold';
    congratsMessage.classList = "rainbow-text"
    congratsMessage.style.zIndex = '1001';
    congratsMessage.style.textAlign = 'center';
    document.body.appendChild(congratsMessage);

    const imageUrls = [
        'https://web.archive.org/web/20091027001043/http://cf.geocities.com/discodandan/images/danseur.gif',
        'https://web.archive.org/web/20091019004108/http://cf.geocities.com/discodandan/images/danseuse.gif',
        'https://web.archive.org/web/20090831031245/http://www.geocities.com/chat_la_disco_gholum/h41.gif',
        'https://web.archive.org/web/20091024082447/http://www.geocities.com/chat_la_disco_gholum/h651.gif',
        'https://web.archive.org/web/20090829011515/http://www.geocities.com/nuovoplastico/simbolo_dance_x_bax10xxxxxxxxxxxxxxxxxxxxxxxxxx.gif',
        'https://web.archive.org/web/20090829011514/http://www.geocities.com/nuovoplastico/simbolo_dance_xx_balle1xxxxxxxxxxxxxxxxx.gif',
        'https://web.archive.org/web/20091026153114/http://www.geocities.com/skashow/gdance.gif',
        'https://web.archive.org/web/20091027082009/http://hk.geocities.com/kristylky82/homepagep_2/dance_pic/boa_02.gif',
        'https://web.archive.org/web/20091027092245/http://www.geocities.com/lindakay00/cinderanimdance.gif',
        'https://web.archive.org/web/20091027030153/http://geocities.com/aeromobile_fr/sz-xxxxmdance.gif',
        'https://web.archive.org/web/20090829214253/http://geocities.com/Area51/Orion/1806/dance/shakelmo.gif',
        'https://web.archive.org/web/20090829042843/http://www.geocities.com/poconocowboy/group_dance_ani.gif',
        'https://web.archive.org/web/20091027203948/http://www.geocities.com/benjicantwell33/dance.gif',
        'https://web.archive.org/web/20090820125009/http://geocities.com/neongranny.geo/dance2.gif',
        'https://web.archive.org/web/20001007235316/http://www.geocities.com:80/Tokyo/Bay/1890/torture/xuongdance.gif',
        'https://web.archive.org/web/20091020110013/http://geocities.com/Hollywood/Heights/4737/gifts/babydance.gif',
        'https://web.archive.org/web/20090831160336/http://geocities.com/jeetywild/penguindance.gif',
        'https://web.archive.org/web/20091026144058/http://www.geocities.com/dr_orioli/dancer070.gif',
        'https://web.archive.org/web/20091027141353/http://www.geocities.com/mooniepatrol/penguinDanceCLR.gif',
        'https://web.archive.org/web/20090801121807/http://www.geocities.com/Heartland/Oaks/5770/guydance.gif',
        'https://web.archive.org/web/20090731171126/http://www.geocities.com/flesmus3000/Humanmale_Dance.gif',
        'https://web.archive.org/web/20090831014251/http://geocities.com/megaman_kingdom/Mega_dance.gif',
        'https://web.archive.org/web/20091022074310/http://www.geocities.com/saramiaohmy/dance06.gif',
        'https://web.archive.org/web/20091027073754/http://www.geocities.com/ryan_turner_11/hiphopdancer1.gif',
        'https://web.archive.org/web/20091026131611/http://geocities.com/Hollywood/Club/1403/dance.gif',
        'https://web.archive.org/web/20090808001530/http://www.geocities.com/dream_park99/Orcfemale_Dance.gif',
        'https://web.archive.org/web/20091027133605/http://geocities.com/BourbonStreet/Delta/6118/mangadancer2.gif',
        'https://web.archive.org/web/20091027062258/http://www.geocities.com/ourangelboy7/dance2.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090830211000/http://geocities.com/jeuxjacinthe/Confetti.gif',
        'https://web.archive.org/web/20090724051013/http://au.geocities.com/caseythebigicecube/dancingpenguin.gif',
        'https://web.archive.org/web/20091027041503/http://www.geocities.com/parrot.play/dancingconure.gif',
        'https://web.archive.org/web/20091026103430/http://geocities.com/topping98/Stick_Men_Dancing.gif',
        'https://web.archive.org/web/20091027131018/http://geocities.com/cuperuspe/link.html',
        'https://web.archive.org/web/20091019190350/http://www.geocities.com/wefollowgod/dancingdudes.gif',
        'https://web.archive.org/web/20091019144144/http://www.geocities.com/krumir/ADancingHogges.gif',
        'https://web.archive.org/web/20091026214855/http://geocities.com/thuthao_99/beautydancing.gif',
        'https://web.archive.org/web/20091019154727/http://www.geocities.com/morrisonian82/monkeysdancing_animated.gif',
        'https://web.archive.org/web/20090829152343/http://geocities.com/dionnestags//dancinggoofy.gif',
        'https://web.archive.org/web/20091027082011/http://geocities.com/demonfor20/DancingBanana.gif',
        'https://web.archive.org/web/20091027074440/http://geocities.com/kidstunez/gifs/kidsdancing.gif',
        'https://web.archive.org/web/20091027093648/http://geocities.com/cscbiscuit/dancingbaby.gif',
        'https://web.archive.org/web/20091027090414/http://geocities.com/WallStreet/Bank/8104/robot__dancingA.gif',
        'https://web.archive.org/web/20090803100909/http://www.geocities.com/cjamesw1/dancinggirl2hl.gif',
        'https://web.archive.org/web/20091027153636/http://geocities.com/teachjo3/skeletons_dancing.gif',
        'https://web.archive.org/web/20090820110542/http://geocities.com/groovetech7/DancingSilouette.gif',
        'https://web.archive.org/web/20090831082548/http://geocities.com/codesapo/aliendancing.gif',
        'https://web.archive.org/web/20091026060832/http://www.geocities.com/ramasethu2001/DancingGirlInCode.gif',
        'https://web.archive.org/web/20091021200658/http://www.geocities.com/dancingbears19526/robertp.gif',
        'https://web.archive.org/web/20091019115449/http://www.geocities.com/fmurray3@sbcglobal.net/dancingcat.gif',
        'https://web.archive.org/web/20061003013158/http://www.geocities.com/sideburns_mcgee/dancingaustinpowers.gif',
        'https://web.archive.org/web/20030501225034/http://www.geocities.com:80/ScareyHalloween/lgdancingskeleton.gif',
        'https://web.archive.org/web/20041214121638/http://www.geocities.com/mystomachisharold/dancingpenguin.gif'
    ];

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.style.position = 'fixed';
        img.style.zIndex = '1001';
        img.style.width = '100px';
        img.style.margin = '10px';
        img.style.top = Math.random() * 100 + 'vh';
        img.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(img);

        setTimeout(() => {
            document.body.removeChild(img);
        }, 13000);
    });

    if (!dancePlayed) {
        const applauseSound = document.getElementById('dance-sound');
        applauseSound.play();
        dancePlayed = true;
    }

    setTimeout(() => {
        document.body.removeChild(congratsMessage);
    }, 13000);

    setTimeout(() => {
        discoBackground.style.display = 'none';
        document.body.removeChild(discoBackground);
    }, 13000);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    showDisco();
    this.reset();
});

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = 4;

    const answers = {
        question1: '21',
        question2: 'Attorney',
        question3: 'Supreme Court',
        question4: '18'
    };

    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    document.getElementById('quiz-result').innerText = `You scored ${score} out of ${totalQuestions}!`;
});