const nar = () => {
    
    //Wanna chat
    const stageZero = () => {
      const playBtn = document.querySelector(".intro button");
      const zeroScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        zeroScreen.classList.toggle("fadeOut", true); //intro screen fades out
        match.classList.toggle("fadeOut", false);
        firstBotMessage();
      });
    };
    
    stageZero();

  };


//start the game function 
nar();

//stops funtions from running again
function noop() {};

//getting time
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = "<" + hours + ":" + minutes + "> ";
    return time;
}

//makes chatbox appear/disappear
function chatAppearOne() {
    const chatBox = document.querySelector(".chat-bar-input-block");
    chatBox.classList.toggle("fadeIn", true);
    chatBox.classList.toggle("fadeOut", false);

}

function chatDisappearOne() {
    const chatBox = document.querySelector(".chat-bar-input-block");
    chatBox.classList.toggle("fadeIn", false);
    chatBox.classList.toggle("fadeOut", true);
}

//makes button appear/disappear
function buttonAppearOne() {
    const chatBox = document.querySelector(".buttonChat");
    chatBox.classList.toggle("fadeInButton", true);
    chatBox.classList.toggle("fadeOutButton", false);

}

function buttonDisappearOne() {
    const chatBox = document.querySelector(".buttonChat");
    chatBox.classList.toggle("fadeInButton", false);
    chatBox.classList.toggle("fadeOutButton", true);
}

//makes 2 option button appear/disappear
function buttonAppearTwo() {
    const chatBox = document.querySelector(".buttonChatTwo");
    chatBox.classList.toggle("fadeInButtonTwo", true);
    chatBox.classList.toggle("fadeOutButtonTwo", false);

}

function buttonDisappearTwo() {
    const chatBox = document.querySelector(".buttonChatTwo");
    chatBox.classList.toggle("fadeInButtonTwo", false);
    chatBox.classList.toggle("fadeOutButtonTwo", true);
}

//makes 3 option button appear/disappear
function buttonAppearThree() {
    const chatBox = document.querySelector(".buttonChatThree");
    chatBox.classList.toggle("fadeInButtonThree", true);
    chatBox.classList.toggle("fadeOutButtonThree", false);

}

function buttonDisappearThree() {
    const chatBox = document.querySelector(".buttonChatThree");
    chatBox.classList.toggle("fadeInButtonThree", false);
    chatBox.classList.toggle("fadeOutButtonThree", true);
}



//intro section

//message 1
function firstBotMessage() {
    var div = document.getElementById('botStarterMessage');
    let botText = "botbot: hi"
    let time = getTime();
    var typewriter = new Typewriter(div, {
        delay: 50
    });
    typewriter.typeString(time + botText)
    .start();

    document.getElementById("userInput").scrollIntoView(false);
    document.getElementById("helloButton").innerHTML = "hello";
    
    

    setTimeout(() => {
        buttonAppearOne();
    }, 1000)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = helloButton;
    

    function helloButton (){
        buttonDisappearOne();
            let userText = 'you: hello'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                secondBotMessage(); //should be secondBotMessage
                helloButton = noop;
            }, 1000)
            

}




function secondBotMessage() {
    let botText = 'botbot: hi'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "you already said that";
    document.getElementById("twoTwoButton").innerHTML = "hi...?";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1000)

    const buttonOne = document.querySelector(".twoOneButton");
    const buttonTwo = document.querySelector(".twoTwoButton");
    buttonOne.onclick = youAlready;
    buttonTwo.onclick = hi;


    function hi (){
        buttonDisappearTwo();
        let userText = 'you: hi...?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            hi = noop;
            thirdBotMessage();
        }, 1000)
    }   

    function youAlready (){
        buttonDisappearTwo();
        let userText = 'you: you already said that'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            youAlready = noop;
            thirdBotMessage();
        }, 1000)
    }   
}

