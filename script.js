function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username === 'user' && password === 'user') || (username === 'guest' && password === 'guest')) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        startClock();
    } else {
        alert('Falscher Benutzername oder falsches Passwort');
    }
}

function guestLogin() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
    startClock();
}

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

function startClock() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// Drag and drop functionality for windows
const draggables = document.querySelectorAll('.window');
const desktop = document.getElementById('desktop');

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', (e) => {
        let offsetX = e.clientX - draggable.offsetLeft;
        let offsetY = e.clientY - draggable.offsetTop;

        function onMouseMove(e) {
            draggable.style.left = `${e.clientX - offsetX}px`;
            draggable.style.top = `${e.clientY - offsetY}px`;
        }

        desktop.addEventListener('mousemove', onMouseMove);

        draggable.addEventListener('mouseup', () => {
            desktop.removeEventListener('mousemove', onMouseMove);
        });

        draggable.addEventListener('mouseleave', () => {
            desktop.removeEventListener('mousemove', onMouseMove);
        });
    });
});
