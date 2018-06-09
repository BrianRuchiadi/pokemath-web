// create trees for stage 5
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
    // treeElevenElement,
    // treeTwelveElement,
    // treeThirteenElement,
    // treeFourteenElement,
    // treeFifteenElement,
    // treeSixteenElement,
    // treeSeventeenElement,
    // treeEighteenElement,
    // treeNineteenElement,
    // treeTwentyElement,
    // treeTwentyOneElement,
    // treeTwentyTwoElement,
    // treeTwentyThreeElement,
    // treeTwentyFourElement,
    // treeTwentyFiveElement,
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

    // let treeElevenXRangeStart = 0
    // let treeElevenXRangeEnd = 0
    // let treeElevenYRangeStart = 0
    // let treeElevenYRangeEnd = 0

    // let treeTwelveXRangeStart = 0
    // let treeTwelveXRangeEnd = 0
    // let treeTwelveYRangeStart = 0
    // let treeTwelveYRangeEnd = 0

    // let treeThirteenXRangeStart = 0
    // let treeThirteenXRangeEnd = 0
    // let treeThirteenYRangeStart = 0
    // let treeThirteenYRangeEnd = 0

    // let treeFourteenXRangeStart = 0
    // let treeFourteenXRangeEnd = 0
    // let treeFourteenYRangeStart = 0
    // let treeFourteenYRangeEnd = 0

    // let treeFifteenXRangeStart = 0
    // let treeFifteenXRangeEnd = 0
    // let treeFifteenYRangeStart = 0
    // let treeFifteenYRangeEnd = 0

    // let treeSixteenXRangeStart = 0
    // let treeSixteenXRangeEnd = 0
    // let treeSixteenYRangeStart = 0
    // let treeSixteenYRangeEnd = 0

    // let treeSeventeenXRangeStart = 0
    // let treeSeventeenXRangeEnd = 0
    // let treeSeventeenYRangeStart = 0
    // let treeSeventeenYRangeEnd = 0

    // let treeEighteenXRangeStart = 0
    // let treeEighteenXRangeEnd = 0
    // let treeEighteenYRangeStart = 0
    // let treeEighteenYRangeEnd = 0

    // let treeNineteenXRangeStart = 0
    // let treeNineteenXRangeEnd = 0
    // let treeNineteenYRangeStart = 0
    // let treeNineteenYRangeEnd = 0

    // let treeTwentyXRangeStart = 0
    // let treeTwentyXRangeEnd = 0
    // let treeTwentyYRangeStart = 0
    // let treeTwentyYRangeEnd = 0

    // let treeTwentyOneXRangeStart = 0
    // let treeTwentyOneXRangeEnd = 0
    // let treeTwentyOneYRangeStart = 0
    // let treeTwentyOneYRangeEnd = 0

    // let treeTwentyTwoXRangeStart = 0
    // let treeTwentyTwoXRangeEnd = 0
    // let treeTwentyTwoYRangeStart = 0
    // let treeTwentyTwoYRangeEnd = 0

    // let treeTwentyThreeXRangeStart = 0
    // let treeTwentyThreeXRangeEnd = 0
    // let treeTwentyThreeYRangeStart = 0
    // let treeTwentyThreeYRangeEnd = 0

    // let treeTwentyFourXRangeStart = 0
    // let treeTwentyFourXRangeEnd = 0
    // let treeTwentyFourYRangeStart = 0
    // let treeTwentyFourYRangeEnd = 0

    // let treeTwentyFiveXRangeStart = 0
    // let treeTwentyFiveXRangeEnd = 0
    // let treeTwentyFiveYRangeStart = 0
    // let treeTwentyFiveYRangeEnd = 0

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

    // treeElevenElement.style.width = treeWidth;
    // treeElevenElement.style.height = treeHeight;
    // treeElevenElement.style.backgroundImage = treeImage;

    // treeTwelveElement.style.width = treeWidth;
    // treeTwelveElement.style.height = treeHeight;
    // treeTwelveElement.style.backgroundImage = treeImage;

    // treeThirteenElement.style.width = treeWidth;
    // treeThirteenElement.style.height = treeHeight;
    // treeThirteenElement.style.backgroundImage = treeImage;

    // treeFourteenElement.style.width = treeWidth;
    // treeFourteenElement.style.height = treeHeight;
    // treeFourteenElement.style.backgroundImage = treeImage;

    // treeFifteenElement.style.width = treeWidth;
    // treeFifteenElement.style.height = treeHeight;
    // treeFifteenElement.style.backgroundImage = treeImage;

    // treeSixteenElement.style.width = treeWidth;
    // treeSixteenElement.style.height = treeHeight;
    // treeSixteenElement.style.backgroundImage = treeImage;

    // treeSeventeenElement.style.width = treeWidth;
    // treeSeventeenElement.style.height = treeHeight;
    // treeSeventeenElement.style.backgroundImage = treeImage;

    // treeEighteenElement.style.width = treeWidth;
    // treeEighteenElement.style.height = treeHeight;
    // treeEighteenElement.style.backgroundImage = treeImage;

    // treeNineteenElement.style.width = treeWidth;
    // treeNineteenElement.style.height = treeHeight;
    // treeNineteenElement.style.backgroundImage = treeImage;

    // treeTwentyElement.style.width = treeWidth;
    // treeTwentyElement.style.height = treeHeight;
    // treeTwentyElement.style.backgroundImage = treeImage;

    // treeTwentyOneElement.style.width = treeWidth;
    // treeTwentyOneElement.style.height = treeHeight;
    // treeTwentyOneElement.style.backgroundImage = treeImage;

    // treeTwentyTwoElement.style.width = treeWidth;
    // treeTwentyTwoElement.style.height = treeHeight;
    // treeTwentyTwoElement.style.backgroundImage = treeImage;

    // treeTwentyThreeElement.style.width = treeWidth;
    // treeTwentyThreeElement.style.height = treeHeight;
    // treeTwentyThreeElement.style.backgroundImage = treeImage;

    // treeTwentyFourElement.style.width = treeWidth;
    // treeTwentyFourElement.style.height = treeHeight;
    // treeTwentyFourElement.style.backgroundImage = treeImage;

    // treeTwentyFiveElement.style.width = treeWidth;
    // treeTwentyFiveElement.style.height = treeHeight;
    // treeTwentyFiveElement.style.backgroundImage = treeImage;

    treeOneXRangeStart = +treeOneElement.style.left.replace('px', '') - 20;
    treeOneXRangeEnd = +treeOneElement.style.left.replace('px', '') + 20;
    treeOneYRangeStart = +treeOneElement.style.top.replace('px', '') - 20;
    treeOneYRangeEnd = +treeOneElement.style.top.replace('px', '') + 20;
    treeTwoXRangeStart = +treeTwoElement.style.left.replace('px', '') - 20;
    treeTwoXRangeEnd = +treeTwoElement.style.left.replace('px', '') + 20;
    treeTwoYRangeStart = +treeTwoElement.style.top.replace('px', '') - 20;
    treeTwoYRangeEnd = +treeTwoElement.style.top.replace('px', '') + 20;
    treeThreeXRangeStart = +treeThreeElement.style.left.replace('px', '') - 20;
    treeThreeXRangeEnd = +treeThreeElement.style.left.replace('px', '') + 20;
    treeThreeYRangeStart = +treeThreeElement.style.top.replace('px', '') - 20;
    treeThreeYRangeEnd = +treeThreeElement.style.top.replace('px', '') + 20;
    treeFourXRangeStart = +treeFourElement.style.left.replace('px', '') - 20;
    treeFourXRangeEnd = +treeFourElement.style.left.replace('px', '') + 20;
    treeFourYRangeStart = +treeFourElement.style.top.replace('px', '') - 20;
    treeFourYRangeEnd = +treeFourElement.style.top.replace('px', '') + 20;
    treeFiveXRangeStart = +treeFiveElement.style.left.replace('px', '') - 20;
    treeFiveXRangeEnd = +treeFiveElement.style.left.replace('px', '') + 20;
    treeFiveYRangeStart = +treeFiveElement.style.top.replace('px', '') - 20;
    treeFiveYRangeEnd = +treeFiveElement.style.top.replace('px', '') + 20;
    treeSixXRangeStart = +treeSixElement.style.left.replace('px', '') - 20;
    treeSixXRangeEnd = +treeSixElement.style.left.replace('px', '') + 20;
    treeSixYRangeStart = +treeSixElement.style.top.replace('px', '') - 20;
    treeSixYRangeEnd = +treeSixElement.style.top.replace('px', '') + 20;
    treeSevenXRangeStart = +treeSevenElement.style.left.replace('px', '') - 20;
    treeSevenXRangeEnd = +treeSevenElement.style.left.replace('px', '') + 20;
    treeSevenYRangeStart = +treeSevenElement.style.top.replace('px', '') - 20;
    treeSevenYRangeEnd = +treeSevenElement.style.top.replace('px', '') + 20;
    treeEightXRangeStart = +treeEightElement.style.left.replace('px', '') - 20;
    treeEightXRangeEnd = +treeEightElement.style.left.replace('px', '') + 20;
    treeEightYRangeStart = +treeEightElement.style.top.replace('px', '') - 20;
    treeEightYRangeEnd = +treeEightElement.style.top.replace('px', '') + 20;
    treeNineXRangeStart = +treeNineElement.style.left.replace('px', '') - 20;
    treeNineXRangeEnd = +treeNineElement.style.left.replace('px', '') + 20;
    treeNineYRangeStart = +treeNineElement.style.top.replace('px', '') - 20;
    treeNineYRangeEnd = +treeNineElement.style.top.replace('px', '') + 20;
    treeTenXRangeStart = +treeTenElement.style.left.replace('px', '') - 20;
    treeTenXRangeEnd = +treeTenElement.style.left.replace('px', '') + 20;
    treeTenYRangeStart = +treeTenElement.style.top.replace('px', '') - 20;
    treeTenYRangeEnd = +treeTenElement.style.top.replace('px', '') + 20;

    // treeElevenXRangeStart = +treeElevenElement.style.left.replace('px', '') - 20;
    // treeElevenXRangeEnd = +treeElevenElement.style.left.replace('px', '') + 20;
    // treeElevenYRangeStart = +treeElevenElement.style.top.replace('px', '') - 20;
    // treeElevenYRangeEnd = +treeElevenElement.style.top.replace('px', '') + 20;

    // treeTwelveXRangeStart = +treeTwelveElement.style.left.replace('px', '') - 20;
    // treeTwelveXRangeEnd = +treeTwelveElement.style.left.replace('px', '') + 20;
    // treeTwelveYRangeStart = +treeTwelveElement.style.top.replace('px', '') - 20;
    // treeTwelveYRangeEnd = +treeTwelveElement.style.top.replace('px', '') + 20;

    // treeThirteenXRangeStart = +treeThirteenElement.style.left.replace('px', '') - 20;
    // treeThirteenXRangeEnd = +treeThirteenElement.style.left.replace('px', '') + 20;
    // treeThirteenYRangeStart = +treeThirteenElement.style.top.replace('px', '') - 20;
    // treeThirteenYRangeEnd = +treeThirteenElement.style.top.replace('px', '') + 20;

    // treeFourteenXRangeStart = +treeFourteenElement.style.left.replace('px', '') - 20;
    // treeFourteenXRangeEnd = +treeFourElement.style.left.replace('px', '') + 20;
    // treeFourteenYRangeStart = +treeFourteenElement.style.top.replace('px', '') - 20;
    // treeFourteenYRangeEnd = +treeFourteenElement.style.top.replace('px', '') + 20;

    // treeFifteenXRangeStart = +treeFifteenElement.style.left.replace('px', '') - 20;
    // treeFifteenXRangeEnd = +treeFifteenElement.style.left.replace('px', '') + 20;
    // treeFifteenYRangeStart = +treeFifteenElement.style.top.replace('px', '') - 20;
    // treeFifteenYRangeEnd = +treeFifteenElement.style.top.replace('px', '') + 20;

    // treeSixteenXRangeStart = +treeSixteenElement.style.left.replace('px', '') - 20;
    // treeSixteenXRangeEnd = +treeSixteenElement.style.left.replace('px', '') + 20;
    // treeSixteenYRangeStart = +treeSixteenElement.style.top.replace('px', '') - 20;
    // treeSixteenYRangeEnd = +treeSixteenElement.style.top.replace('px', '') + 20;

    // treeSeventeenXRangeStart = +treeSeventeenElement.style.left.replace('px', '') - 20;
    // treeSeventeenXRangeEnd = +treeSeventeenElement.style.left.replace('px', '') + 20;
    // treeSeventeenYRangeStart = +treeSeventeenElement.style.top.replace('px', '') - 20;
    // treeSeventeenYRangeEnd = +treeSeventeenElement.style.top.replace('px', '') + 20;

    // treeEighteenXRangeStart = +treeEighteenElement.style.left.replace('px', '') - 20;
    // treeEighteenXRangeEnd = +treeEighteenElement.style.left.replace('px', '') + 20;
    // treeEighteenYRangeStart = +treeEighteenElement.style.top.replace('px', '') - 20;
    // treeEighteenYRangeEnd = +treeEighteenElement.style.top.replace('px', '') + 20;

    // treeNineteenXRangeStart = +treeNineteenElement.style.left.replace('px', '') - 20;
    // treeNineteenXRangeEnd = +treeNineteenElement.style.left.replace('px', '') + 20;
    // treeNineteenYRangeStart = +treeNineteenElement.style.top.replace('px', '') - 20;
    // treeNineteenYRangeEnd = +treeNineteenElement.style.top.replace('px', '') + 20;

    // treeTwentyXRangeStart = +treeTwentyElement.style.left.replace('px', '') - 20;
    // treeTwentyXRangeEnd = +treeTwentyElement.style.left.replace('px', '') + 20;
    // treeTwentyYRangeStart = +treeTwentyElement.style.top.replace('px', '') - 20;
    // treeTwentyYRangeEnd = +treeTwentyElement.style.top.replace('px', '') + 20;

    // treeTwentyOneXRangeStart = +treeTwentyOneElement.style.left.replace('px', '') - 20;
    // treeTwentyOneXRangeEnd = +treeTwentyOneElement.style.left.replace('px', '') + 20;
    // treeTwentyOneYRangeStart = +treeTwentyOneElement.style.top.replace('px', '') - 20;
    // treeTwentyOneYRangeEnd = +treeTwentyOneElement.style.top.replace('px', '') + 20;

    // treeTwentyTwoXRangeStart = +treeTwentyTwoElement.style.left.replace('px', '') - 20;
    // treeTwentyTwoXRangeEnd = +treeTwentyTwoElement.style.left.replace('px', '') + 20;
    // treeTwentyTwoYRangeStart = +treeTwentyTwoElement.style.top.replace('px', '') - 20;
    // treeTwentyTwoYRangeEnd = +treeTwentyTwoElement.style.top.replace('px', '') + 20;

    // treeTwentyThreeXRangeStart = +treeTwentyThreeElement.style.left.replace('px', '') - 20;
    // treeTwentyThreeXRangeEnd = +treeTwentyThreeElement.style.left.replace('px', '') + 20;
    // treeTwentyThreeYRangeStart = +treeTwentyThreeElement.style.top.replace('px', '') - 20;
    // treeTwentyThreeYRangeEnd = +treeTwentyThreeElement.style.top.replace('px', '') + 20;

    // treeTwentyFourXRangeStart = +treeTwentyFourElement.style.left.replace('px', '') - 20;
    // treeTwentyFourXRangeEnd = +treeTwentyFourElement.style.left.replace('px', '') + 20;
    // treeTwentyFourYRangeStart = +treeTwentyFourElement.style.top.replace('px', '') - 20;
    // treeTwentyFourYRangeEnd = +treeTwentyFourElement.style.top.replace('px', '') + 20;

    // treeTwentyFiveXRangeStart = +treeTwentyFiveElement.style.left.replace('px', '') - 20;
    // treeTwentyFiveXRangeEnd = +treeTwentyFiveElement.style.left.replace('px', '') + 20;
    // treeTwentyFiveYRangeStart = +treeTwentyFiveElement.style.top.replace('px', '') - 20;
    // treeTwentyFiveYRangeEnd = +treeTwentyFiveElement.style.top.replace('px', '') + 20;

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

    // for (let x = treeElevenXRangeStart; x <= treeElevenXRangeEnd; x += 10) {
    //     for (let y = treeElevenYRangeStart; y <= treeElevenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwelveXRangeStart; x <= treeTwelveXRangeEnd; x += 10) {
    //     for (let y = treeTwelveYRangeStart; y <= treeTwelveYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeThirteenXRangeStart; x <= treeThirteenXRangeEnd; x += 10) {
    //     for (let y = treeThirteenYRangeStart; y <= treeThirteenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeFourteenXRangeStart; x <= treeFourteenXRangeEnd; x += 10) {
    //     for (let y = treeFourteenYRangeStart; y <= treeFourteenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeFifteenXRangeStart; x <= treeFifteenXRangeEnd; x += 10) {
    //     for (let y = treeFifteenYRangeStart; y <= treeFifteenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeSixteenXRangeStart; x <= treeSixteenXRangeEnd; x += 10) {
    //     for (let y = treeSixteenYRangeStart; y <= treeSixteenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeSeventeenXRangeStart; x <= treeSeventeenXRangeEnd; x += 10) {
    //     for (let y = treeSeventeenYRangeStart; y <= treeSeventeenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeEighteenXRangeStart; x <= treeEighteenXRangeEnd; x += 10) {
    //     for (let y = treeEighteenYRangeStart; y <= treeEighteenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeNineteenXRangeStart; x <= treeNineteenXRangeEnd; x += 10) {
    //     for (let y = treeNineteenYRangeStart; y <= treeNineteenYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwentyXRangeStart; x <= treeTwentyXRangeEnd; x += 10) {
    //     for (let y = treeTwentyYRangeStart; y <= treeTwentyYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwentyOneXRangeStart; x <= treeTwentyOneXRangeEnd; x += 10) {
    //     for (let y = treeTwentyOneYRangeStart; y <= treeTwentyOneYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwentyTwoXRangeStart; x <= treeTwentyTwoXRangeEnd; x += 10) {
    //     for (let y = treeTwentyTwoYRangeStart; y <= treeTwentyTwoYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwentyThreeXRangeStart; x <= treeTwentyThreeXRangeEnd; x += 10) {
    //     for (let y = treeTwentyThreeYRangeStart; y <= treeTwentyThreeYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwentyFourXRangeStart; x <= treeTwentyFourXRangeEnd; x += 10) {
    //     for (let y = treeTwentyFourYRangeStart; y <= treeTwentyFourYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }

    // for (let x = treeTwentyFiveXRangeStart; x <= treeTwentyFiveXRangeEnd; x += 10) {
    //     for (let y = treeTwentyFiveYRangeStart; y <= treeTwentyFiveYRangeEnd; y += 10) {
    //         obstacleX.push(x);
    //         obstacleY.push(y);
    //     }
    // }
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
        // "treeElevenElement": treeElevenElement,
        // "treeTwelveElement": treeTwelveElement,
        // "treeThirteenElement": treeThirteenElement,
        // "treeFourteenElement": treeFourteenElement,
        // "treeFifteenElement": treeFifteenElement,
        // "treeSixteenElement": treeSixteenElement,
        // "treeSeventeenElement": treeSeventeenElement,
        // "treeEighteenElement": treeEighteenElement,
        // "treeNineteenElement": treeNineteenElement,
        // "treeTwentyElement": treeTwentyElement,
        // "treeTwentyOneElement": treeTwentyOneElement,
        // "treeTwentyTwoElement": treeTwentyTwoElement,
        // "treeTwentyThreeElement": treeTwentyThreeElement,
        // "treeTwentyFourElement": treeTwentyFourElement,
        // "treeTwentyFiveElement": treeTwentyFiveElement,
        "obstacleX": obstacleX,
        "obstacleY": obstacleY
    };
}