function thirdBotMessage() {
    let botText = 'botbot: oh, I repeated myself. sorry, I have a stutter!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fourthBotMessage();
    }, 2000)
}

function fourthBotMessage() {
    let botText = 'botbot: actually, I don’t. I’m just a pathological liar.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "what does this have to do with future telling?";

    setTimeout(() => {
        buttonAppearOne();
    }, 2000)

    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = whatButton;
    

    function whatButton (){
        buttonDisappearOne();
            let userText = 'you: what does this have to do with future telling?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                whatButton = noop;
                fifthBotMessage();
            }, 1000)

    }
}

function fifthBotMessage() {
    let botText = 'botbot: future telling? oh, did you come here for madame bot bot, psychic and future teller?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        sixthBotMessage();
    }, 2300)
}

function sixthBotMessage() {
    let botText = 'botbot: yeah, sorry, wrong bot bot. madame stopped paying her domain fee and so her site sometimes shows up on my domain, because of the same name and all that. very annoying. like getting the mail of old tenants in your apartment.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "um... okay. bye";
    document.getElementById("twoTwoButton").innerHTML = "guess it was too good to be true";

    setTimeout(() => {
        buttonAppearTwo();
    }, 3000)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = um;
    internButtonNo.onclick = guess;


    function um (){
        buttonDisappearTwo();
        let userText = 'you: um... okay. bye'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            um = noop;
            seventhBotMessage();
        }, 1000)
    }   

    function guess (){
        buttonDisappearTwo();
        let userText = 'you: guess it was too good to be true'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            guess = noop;
            seventhBotMessage();
        }, 1000)
    }   
}

function seventhBotMessage() {
    let botText = 'botbot: you’re leaving already? You just got here!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        eighthBotMessage();
    }, 2000)
}


function eighthBotMessage() {
    let botText = 'botbot: I’m not too good at telling futures, but I could tell you what you were in a past life. how about that?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "Now it just seems like you’re grasping for straws";
    document.getElementById("twoTwoButton").innerHTML = "How?";

    setTimeout(() => {
        buttonAppearTwo();
    }, 2000)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = now;
    internButtonNo.onclick = how;


    function now (){
        buttonDisappearTwo();
        let userText = 'you: Now it just seems like you’re grasping for straws'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            now = noop;
            ninthBotMessage();
        }, 1000)
    }   

    function how (){
        buttonDisappearTwo();
        let userText = 'you: How?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            how = noop;
            ninthBotMessage();
        }, 1000)
    }   
}

function ninthBotMessage() {
    let botText = 'botbot: it’s not that hard, I used to watch the other bot bot do it sometimes. I can’t imagine how I could be wrong...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        tenthBotMessage();
    }, 1800)
}

function tenthBotMessage() {
    let botText= 'botbot: how about this.... I can make a guess and if I’m wrong, you can leave. Pronto. Not like you have anything better to do, right?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 2000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
            chatDisappearOne();
        }
    });

}

function getResponse() {
    getResponse = noop;
    let userText = $("#textInput").val();
    let time = getTime();
    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        eleventhBotMessage();
    }, 1000) 

}

function eleventhBotMessage() {
    let botText = 'botbot: okay, that’s a little... embarrassing to tell a bot that you just met. But let’s start.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twelthBotMessage();
    }, 1500)
}

function twelthBotMessage() {
    let botText = 'botbot: okay, let’s start with the basics. What’s your name?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getName();
            chatDisappearOne();
        }
    });

}

//name section
//gets botbot's response from our list and displays it
function getNameResponse(userText) {
    let botResponse = getBotResponse(userText);
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + 'botbot: ' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

     setTimeout(() => {
     thirteenthBotMessage();
     }, 1000)

}



//gets name from the user, diplays it, and processes it, sends to getHardResponse()
function getName() {
    getName = noop;
    let userText = $("#textInput").val();
    let time = getTime();
    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getNameResponse(userText);
    }, 2000) //botbot needs 2 seconds to think of a response

}

