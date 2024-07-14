document.getElementById('name-input').addEventListener('input', function() {
    const name = this.value;
    const avatarIcon = document.getElementById('avatar-icon');
    const displayName = document.getElementById('display-name');
    displayName.textContent = name;
    avatarIcon.style.color = getAvatarColor(name);
});

function getAvatarColor(name) {
    if (!name) return '#000000';
    const colorMapping = {
        A: '#687399', G: '#687399', M: '#687399', S: '#687399', Y: '#687399',
        B: '#6DAEB0', H: '#6DAEB0', N: '#6DAEB0', T: '#6DAEB0', Z: '#6DAEB0',
        C: '#FFDCA8', I: '#FFDCA8', O: '#FFDCA8', U: '#FFDCA8',
        D: '#FAA578', J: '#FAA578', P: '#FAA578', V: '#FAA578',
        E: '#C46693', K: '#C46693', Q: '#C46693', W: '#C46693',
        F: '#78518A', L: '#78518A', R: '#78518A', X: '#78518A'
    };
    const firstLetter = name[0].toUpperCase();
    return colorMapping[firstLetter] || '#000000'; 
}
