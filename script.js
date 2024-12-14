

// Add 90s-style exit popup
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'WAIT! Do you really want to leave without calling Saul?';
});

// Add some classic 90s cursor trails
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