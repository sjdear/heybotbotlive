
function getBotResponse(input) {
    //prompt 1
    if (input == "") {
        return "The user was too stunned to speak";
    } else {
        return "okay, " + input + ". A little derivative, I’ve heard that one before.";
    }
}


function getBotResponseOne(input) {
    //prompt 1
    if (input == "yes") {
        setTimeout(() => {
            imageAppearOne();
        }, 1000)
        return "Oh thank god!";
    } else if (input == "yeah") {
        setTimeout(() => {
            imageAppearOne();
        }, 1000)
        return "Oh thank god!";
    } else if (input == "sure") {
        setTimeout(() => {
            imageAppearOne();
        }, 1000)
        return "Oh thank god!";
    } else {
        setTimeout(() => {
            imageAppearTwo();
        }, 1000)
        return "give me more script cam";
    }
}
