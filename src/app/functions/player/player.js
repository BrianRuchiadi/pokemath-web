export const playerSetup = (element, avatarId = 1) => {
    element.style.top = '0px';
    element.style.left = '0px';
    element.style.width = '50px';
    element.style.height = '50px';
    element.style.backgroundImage = 'url("./assets/avatars/' + avatarId + '/face-down.png")';

    return element;
}