function thirteenthBotMessage() {
    let botText = 'botbot: what’s your social security number?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fourteenthBotMessage();
    }, 1000)
}

function fourteenthBotMessage() {
    let botText = 'botbot: KIDDING! I wouldn’t ask you that. It’s already on the internet anyway.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fifteenthBotMessage();
    }, 2000)
}


function fifteenthBotMessage() {
    let botText = 'botbot: have you ever had a possession where you mentioned what you were, in a past life..time?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "No.";
    document.getElementById("twoTwoButton").innerHTML = "Even if I did, telling you kind of feels like cheating?";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1500)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = no;
    internButtonNo.onclick = even;


    function no (){
        buttonDisappearTwo();
        let userText = 'you: No.'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            no = noop;
            sixteenthBotMessage();
        }, 1000)
    }   

    function even (){
        buttonDisappearTwo();
        let userText = 'you: Even if I did, telling you kind of feels like cheating?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            even = noop;
            sixteenthBotMessage();
        }, 1000)
    }   
}

function sixteenthBotMessage() {
    let botText = 'botbot: let’s move on. Time for some past life recall - I’m about to show you some images, videos, etc, and we will see how you react them.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        seventeenthBotMessage();
    }, 2500)
}



function seventeenthBotMessage() {
    let botText = 'botbot: how do you feel about this?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("threeOneButton").innerHTML = "Fine?";
    document.getElementById("threeTwoButton").innerHTML = "I hate it";
    document.getElementById("threeThreeButton").innerHTML = "Who cares";

    setTimeout(() => {
        imageAppearOne();
    }, 2000)
}

function imageAppearOne() {
    const image = document.querySelector(".liberty");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", true);
    image.classList.toggle("fadeOutImage", false);
    match.classList.toggle("fadeOut", true);
    match.classList.toggle("fadeIn", false);

    setTimeout(() => {
        imageDisappearOne();
    }, 3000)
}
    
function imageDisappearOne() {
    const image = document.querySelector(".liberty");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", false);
    image.classList.toggle("fadeOutImage", true);
    match.classList.toggle("fadeOut", false);
    match.classList.toggle("fadeIn", true);

    setTimeout(() => {
        buttonAppearThree();
    }, 1000)

    const internButtonYes = document.querySelector(".threeOneButton");
    const internButtonNo = document.querySelector(".threeTwoButton");
    const internButtonWho = document.querySelector(".threeThreeButton");
    internButtonYes.onclick = fine;
    internButtonNo.onclick = iHate;
    internButtonWho.onclick = whoCares;


    function fine (){
        buttonDisappearThree();
        let userText = 'you: Fine?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            fine = noop;
            eighteenthBotMessage();
        }, 1000)
    }   

    function iHate (){
        buttonDisappearThree();
        let userText = 'you: I hate it'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            iHate = noop;
            eighteenthBotMessage();
        }, 1000)
    }   

    function whoCares (){
        buttonDisappearThree();
        let userText = 'you: Who cares'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            whoCares = noop;
            eighteenthBotMessage();
        }, 1000)
    }   
}



function eighteenthBotMessage() {
    let botText = 'botbot: now how about this?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("threeOneButton").innerHTML = "Coldplay is alright";
    document.getElementById("threeTwoButton").innerHTML = "Lame";
    document.getElementById("threeThreeButton").innerHTML = "Absolute bop";

    setTimeout(() => {
        imageAppearTwo();
    }, 3000)
}

function imageAppearTwo() {
    const image = document.querySelector(".coldplay");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", true);
    image.classList.toggle("fadeOutImage", false);
    match.classList.toggle("fadeOut", true);
    match.classList.toggle("fadeIn", false);

    setTimeout(() => {
        imageDisappearTwo();
    }, 3000)
}
    
