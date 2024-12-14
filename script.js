window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'WAIT! Do you really want to leave without calling Saul?';
});

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

const iframe = document.querySelector('iframe');
iframe.addEventListener('mousemove', createTrail);

document.addEventListener('mousemove', createTrail);