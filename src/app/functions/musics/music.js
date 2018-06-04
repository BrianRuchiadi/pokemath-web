export const startMusic = (element) => {
    element.play();
    element.loop = true;

    return element;
}

export const startMusicOnce = (element) => {
    element.play();
    
    return element;
}

export const stopMusic = (element) => {
    element.currentTime = 0;
    element.pause();

    return element;
}