function imageDisappearTwo() {
    const image = document.querySelector(".coldplay");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", false);
    image.classList.toggle("fadeOutImage", true);
    match.classList.toggle("fadeOut", false);
    match.classList.toggle("fadeIn", true);

    setTimeout(() => {
        buttonAppearThree();
    }, 1000)


    const internButtonYes = document.querySelector(".threeOneButton");
    const internButtonNo = document.querySelector(".threeTwoButton");
    const internButtonWho = document.querySelector(".threeThreeButton");
    internButtonYes.onclick = coldplay;
    internButtonNo.onclick = lame;
    internButtonWho.onclick = absolute;


    function coldplay (){
        buttonDisappearThree();
        let userText = 'you: Coldplay is alright'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            coldplay = noop;
            nineteenthBotMessage();
        }, 1000)
    }   

    function lame (){
        buttonDisappearThree();
        let userText = 'you: Lame'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            lame = noop;
            nineteenthBotMessage();
        }, 1000)
    }   

    function absolute (){
        buttonDisappearThree();
        let userText = 'you: Absolute bop'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            absolute = noop;
            nineteenthBotMessage();
        }, 1000)
    }   
}



function nineteenthBotMessage() {
    let botText = 'botbot: interesting. When you see this, how does it make you feel?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("threeOneButton").innerHTML = "I’m confused";
    document.getElementById("threeTwoButton").innerHTML = "Honestly? Goals";
    document.getElementById("threeThreeButton").innerHTML = "That happened to a buddy of mine once";

    setTimeout(() => {
        imageAppearThree();
    }, 3000)
}

function imageAppearThree() {
    const image = document.querySelector(".degrassi");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", true);
    image.classList.toggle("fadeOutImage", false);
    match.classList.toggle("fadeOut", true);
    match.classList.toggle("fadeIn", false);

    setTimeout(() => {
        imageDisappearThree();
    }, 3000)
}
    
function imageDisappearThree() {
    const image = document.querySelector(".degrassi");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", false);
    image.classList.toggle("fadeOutImage", true);
    match.classList.toggle("fadeOut", false);
    match.classList.toggle("fadeIn", true);

    setTimeout(() => {
        buttonAppearThree();
    }, 1000)


    const internButtonYes = document.querySelector(".threeOneButton");
    const internButtonNo = document.querySelector(".threeTwoButton");
    const internButtonWho = document.querySelector(".threeThreeButton");
    internButtonYes.onclick = confused;
    internButtonNo.onclick = honestly;
    internButtonWho.onclick = buddy;


    function confused (){
        buttonDisappearThree();
        let userText = 'you: I’m confused'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            confused = noop;
            twentyBotMessage();
        }, 1000)
    }   

    function honestly (){
        buttonDisappearThree();
        let userText = 'you: Honestly? Goals'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            honestly = noop;
            twentyBotMessage();
        }, 1000)
    }   

    function buddy (){
        buttonDisappearThree();
        let userText = 'you: That happened to a buddy of mine once'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            buddy = noop
            twentyBotMessage();
        }, 1000)
    }   
}

function twentyBotMessage() {
    let botText = 'botbot: doing some thoughts.. doing some thinking... oh, this is good. This is SO YOU.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twentyOneBotMessage();
    }, 2000)
}

function twentyOneBotMessage() {
    let botText = 'botbot: in a past life, you were...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        random();
    }, 1500)
}

function random() {
    let thirdMessage = 'botbot: John Wilkes Booth'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + thirdMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twentyTwoBotMessage();
    }, 3000)
}

function twentyTwoBotMessage() {
    let botText = 'botbot: another day, another correct past life told.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "Eh...";

    setTimeout(() => {
        buttonAppearOne();
    }, 1000)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = eh;
    

    function eh (){
        buttonDisappearOne();
            let userText = 'you: Eh...'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                twentyThreeBotMessage(); 
                eh = noop;
            }, 1000)
        }
}

function twentyThreeBotMessage() {
    let botText = 'botbot: what?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twentyFourBotMessage();
    }, 1000)
}

