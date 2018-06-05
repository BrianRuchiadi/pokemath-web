// create trees for stage 2
export const trees = (
    treeOneElement,
    treeTwoElement, 
    treeThreeElement,
    treeFourElement,
    treeFiveElement,
    treeSixElement,
    treeSevenElement,
    treeEightElement,
    treeNineElement,
    treeTenElement,
    obstacleX,
    obstacleY
) => {
    let treeImage = 'url("/assets/trees/tree-1.png")';
    let treeWidth = '50px';
    let treeHeight = '50px';

    let treeOneXRangeStart = 0
    let treeOneXRangeEnd = 0
    let treeOneYRangeStart = 0 
    let treeOneYRangeEnd = 0
    let treeTwoXRangeStart = 0
    let treeTwoXRangeEnd = 0
    let treeTwoYRangeStart = 0 
    let treeTwoYRangeEnd = 0
    let treeThreeXRangeStart = 0
    let treeThreeXRangeEnd = 0
    let treeThreeYRangeStart = 0 
    let treeThreeYRangeEnd = 0
    let treeFourXRangeStart = 0
    let treeFourXRangeEnd = 0
    let treeFourYRangeStart = 0 
    let treeFourYRangeEnd = 0
    let treeFiveXRangeStart = 0
    let treeFiveXRangeEnd = 0
    let treeFiveYRangeStart = 0 
    let treeFiveYRangeEnd = 0
    let treeSixXRangeStart = 0
    let treeSixXRangeEnd = 0
    let treeSixYRangeStart = 0 
    let treeSixYRangeEnd = 0
    let treeSevenXRangeStart = 0
    let treeSevenXRangeEnd = 0
    let treeSevenYRangeStart = 0 
    let treeSevenYRangeEnd = 0
    let treeEightXRangeStart = 0
    let treeEightXRangeEnd = 0
    let treeEightYRangeStart = 0 
    let treeEightYRangeEnd = 0
    let treeNineXRangeStart = 0
    let treeNineXRangeEnd = 0
    let treeNineYRangeStart = 0 
    let treeNineYRangeEnd = 0
    let treeTenXRangeStart = 0
    let treeTenXRangeEnd = 0
    let treeTenYRangeStart = 0 
    let treeTenYRangeEnd = 0
     
    // START set each tree X, Y 
    treeOneElement.style.left = '50px';    
    treeOneElement.style.top = '50px';

    treeTwoElement.style.left = '50px';    
    treeTwoElement.style.top = '100px';

    treeThreeElement.style.left = '50px';    
    treeThreeElement.style.top = '0px';

    treeFourElement.style.left = '250px';    
    treeFourElement.style.top = '50px';

    treeFiveElement.style.left = '150px';    
    treeFiveElement.style.top = '200px';

    treeSixElement.style.left = '250px';
    treeSixElement.style.top = '200px';

    treeSevenElement.style.left = '50px';    
    treeSevenElement.style.top = '300px';

    treeEightElement.style.left = '350px';    
    treeEightElement.style.top = '100px';

    treeNineElement.style.left = '350px';    
    treeNineElement.style.top = '0px';

    treeTenElement.style.left = '400px';    
    treeTenElement.style.top = '400px';
    // END set each tree X, Y
    
    treeOneElement.style.width = treeWidth;
    treeOneElement.style.height = treeHeight;
    treeOneElement.style.backgroundImage = treeImage;
    treeTwoElement.style.width = treeWidth;
    treeTwoElement.style.height = treeHeight;
    treeTwoElement.style.backgroundImage = treeImage;
    treeThreeElement.style.width = treeWidth;
    treeThreeElement.style.height = treeHeight;
    treeThreeElement.style.backgroundImage = treeImage;
    treeFourElement.style.width = treeWidth;
    treeFourElement.style.height = treeHeight;
    treeFourElement.style.backgroundImage = treeImage;
    treeFiveElement.style.width = treeWidth;
    treeFiveElement.style.height = treeHeight;
    treeFiveElement.style.backgroundImage = treeImage;
    treeSixElement.style.width = treeWidth;
    treeSixElement.style.height = treeHeight;
    treeSixElement.style.backgroundImage = treeImage;
    treeSevenElement.style.width = treeWidth;
    treeSevenElement.style.height = treeHeight;
    treeSevenElement.style.backgroundImage = treeImage;
    treeEightElement.style.width = treeWidth;
    treeEightElement.style.height = treeHeight;
    treeEightElement.style.backgroundImage = treeImage;
    treeNineElement.style.width = treeWidth;
    treeNineElement.style.height = treeHeight;
    treeNineElement.style.backgroundImage = treeImage;
    treeTenElement.style.width = treeWidth;
    treeTenElement.style.height = treeHeight;
    treeTenElement.style.backgroundImage = treeImage;

    treeOneXRangeStart = +treeOneElement.style.left.replace('px','') - 20;
    treeOneXRangeEnd = +treeOneElement.style.left.replace('px','') + 20;
    treeOneYRangeStart = +treeOneElement.style.top.replace('px','') - 20;
    treeOneYRangeEnd = +treeOneElement.style.top.replace('px','') + 20;
    treeTwoXRangeStart = +treeTwoElement.style.left.replace('px','') - 20;
    treeTwoXRangeEnd = +treeTwoElement.style.left.replace('px','') + 20;
    treeTwoYRangeStart = +treeTwoElement.style.top.replace('px','') - 20;
    treeTwoYRangeEnd = +treeTwoElement.style.top.replace('px','') + 20;
    treeThreeXRangeStart = +treeThreeElement.style.left.replace('px','') - 20;
    treeThreeXRangeEnd = +treeThreeElement.style.left.replace('px','') + 20;
    treeThreeYRangeStart = +treeThreeElement.style.top.replace('px','') - 20;
    treeThreeYRangeEnd = +treeThreeElement.style.top.replace('px','') + 20;
    treeFourXRangeStart = +treeFourElement.style.left.replace('px','') - 20;
    treeFourXRangeEnd = +treeFourElement.style.left.replace('px','') + 20;
    treeFourYRangeStart = +treeFourElement.style.top.replace('px','') - 20;
    treeFourYRangeEnd = +treeFourElement.style.top.replace('px','') + 20;
    treeFiveXRangeStart = +treeFiveElement.style.left.replace('px','') - 20;
    treeFiveXRangeEnd = +treeFiveElement.style.left.replace('px','') + 20;
    treeFiveYRangeStart = +treeFiveElement.style.top.replace('px','') - 20;
    treeFiveYRangeEnd = +treeFiveElement.style.top.replace('px','') + 20;
    treeSixXRangeStart = +treeSixElement.style.left.replace('px','') - 20;
    treeSixXRangeEnd = +treeSixElement.style.left.replace('px','') + 20;
    treeSixYRangeStart = +treeSixElement.style.top.replace('px','') - 20;
    treeSixYRangeEnd = +treeSixElement.style.top.replace('px','') + 20;
    treeSevenXRangeStart = +treeSevenElement.style.left.replace('px','') - 20;
    treeSevenXRangeEnd = +treeSevenElement.style.left.replace('px','') + 20;
    treeSevenYRangeStart = +treeSevenElement.style.top.replace('px','') - 20;
    treeSevenYRangeEnd = +treeSevenElement.style.top.replace('px','') + 20;
    treeEightXRangeStart = +treeEightElement.style.left.replace('px','') - 20;
    treeEightXRangeEnd = +treeEightElement.style.left.replace('px','') + 20;
    treeEightYRangeStart = +treeEightElement.style.top.replace('px','') - 20;
    treeEightYRangeEnd = +treeEightElement.style.top.replace('px','') + 20;
    treeNineXRangeStart = +treeNineElement.style.left.replace('px','') - 20;
    treeNineXRangeEnd = +treeNineElement.style.left.replace('px','') + 20;
    treeNineYRangeStart = +treeNineElement.style.top.replace('px','') - 20;
    treeNineYRangeEnd = +treeNineElement.style.top.replace('px','') + 20;
    treeTenXRangeStart = +treeTenElement.style.left.replace('px','') - 20;
    treeTenXRangeEnd = +treeTenElement.style.left.replace('px','') + 20;
    treeTenYRangeStart = +treeTenElement.style.top.replace('px','') - 20;
    treeTenYRangeEnd = +treeTenElement.style.top.replace('px','') + 20;

    for (let x = treeOneXRangeStart; x <= treeOneXRangeEnd; x += 10) {
        for (let y = treeOneYRangeStart; y <= treeOneYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeTwoXRangeStart; x <= treeTwoXRangeEnd; x += 10) {
        for (let y = treeTwoYRangeStart; y <= treeTwoYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeThreeXRangeStart; x <= treeThreeXRangeEnd; x += 10) {
        for (let y = treeThreeYRangeStart; y <= treeThreeYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeFourXRangeStart; x <= treeFourXRangeEnd; x += 10) {
        for (let y = treeFourYRangeStart; y <= treeFourYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeFiveXRangeStart; x <= treeFiveXRangeEnd; x += 10) {
        for (let y = treeFiveYRangeStart; y <= treeFiveYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeSixXRangeStart; x <= treeSixXRangeEnd; x += 10) {
        for (let y = treeSixYRangeStart; y <= treeSixYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeSevenXRangeStart; x <= treeSevenXRangeEnd; x += 10) {
        for (let y = treeSevenYRangeStart; y <= treeSevenYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeEightXRangeStart; x <= treeEightXRangeEnd; x += 10) {
        for (let y = treeEightYRangeStart; y <= treeEightYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeNineXRangeStart; x <= treeNineXRangeEnd; x += 10) {
        for (let y = treeNineYRangeStart; y <= treeNineYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }

    for (let x = treeTenXRangeStart; x <= treeTenXRangeEnd; x += 10) {
        for (let y = treeTenYRangeStart; y <= treeTenYRangeEnd; y += 10) {
            obstacleX.push(x);
            obstacleY.push(y);
        }
    }
    return {
        "treeOneElement": treeOneElement,
        "treeTwoElement": treeTwoElement,
        "treeThreeElement": treeThreeElement,
        "treeFourElement": treeFourElement,
        "treeFiveElement": treeFiveElement,
        "treeSixElement": treeSixElement,
        "treeSevenElement": treeSevenElement,
        "treeEightElement": treeEightElement,
        "treeNineElement": treeNineElement,
        "treeTenElement": treeTenElement,
        "obstacleX": obstacleX,
        "obstacleY": obstacleY
    };
}