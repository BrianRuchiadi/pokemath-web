export const generateQuestion = (type) => {
    let numOne, numTwo;

    switch (type) {
        case 'multiplication': 
            // does not need verification, since there is no possibility for
            // floating number
            numOne = Math.floor((Math.random() * 9) + 1);
            numTwo = Math.floor((Math.random() * 9) + 1);
            break;
        case 'division': 
            numOne = Math.floor((Math.random() * 100) + 1);
            numTwo = Math.floor((Math.random() * 10) + 1);
            while (numOne < numTwo || numOne % numTwo !== 0) {
                numOne = Math.floor((Math.random() * 100) + 1);
            }
            break;
        case 'addition': 
            // does not need verification, since there is no possibility for
            // floating number
            numOne = Math.floor((Math.random() * 20) + 1);
            numTwo = Math.floor((Math.random() * 20) + 1);
            break;
        case 'subtraction': 
            numOne = Math.floor((Math.random() * 50)) + 1;
            numTwo = Math.floor((Math.random() * 20)) + 1;

            while (numOne < numTwo) {
                numOne = Math.floor((Math.random() * 50)) + 1;
            }
            break;
    }

    return {
        "numOne": numOne,
        "numTwo": numTwo
    }
}