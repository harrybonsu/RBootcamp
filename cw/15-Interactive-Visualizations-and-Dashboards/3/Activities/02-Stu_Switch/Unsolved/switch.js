// Switch function
function printInfo (infoName) {
    switch (infoName) {
        case "Harry":
            console.log("Harry is great!!");
            break;
        case "Mark":
            console.log("Mark is great!!");
            break;
        case "Peter":
            console.log("Peter is great!!");
            break;
        case "John":
            console.log("John is great!!");
            break;
        default:
            console.log('no match found');
    }
}

printInfo('Peter')