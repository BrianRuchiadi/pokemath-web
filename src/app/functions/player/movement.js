export const animateMovement = (element, direction) => {
    switch (direction) {
        case 'down':
            element.style.backgroundImage = 'url("./assets/avatars/1/move-down.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/1/face-down.png")';
            }, 100);
            break;
        case 'left':
            element.style.backgroundImage = 'url("./assets/avatars/1/move-left.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/1/face-left.png")';
            }, 100);
            break;
        case 'up':
            element.style.backgroundImage = 'url("./assets/avatars/1/move-up.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/1/face-up.png")';
            }, 100);
            break;
        case 'right':
            element.style.backgroundImage = 'url("./assets/avatars/1/move-right.png")';
            setTimeout(() => {
            element.style.backgroundImage = 'url("./assets/avatars/1/face-right.png")';
            }, 100);
            break;
    }

    return element;
}