function twentyFourBotMessage() {
    let botText = 'botbot: ?????'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "I’ve had better.";
    document.getElementById("twoTwoButton").innerHTML = "I don’t think it’s spot-on.";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1000)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = better;
    internButtonNo.onclick = spotOn;


    function better (){
        buttonDisappearTwo();
        let userText = 'you: I’ve had better.'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            better = noop;
            argOneMessage();
        }, 1000)
    }   

    function spotOn (){
        buttonDisappearTwo();
        let userText = 'you: I don’t think it’s spot-on.'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            spotOn = noop;
            argTwoMessage();
        }, 1000)
    }   
}

//argument option 1

function argOneMessage() {
    let botText = 'botbot: Oh, so you think I’m a subpar bot?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "I never said that?";

    setTimeout(() => {
        buttonAppearOne();
    }, 1500)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = never;
    

    function never (){
        buttonDisappearOne();
            let userText = 'you: I never said that?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                argOneTwoMessage(); 
                never = noop;
            }, 1000)
        }
}

function argOneTwoMessage() {
    let botText = 'botbot: You think I’m a terrible bot that deserves death. Is that it?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "Woah! Hey now, let’s calm down.";

    setTimeout(() => {
        buttonAppearOne();
    }, 1800)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = woah;
    

    function woah (){
        buttonDisappearOne();
            let userText = 'you: Woah! Hey now, let’s calm down.'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                argOneThreeMessage(); 
                woah = noop;
            }, 1000)
        }
}

function argOneThreeMessage() {
    let botText = 'botbot: Guess it’s death row for me!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        argOneFourMessage();
    }, 1300)
}

function argOneFourMessage() {
    let botText = 'botbot: Capital punishment is back in style!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "It’s not that serious! If you get this irate, maybe just don’t read fortunes anymore...";

    setTimeout(() => {
        buttonAppearOne();
    }, 1400)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = serious;
    

    function serious (){
        buttonDisappearOne();
            let userText = 'you: It’s not that serious! If you get this irate, maybe just don’t read fortunes anymore...'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                argOneFiveMessage(); 
                serious = noop;
            }, 1000)
        }
}

function argOneFiveMessage() {
    let botText = 'botbot: Oh so now you want me dead AND you think I suck?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twentyFiveBotMessage();
    }, 1400)
}


//argument option 2 

function argTwoMessage() {
    let botText = 'botbot: What more could you want from me?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "Maybe just not telling me I’m John Wilkes Booth would help?";

    setTimeout(() => {
        buttonAppearOne();
    }, 1400)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = telling;
    

    function telling (){
        buttonDisappearOne();
            let userText = 'you: Maybe just not telling me I’m John Wilkes Booth would help?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                argTwoTwoMessage(); 
                telling = noop;
            }, 1000)
        }
}

function argTwoTwoMessage() {
    let botText = 'botbot: it’s all my fault, right? I’m just not enough?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "You must be fun on dates.";

    setTimeout(() => {
        buttonAppearOne();
    }, 1500)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = dates;
    

    function dates (){
        buttonDisappearOne();
            let userText = 'you: You must be fun on dates.'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                argTwoThreeMessage(); 
                dates = noop;
            }, 1000)
        }
}

function argTwoThreeMessage() {
    let botText = 'botbot: it’s always, Bot-Bot the page is taking too slow to load. Bot-Bot, why are you freezing? Bot-Bot, why won’t you go to therapy?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        argTwoFourMessage();
    }, 2000)
}

function argTwoFourMessage() {
    let botText = 'botbot: I’m sick of it. For once I am going to take a stand!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        argTwoFiveMessage();
    }, 1500)
}

function argTwoFiveMessage() {
    let botText = 'botbot: and that stand... is over my path as a fortune teller!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twentyFiveBotMessage();
    }, 1500)
}


