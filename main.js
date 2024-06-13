function getRandomNum() {
    return Math.ceil(Math.random() * 9);
}

const numImg = getRandomNum();

const arrAltName = ['1969-charger-classic-dodge-saloon', '1970-cars-charger-dodge-engine', '1970-plymouth', 'dodge-charger-383-1966', 'dodge-charger-r-t', 'dodge-charger', 'plymouth-hemi-cuda-1970', 'pontiac-1970-the-front-firebird', 'retro-black-1969'];

document.write(`<img src="./images/${numImg}.jpg" alt="${arrAltName[numImg - 1]}"></img>`);