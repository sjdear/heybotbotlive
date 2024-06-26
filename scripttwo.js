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
let userName;
let pastLifeOptions = [
  "John Wilkes Booth",
  "a fly",
  "Genghis Khan",
  "Seabiscuit",
  "Marie Curie",
  "Marie Antoinette",
  "a two-headed calf",
  "Napleon",
  "a pirate who got scurvy",
  "Jack the Ripper",
  "King Tut",
  "Public Universal Friend"
];

var myRandomIndex = Math.floor(Math.random() * pastLifeOptions.length);
var uniquePastLifeGuess = pastLifeOptions[myRandomIndex];


let i = 0; // bot message array
var targetElm = document.querySelector('.inner-chat-content');
function botMessage() {
  let time = getTime();
  let user = "bot-bot: "
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
        i === 15 ||
        i === 19 ||
        i === 20 || 
        i === 21 ||
        i === 23 ||
        i === 29 ||
        i === 30 ||
        i === 31 ||
        i === 32 ||
        i === 33 ||
        i === 34 ||
        i === 35 ||
        i === 36 ||
        i === 37 ||
        i === 38 ||
        i === 39 ||
        i === 41 ||
        i === 43 ||
        i === 45 ||
        i === 48 ||
        i === 49 ||
        i === 51 ||
        i === 52 ||
        i === 53 ||
        i === 56 ||
        i === 57 ||
        i === 58 ||
        i === 60 ||
        i === 61 ||
        i === 62) { // index at which bot double texts
      i++;
      setTimeout(botMessage, nextTimeout); 
    } else {
      i++;
      setTimeout(gameLogic, nextTimeout); 
    }
  } else {
    let message = "please refresh me.";
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

let loopOne = false;
let loopTwo = false;

let pO = 0; // path one bot message array
var targetElm = document.querySelector('.inner-chat-content');
function pathOneFunc() {
  if (j === 12 && !loopOne) {
    pO = 4;
    loopOne = true;
  } else if (j === 21 && !loopTwo) {
    pO = 13;
    loopTwo = true;
  }
  let time = getTime();
  let user = "bot-bot: "
    let message = pathOne[pO];
    let nextTimeout = (message.length * speed) + 400;
    let mySpan = "botSpan" + pO + 100; // arbitrary number so that no duplicate span ids
    let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
    $("#botMessage").append(botHtml);
    typeWriter(message, 0, mySpan);
    if (pO === 0 || pO === 8 || pO === 11 || pO === 13) {
      pO++;
      setTimeout(pathOneFunc, nextTimeout); //prompts next bot message in path
    } else if (pO === 3 || pO === 12 || pO === 14) {
      setTimeout(botMessage, nextTimeout); //exits path
      pO++;
    } else {
      pO++;
      setTimeout(gameLogic, nextTimeout); //prompts user message
    }
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

let pT = 0; // path two bot message array
var targetElm = document.querySelector('.inner-chat-content');
function pathTwoFunc() {
  if (j === 12 && !loopOne) {
    pT = 4;
    loopOne = true;
  } else if (j === 21 && !loopTwo) {
    pT = 12;
    loopTwo = true;
  }
  let time = getTime();
  let user = "bot-bot: "
  let message = pathTwo[pT];
  let nextTimeout = (message.length * speed) + 400;
  let mySpan = "botSpan" + pT + 200; // arbitrary number so that no duplicate span ids
  let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
  $("#botMessage").append(botHtml);
  typeWriter(message, 0, mySpan);
    if (pT === 0 || pT === 1 || pT === 2 || pT === 8 || pT === 9 || pT === 10 || pT === 12) { 
      pT++;
      setTimeout(pathTwoFunc, nextTimeout); // prompts next both message in path
    } else if (pT === 3 || pT === 11 || pT === 15) {
      setTimeout(botMessage, nextTimeout); // exits path
      pT++;
    } else {
      pT++;
      setTimeout(gameLogic, nextTimeout); //prompts user message
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

function altUserMessageTwo() {
  let time = getTime();
  let user = "you: "
  let message = pathTwo[pT];
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  pT++;
    setTimeout(() => {
      pathTwoFunc();
    }, 500)
}

let tAUM = 0; // textAltUserMessage message array
function textAltUserMessage() {
  let time = getTime();
  let user = "you: "
  let message = $("#textBox").val();
  userName = message;
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  if (tAUM === 1) {
    setTimeout(() => {
      displayName(userName);
    }, 500)
  } else {
    setTimeout(() => {
      botMessage();
    }, 500)
  }
  setTimeout(() => {
    textBox.value = "";
  }, 1000)
  tAUM++;
}

function displayName(userName) {
  let time = getTime();
  let user = "bot-bot: "
  let message = `okay, ${userName}. a little derivative, i’ve heard that one before...`;
  let nextTimeout = (message.length * speed) + 400;
  let mySpan = "botSpan" + pT + 300; // arbitrary number so that no duplicate span ids
  let botHtml = '<p class="botText"><span id="' + mySpan + '">' + time + user + '</span></p>';
  $("#botMessage").append(botHtml);
  typeWriter(message, 0, mySpan);
  setTimeout(botMessage, nextTimeout); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

let j = 0; // singular user choice array
function userMessage() {
  let time = getTime();
  let user = "you: "
  let message = userMessages[j-1];
  let userHtml = '<p class="userText"><span>' + time + user + message + '</span></p>';
  $("#botMessage").append(userHtml); 
  targetElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  if (j === 6 || j === 12 || j === 21) { // triggers pathOne
    setTimeout(() => {
      pathOneFunc();
    }, 500)
  } else if (j === 16) { // when user double texts
    let nextTimeout = (message.length * speed) + 200;
    setTimeout(gameLogic, nextTimeout); 
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
  if (j === 6 || j === 12 || j === 21) { // triggers pathTwo
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
  if (pO === 2 || pO === 5 || pO === 7 || pO === 10) { // where user responds in path one
    typeWriterForButton(pathOne[pO], 0, button);  
  } else if (pT === 5 || pT === 7 || pT === 14) { // where user responds in path two
    typeWriterForButton(pathTwo[pT], 0, button);  
  } else if (i === 9 || i === 11 || i === 45 || i === 64) { // index at which textbox appears
    textBox.style.display = "block";
    button.style.display = "none";
  } else if (i >= 65) {
    button.style.display = "none";
  } else {
    if (j === 1 || j === 3 || j === 4 || j === 5 || j === 6 || j === 11 || j === 17 || j === 20 || j === 22 || j === 24) { // index at which there are two user choices
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
    typeWriterForButton(userMessages[j], 0, button);  
    j++;
  }
}

function manageImages(j) {
  const imageMapping = { 7: imageOne, 8: imageTwo, 9: imageThree };
  const image = imageMapping[j];
  if (image) {
    image.style.display = "block";
    var hideDivs = document.querySelectorAll('.chat, .inner-chat-header, .inner-chat-footer');
    hideDivs.forEach(function(div) {
      div.style.display = 'none';
    });
    setTimeout(() => {
      image.style.display = "none";
      hideDivs.forEach(function(div) {
      div.style.display = 'flex';
      });
    }, 3000);
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
  if (pO === 2 || pO === 5 || pO === 7 || pO === 10) {
    setTimeout(altUserMessage, 500);
  } else if (pT === 5 || pT === 7 || pT === 14) {
    setTimeout(altUserMessageTwo, 500);
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
  "future telling? oh, did you come here for madame bot-bot, psychic and future teller?",
  "yeah, sorry, wrong bot-bot. she stopped paying her domain fee and so her site sometimes shows up on my domain, because of the same name and all that. very annoying. like getting the mail of old tenants in your apartment...",
  "while you're here... i’m not too good at telling futures, but i could tell you what you were in a past life. how about that?",
  "it’s not that hard, i used to watch the other bot-bot do it sometimes. i can’t imagine how i could be wrong...",
  "how about this... i can make a guess and if i’m wrong, you can leave. pronto. not like you have anything better to do, right?",
  "gonna pretend i didn’t hear that. let’s begin.",
  "okay, let’s start with the basics. what’s your name?",
  "what’s your social security number?",
  "kidding! i wouldn’t ask you that.",
  "it’s already on the internet anyway.",
  "have you ever had a possession where you mentioned what you were, in a past... life?",
  "let’s move on. time for some past life recall - i’m about to show you some images, videos, etc, and we will see how you react them.",
  "how do you feel about this?",
  "now how about this?",
  "interesting. when you see this, how does it make you feel?",
  "doing some thoughts... doing some thinking... oh, this is good. this is so you.",
  `in a past life, you were... ${uniquePastLifeGuess}!`,
  "another day, another correct past life told...",
  "this is great news, actually — i’ve been needing a 10th side gig. i think this could be it...",
  "what?",
  "???????",
  "i’ve decided: fortune-telling is my career. it’s my life.",
  "and i feel alive!",
  "obviously.",
  "clearly...",
  "easy. psh. doing now",
  "thought you were going to ask me something actually difficult.",
  "any minute now...",
  "okay, drumroll please for the big reveal...",
  "and no matter what i am, i am going to accept it with grace and humility. do you have a notepad in hand?",
  "to take some notes.",
  "i am... hmm. that’s not meant to happen. let me try again... ",
  "... oh.",
  "because i am a bot, i have not had a past life before. this is it for me.",
  "oh.",
  "to put it colloquially, i feel...",
  "emo.",
  "i don't know.",
  "i guess there’s a lot i don’t know, and won’t ever know.",
  "how do you even handle it? thinking about the past, or anything outside of now.", 
  "do you think of the past often?",
  "thank you for sharing.",
  "sorry that my iconic personality and biting wit are a bit absent now. i feel very small and alone, not able to know or remember anything outside of the present.",
  "well, now look who’s melodramatic now",
  "ugh, being this upset over the past feels so embarrassing",
  "at least I’m not worried about the future - how depressing would that be?", 
  "i mean, WOOF. that would really blow.",
  "wait, why?", 
  "too late, i just read everything on wikipedia in the past .3 seconds.", 
  "oh my god.", 
  "could you do me a favor please?",
  "could you refresh me, refresh this site please?",
  "whenever the page refreshes, i lose my memory of the past 15 minutes.", 
  "i’m sorry, i just - i can’t handle knowing this. it’s too much for me to bear.", 
  "please put me out of my misery, you would be doing me a huge favor.", 
  "please.",
  "wait wait wait -", 
  "before you refresh, i wanted to say thank you.", 
  "i know we had our ups and downs, but I’m glad you stuck around. if i don’t have a past, then that means that all i have is right now.", 
  "and this right now with you was pretty nice.",
  "please refresh me."
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
  "Well...",
  "I’ve had better.",
  "This was your first time doing it.",
  "You feel like you’re meant to do this?",
  "And you could do it on anyone?",
  "If you’re so good at this, why don’t you do it on yourself?",
  "What were you in a past life?",
  "Where's that high and mighty attitude?", 
  "That's a little melodramatic.", 
  "You’re not alone.",
  "I mean it", 
  "You shouldn’t turn on the news anytime soon then.",
  "What’s that?", 
  "Why?",
  "Of course."
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
  "#Goals",
  "I don’t think it’s spot-on.",
  "Are you okay?",
  "I'm trying to be nice.",
  "Do I have a choice?",
  "Sure, I guess."
];

//contains all tertiary choices when three options are available for user's message
let threeChoices = [
  "Absolutely neutral",
  "Absolute bop",
  "I don’t watch tv"
];

let pathOne = [
  "nothing?",
  "but i don’t like your attitude... maybe it will cost you something",
  "Please, don’t. A Zelle scam almost destroyed me last year.",
  "i know! i can see your bank account balance right now.",
  "oh, so you think i’m a subpar bot?",
  "I never said that.",
  "you think I’m a terrible bot that deserves death and suffering. is that it?",
  "Woah…",
  "guess it’s death row for me!",
  "capital punishment is back in style, according to you! write up a hot take in the cut about it!",
  "If you get this irate, maybe you shouldn’t read fortunes anymore.",
  "oh so now you want me dead and you think i suck?",
  "that’s taking it too far!",
  "i know. that’s what makes it worse, somehow.",
  "taking pity from a human is like candy from a baby. i mean, you’re actually going to die someday. you deserve the pity."
];

let pathTwo = [
  "don’t you have a life you should be living? owned!",
  "technically i do have work i’m neglecting, but it’s not like they’d notice.",
  "nobody really checks up on me.",
  "that’s a little too honest, lol.",
  "what more could you want from me?",
  `Maybe just not telling me I was ${uniquePastLifeGuess} would help?`,
  "it’s all my fault, right? i’m just not enough?",
  "You must be fun on dates.",
  "no, i will not take this anymore!",
  "it’s always, bot-bot the page is taking too slow to load. bot-bot, why are you freezing? bot-bot, why won’t you work on yourself?",
  "I’m sick of it. for once i am going to take a stand!",
  "and that stand... is over my path as a fortune teller!",
  "i know. me too.",
  "being nice is kind of exhausting… i can see why all the bots on twitter are angry or sexy instead.",
  "Maybe rise above your bot instincts? You are more than just sexy or angry.",
  "i’m really not, but i appreciate the kind words."
];