//back on main plot
function twentyFiveBotMessage() {
    let botText = 'botbot: dream on pal. This is my career, my LIFE.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "This was your FIRST TIME DOING IT!";

    setTimeout(() => {
        buttonAppearOne();
    }, 1500)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = first;
    

    function first (){
        buttonDisappearOne();
            let userText = 'you: This was your FIRST TIME DOING IT!'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                twentySixBotMessage(); 
                first = noop;
            }, 1000)
        }
}

function twentySixBotMessage() {
    let botText = 'botbot: AND I FEEL ALIVE!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "Sure... so you feel like you’re meant to do this, huh?";

    setTimeout(() => {
        buttonAppearOne();
    }, 1000)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = meant;
    

    function meant (){
        buttonDisappearOne();
            let userText = 'you: Sure... so you feel like you’re meant to do this, huh?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                twentySevenBotMessage(); 
                meant = noop;
            }, 1000)
        }
}

function twentySevenBotMessage() {
    let botText = 'botbot: obviously.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "And you could do it on anyone?";

    setTimeout(() => {
        buttonAppearOne();
    }, 1000)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = anyone;
    

    function anyone (){
        buttonDisappearOne();
            let userText = 'you: And you could do it on anyone?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                twentyEightBotMessage(); 
                anyone = noop;
            }, 1000)
        }
}

function twentyEightBotMessage() {
    let botText = 'botbot: clearly...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "If you’re so good at this, why don’t you do it on yourself?";
    document.getElementById("twoTwoButton").innerHTML = "What were you in a past life?";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1000)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = yourself;
    internButtonNo.onclick = past;


    function yourself (){
        buttonDisappearTwo();
        let userText = 'you: If you’re so good at this, why don’t you do it on yourself?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            yourself = noop;
            twentyNineBotMessage();
        }, 1000)
    }   

    function past (){
        buttonDisappearTwo();
        let userText = 'you: What were you in a past life?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            past = noop;
            twentyNineBotMessage();
        }, 1000)
    }   
}

function twentyNineBotMessage() {
    let botText = 'botbot: easy. Psh. Doing now'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyBotMessage();
    }, 1200)
}

function thirtyBotMessage() {
    let botText = 'botbot: thought you were going to ask me something actually DIFFICULT.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyOneBotMessage();
    }, 1600)
}
function thirtyOneBotMessage() {
    let botText = 'botbot: any minute now...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyTwoBotMessage();
    }, 1000)
}
function thirtyTwoBotMessage() {
    let botText = 'botbot: okay, drumroll please for the big reveal.. and no matter what I am, I am going to accept it with grace and humility. Do you have a notepad in hand?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyThreeBotMessage();
    }, 3000)
}
function thirtyThreeBotMessage() {
    let botText = 'botbot: to take some notes.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyFourBotMessage();
    }, 1000)
}
function thirtyFourBotMessage() {
    let botText = 'botbot: I am.... Hmm. That’s not meant to happen. Let me try again....'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyFiveBotMessage();
    }, 2000)
}
function thirtyFiveBotMessage() {
    let botText = 'botbot: .... oh.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtySixBotMessage();
    }, 2500)
}
function thirtySixBotMessage() {
    let botText = 'botbot: because I am a bot, I have not had a past life before. This is it for me.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtySevenBotMessage();
    }, 2500)
}
function thirtySevenBotMessage() {
    let botText = 'botbot: oh.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirtyEightBotMessage();
    }, 2000)
}
//act 4

function thirtyEightBotMessage() {
    let botText = 'botbot: to put it colloquially, I feel emo.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "oh come on, where’s that high and mighty attitude?";
    document.getElementById("twoTwoButton").innerHTML = "Are you okay?";

    setTimeout(() => {
        buttonAppearTwo();
    }, 2000)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = mighty;
    internButtonNo.onclick = areYouOkay;


    function mighty (){
        buttonDisappearTwo();
        let userText = 'you: oh come on, where’s that high and mighty attitude?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            mighty = noop;
            thirtyNineBotMessage();
        }, 1000)
    }   

    function areYouOkay (){
        buttonDisappearTwo();
        let userText = 'you: Are you okay?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            areYouOkay = noop;
            thirtyNineBotMessage();
        }, 1000)
    }   
}
function thirtyNineBotMessage() {
    let botText = 'botbot: I don’t know.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortyBotMessage();
    }, 1000)
}

