document.getElementById('playButton').addEventListener('click', startGame);

function startGame() {
  var hideDivs = document.querySelectorAll('.intro, .intro div');
  var showDivs = document.querySelectorAll('.chat, .inner-chat-header, .inner-chat-footer');
  hideDivs.forEach(function(div) {
    div.style.display = 'none';
  });
  showDivs.forEach(function(div) {
    div.style.display = 'flex';
  });
  botMessage();
}

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

var button = document.getElementById('userButton');
var buttonTwo = document.getElementById('userButtonTwo');
var buttonThree = document.getElementById('userButtonThree');
var textBox = document.getElementById('textBox');
var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');
var speed = 40;
var userName = {};



let i = 0; // bot message array
var targetElm = document.querySelector('.inner-chat-content');
function botMessage() {
  let time = getTime();
  let user = "bot bot: "
  if (i < botMessages.length) {
    let message = botMessages[i];
    let nextTimeout = (message.length * speed) + 400;
    let mySpan = "botSpan" + i; 
    let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
    $("#botMessage").append(botHtml);
    typeWriter(message, 0, mySpan);
    if (i === 2 || 
        i === 4 || 
        i === 9 || 
        i === 11 || 
        i === 12 || 
        i === 13 || 
        i === 14 ||
        i === 16 ||
        i === 20 ||
        i === 21 || 
        i === 22 ) { // index at which bot double texts
      i++;
      setTimeout(botMessage, nextTimeout); 
    } else {
      i++;
      setTimeout(gameLogic, nextTimeout); 
    }
  } else {
    let message = "Please refresh me.";
    let mySpan = "botSpan" + i; 
    let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
    $("#botMessage").append(botHtml);
    typeWriter(message, 0, mySpan);
      i++;
  }
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

function typeWriter(text, index, spanId) {
  if (index < text.length) {
    $('#' + spanId).append(text.charAt(index)); 
    setTimeout(function() {
      typeWriter(text, index + 1, spanId); 
    }, speed);
  }
}


let pO = 0; // path one bot message array
var targetElm = document.querySelector('.inner-chat-content');
function pathOneFunc() {
  let time = getTime();
  let user = "bot bot: "
    let message = pathOne[pO];
    let nextTimeout = (message.length * speed) + 400;
    let mySpan = "botSpan" + pO + 100; // arbitrary number so that no duplicate span ids
    let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
    $("#botMessage").append(botHtml);
    typeWriter(message, 0, mySpan);
    if (pO === 0) {
      pO++;
      setTimeout(pathOneFunc, nextTimeout); 
    } else if (pO === 3) {
      setTimeout(botMessage, nextTimeout); 
    } else {
      pO++;
      setTimeout(gameLogic, nextTimeout); 
    }
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

let pT = 0; // path two bot message array
var targetElm = document.querySelector('.inner-chat-content');
function pathTwoFunc() {
  let time = getTime();
  let user = "bot bot: "
  let message = pathTwo[pT];
  let nextTimeout = (message.length * speed) + 400;
  let mySpan = "botSpan" + pT + 200; // arbitrary number so that no duplicate span ids
  let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
  $("#botMessage").append(botHtml);
  typeWriter(message, 0, mySpan);
    if (pT >= 0 && pT < 3) { 
      pT++;
      setTimeout(pathTwoFunc, nextTimeout); 
    } else if (pT === 3) {
      setTimeout(botMessage, nextTimeout); 
    }
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

function altUserMessage() {
  let time = getTime();
  let user = "you: "
  let message = pathOne[pO];
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  pO++;
    setTimeout(() => {
      pathOneFunc();
    }, 500)
}

function textAltUserMessage() {
  let time = getTime();
  let user = "you: "
  let message = $("#textBox").val();
  let userName = message;
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    setTimeout(() => {
      botMessage();
      // console.log(userName); Fix me
    }, 500)
    setTimeout(() => {
      textBox.value = "";
    }, 1000)
}

let j = 0; // singular user choice array
function userMessage() {
  let time = getTime();
  let user = "you: "
  let message = userMessages[j-1];
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  if (j === 6) {
    setTimeout(() => {
      pathOneFunc();
    }, 500)
  } else {
    setTimeout(() => {
      botMessage();
    }, 500)
  }
}

let d = 0; // double user choice array
function userMessageTwo() {
  let time = getTime();
  let user = "you: "
  let message = twoChoices[d-1];
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  if (j === 6) {
    setTimeout(() => {
      pathTwoFunc();
    }, 500)
  } else {
    setTimeout(() => {
      botMessage();
    }, 500)
  }
}

let t = 0; // triple user choice array
function userMessageThree() {
  let time = getTime();
  let user = "you: "
  let message = threeChoices[t-1];
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  setTimeout(() => {
    botMessage();
  }, 500)
}

function gameLogic() {
  button.style.display = "block";
  typeWriterForButton(userMessages[j], 0, button);  
  if (pO === 2) {
    typeWriterForButton(pathOne[pO], 0, button);  
  } else if (i === 9 || i === 11) { // index at which textbox appears
    textBox.style.display = "block";
    button.style.display = "none";
  } else {
    if (j === 1 || j === 3 || j === 4 || j === 5 || j === 6) { // index at which there are two user choices
      buttonTwo.style.display = "block";
      typeWriterForButton(twoChoices[d], 0, buttonTwo); 
      d++;
    } else if (j === 7 || j === 8 || j === 9) { // index at which there are three user choices
      manageImages(j);  
      buttonTwo.style.display = "block";
      buttonThree.style.display = "block";
      typeWriterForButton(twoChoices[d], 0, buttonTwo);
      typeWriterForButton(threeChoices[t], 0, buttonThree);
      t++;
      d++;
    }
    j++;
  }
}

function manageImages(j) {
  const imageMapping = { 7: imageOne, 8: imageTwo, 9: imageThree };
  const image = imageMapping[j];
  if (image) {
    image.style.display = "block";
    setTimeout(() => {
      image.style.display = "none";
    }, 2000);
  }
}

function typeWriterForButton(text, index, targetElement) {
  if (index < text.length) {
    if (index === 0) {
      targetElement.innerHTML = '';
    }
    targetElement.innerHTML += text.charAt(index);
    setTimeout(function() {
      typeWriterForButton(text, index + 1, targetElement);
    }, 50);
  }
}


function inputHide () {
  button.style.display = "none";
  buttonTwo.style.display = "none";
  buttonThree.style.display = "none";
  textBox.style.display = "none";
  imageOne.style.display = "none";
}

document.getElementById("userButton").addEventListener("click", function() {
  if (pO === 2) {
    setTimeout(altUserMessage, 500);
  } else {
    setTimeout(userMessage, 500);
  }
  inputHide();
});

document.getElementById("userButtonTwo").addEventListener("click", function() {
  if (pT === 2) {
    setTimeout(altUserMessage, 500);
  } else {
    setTimeout(userMessageTwo, 500);
  }
  inputHide();
});

document.getElementById("userButtonThree").addEventListener("click", function() {
  setTimeout(userMessageThree, 500);
  inputHide();
});


$("#textBox").keypress(function (e) {
  if (e.which == 13) {
    setTimeout(textAltUserMessage, 500);
    inputHide();
  }
});



let botMessages = [
  "hi",
  "hi",
  "oh, i repeated myself. sorry, i have a stutter!",
  "actually, i don’t. i'm a pathological liar.",
  "future telling? oh, did you come here for madame bot bot, psychic and future teller?",
  "yeah, sorry, wrong bot bot. she stopped paying her domain fee and so her site sometimes shows up on my domain, because of the same name and all that. very annoying. like getting the mail of old tenants in your apartment.",
  "while you're here... i’m not too good at telling futures, but i could tell you what you were in a past life. how about that?",
  "it’s not that hard, i used to watch the other bot bot do it sometimes. i can’t imagine how i could be wrong...",
  "how about this... i can make a guess and if i’m wrong, you can leave. pronto. not like you have anything better to do, right?",
  "gonna pretend i didn’t hear that. let’s begin.",
  "okay, let’s start with the basics. what’s your name?",
  "okay, buddy. a little derivative, i’ve heard that one before.",
  "what’s your social security number?",
  "kidding! i wouldn’t ask you that.",
  "it’s already on the internet anyway.",
  "have you ever had a possession where you mentioned what you were, in a past... life?",
  "let’s move on. time for some past life recall - i’m about to show you some images, videos, etc, and we will see how you react them.",
  "how do you feel about this?",
  "now how about this?",
  "interesting. when you see this, how does it make you feel?",
  "doing some thoughts... doing some thinking... oh, this is good. this is so you.",
  "in a past life, you were... Seabiscuit",
  "another day, another correct past life told.",
  "this is great news, actually — i’ve been needing a 10th side gig. i think this could be it.",
  "what?",
  "???????"
];


// contains all primary choices and free answer triggers
let userMessages = [
  "Hello.",
  "You already said that.",
  "What does this have to do with future telling?",
  "Weird.",
  "I’m a little skeptical.",
  "What will it cost me?",
  "No.",
  "Fine",
  "Alright",
  "I don’t know this show",
  "Well…",
  "Part two coming soon... stay tuned"
];

//contains all secondary choices when two options are available for user's message
let twoChoices = [
  "Hi!",
  "I guess this was too good to be true. Bye.",
  "How?",
  "Don't you have a job you should be doing?",
  "Even if I did, telling you kind of feels like cheating?",
  "Strong dislike",
  "Incredibly dated",
  "#Goals"
];

//contains all tertiary choices when three options are available for user's message
let threeChoices = [
  "Absolutely neutral",
  "Absolute bop",
  "I don’t watch tv"
];

let pathOne = [
  "nothing?",
  "but i don’t like your attitude… maybe it will cost you something",
  "Please, don’t. A Zelle scam almost destroyed me last year.",
  "i know! i can see your bank account balance right now."
];

let pathTwo = [
  "don’t you have a life you should be living? owned!",
  "technically i do have work i’m neglecting, but it’s not like they’d notice.",
  "nobody really checks up on me.",
  "that’s a little too honest, lol."
];


let pastLifeOptions = [

];

