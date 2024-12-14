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
        activePopup = null; 
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
        'https://web.archive.org/web/20091024082447/http://www.geocities.com/chat_la_disco_gholum/h651.gif'
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