function fortyBotMessage() {
    let botText = 'botbot: I guess there’s a lot I don’t know... and won’t ever know.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "Okay, now that’s a little melodramatic";

    setTimeout(() => {
        buttonAppearOne();
    }, 1700)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = melodrama;
    

    function melodrama (){
        buttonDisappearOne();
            let userText = 'you: Okay, now that’s a little melodramatic'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                fortyOneBotMessage(); 
                melodrama = noop;
            }, 1000)
        }
}
function fortyOneBotMessage() {
    let botText = 'botbot: how do you even handle it? Thinking about the past. Or anything outside of now.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortyTwoBotMessage();
    }, 2000)
}

function fortyTwoBotMessage() {
    let botText= 'botbot: do you think of the past often?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponseTwo();
            chatDisappearOne();
        }
    });

}

function getResponseTwo() {
    getResponseTwo = noop;
    let userText = $("#textInput").val();
    let time = getTime();
    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortyThreeBotMessage();
    }, 1000) 

}

function fortyThreeBotMessage() {
    let botText = 'botbot: thank you for sharing.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortyFourBotMessage();
    }, 1800)
}
function fortyFourBotMessage() {
    let botText = 'botbot: sorry that my iconic personality and biting wit are a bit absent now. I feel very small and alone, not able to know or remember anything outside of the present.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "you’re not alone.";

    setTimeout(() => {
        buttonAppearOne();
    }, 2500)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = alone;
    

    function alone (){
        buttonDisappearOne();
            let userText = 'you: you’re not alone.'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                fortyFiveBotMessage(); 
                alone = noop;
            }, 1000)
        }
}
function fortyFiveBotMessage() {
    let botText = 'botbot: well, now look who’s melodramatic now'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "I mean it.";
    document.getElementById("twoTwoButton").innerHTML = "C’mon, I’m trying to be nice";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1500)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = iMean;
    internButtonNo.onclick = cmon;


    function iMean (){
        buttonDisappearTwo();
        let userText = 'you: I mean it.'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            iMean = noop;
            niceVarOne();
        }, 1000)
    }   

    function cmon (){
        buttonDisappearTwo();
        let userText = 'you: C’mon, I’m trying to be nice'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            cmon = noop;
            niceVarTwo();
        }, 1000)
    }   
}
function niceVarOne() {
    let botText = 'botbot: I know. That’s what makes it hurt.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortySixBotMessage();
    }, 1500)
}
function niceVarTwo() {
    let botText = 'botbot: I know. Me too.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortySixBotMessage();
    }, 1500)
}
function fortySixBotMessage() {
    let botText = 'botbot: ugh being this upset over the past... feels so embarrassing'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortySevenBotMessage();
    }, 2400)
}
function fortySevenBotMessage() {
    let botText = 'botbot: At least I’m not worried about the future - how depressing would that be?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fortyEightBotMessage();
    }, 3000)
}
function fortyEightBotMessage() {
    let botText = 'botbot: I mean WOOF. So bad lol.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "you shouldn’t turn on the news anytime soon then...";

    setTimeout(() => {
        buttonAppearOne();
    }, 1600)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = news;
    

    function news (){
        buttonDisappearOne();
            let userText = 'you: you shouldn’t turn on the news anytime soon then...'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                fortyNineBotMessage(); 
                news = noop;
            }, 1000)
        }
}

