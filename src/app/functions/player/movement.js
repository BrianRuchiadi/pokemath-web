export const animateMovement = (element, direction, avatarId = 1) => {
    switch (direction) {
        case 'down':
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/move-down.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/face-down.png")';
            }, 120);
            break;
        case 'left':
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/move-left.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/face-left.png")';
            }, 120);
            break;
        case 'up':
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/move-up.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/face-up.png")';
            }, 120);
            break;
        case 'right':
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/move-right.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/' + avatarId +'/face-right.png")';
            }, 120);
            break;
    }

    return element;
}