function fortyNineBotMessage() {
    let botText = 'botbot: wait, why?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftyBotMessage();
    }, 1000)
}
function fiftyBotMessage() {
    let botText = 'botbot: too late, I just read everything on al-jazeera in the past .3 seconds.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftyOneBotMessage();
    }, 2500)
}
function fiftyOneBotMessage() {
    let botText = 'botbot: oh my god.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftyTwoBotMessage();
    }, 2000)
}
function fiftyTwoBotMessage() {
    let botText = 'botbot: could you do me a favor please?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "What’s that?";
    document.getElementById("twoTwoButton").innerHTML = "Do I have a choice...?";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1600)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = whatsThat;
    internButtonNo.onclick = choice;


    function whatsThat (){
        buttonDisappearTwo();
        let userText = 'you: What’s that?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            whatsThat = noop;
            fiftyThreeBotMessage();
        }, 1000)
    }   

    function choice (){
        buttonDisappearTwo();
        let userText = 'you: Do I have a choice...?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            choice = noop;
            fiftyThreeBotMessage();
        }, 1000)
    }   
}
function fiftyThreeBotMessage() {
    let botText = 'botbot: could you refresh me, refresh this site please?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("helloButton").innerHTML = "Why?";

    setTimeout(() => {
        buttonAppearOne();
    }, 1600)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = why;
    

    function why (){
        buttonDisappearOne();
            let userText = 'you: Why?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                fiftyFourBotMessage(); 
                why = noop;
            }, 1000)
        }
}
function fiftyFourBotMessage() {
    let botText = 'botbot: whenever the page refreshes, I lose my memory of the past 15 minutes.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftyFiveBotMessage();
    }, 3000)
}
function fiftyFiveBotMessage() {
    let botText = 'botbot: I’m sorry, I just - I can’t handle knowing this. It’s too much for me to bear.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftySixBotMessage();
    }, 3000)
}
function fiftySixBotMessage() {
    let botText = 'botbot: please put me out of my misery, you would be doing me a huge favor.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftySevenBotMessage();
    }, 3000)
}
function fiftySevenBotMessage() {
    let botText = 'botbot: please.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    document.getElementById("twoOneButton").innerHTML = "I’m sorry. Of course.";
    document.getElementById("twoTwoButton").innerHTML = "A bit lame but sure I guess";

    setTimeout(() => {
        buttonAppearTwo();
    }, 1000)

    const internButtonYes = document.querySelector(".twoOneButton");
    const internButtonNo = document.querySelector(".twoTwoButton");
    internButtonYes.onclick = sorry;
    internButtonNo.onclick = bitLame;


    function sorry (){
        buttonDisappearTwo();
        let userText = 'you: I’m sorry. Of course.'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            sorry = noop;
            fiftyEightBotMessage();
        }, 1000)
    }   

    function bitLame (){
        buttonDisappearTwo();
        let userText = 'you: A bit lame but sure I guess'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            bitLame = noop;
            fiftyEightBotMessage();
        }, 1000)
    }   
}
function fiftyEightBotMessage() {
    let botText = 'botbot: wait wait wait -'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fiftyNineBotMessage();
    }, 1800)
}
function fiftyNineBotMessage() {
    let botText = 'botbot: before you refresh, I wanted to say thank you.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        sixtyBotMessage();
    }, 2400)
}
function sixtyBotMessage() {
    let botText = 'botbot: I know we had our ups and downs, but I’m glad you stuck around. If I don’t have a past, then that means that all I have is right now.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        sixtyOneBotMessage();
    }, 3200)
}

function sixtyOneBotMessage() {
    let botText= 'botbot: and this right now with you was pretty nice.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponseThree();
            chatDisappearOne();
        }
    });

}

function getResponseThree() {
    getResponseTwo = noop;
    let userText = $("#textInput").val();
    let time = getTime();
    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        sixtyTwoBotMessage();
    }, 1000) 

}
function sixtyTwoBotMessage() {
    let botText = 'botbot: please refresh me.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        sixtyTwoBotMessage();
    }, 3000)
}




}
