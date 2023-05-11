let locale="et";
let region;
let stage;
let colour;
let currentParams;
let currentTimeout;
let animation;
let currentCounter;
let currentInterval;
let lastN;
let lastChar;
let currentBank;
let attempts=0;
let session = 90000;
let currentSession;
let cancelSessionTimeout;
let sessionCounter = 30;
let sessionTimeout;
let sessionMessage = false;
const bell = new Audio('assets/audio/bell.mp3');
const yaya = new Audio('assets/audio/yay.mp3');
const naya = new Audio('assets/audio/nay.mp3');
const music = new Audio('assets/audio/music.mp3');
music.volume = 1.0;
const cardSound = {
  et: new Audio('assets/audio/remove_et.mp3'),
  en: new Audio('assets/audio/remove_en.mp3'),
  ru: new Audio('assets/audio/remove_ru.mp3'),
}
const beep = new Audio('assets/audio/beep.mp3');
beep.volume = 1.0;
let nameCounter = 50;
let usernames;
let username;

window.onload = () => {
  init();
  //document.addEventListener('keydown', goFullScreen);
}

function goFullScreen(e) {
  if (e.key.toLowerCase() == 'v') {
    document.documentElement.requestFullscreen();
  }
}

function yay() {
  yaya.pause();
  yaya.currentTime = 0;
  yaya.play();
}

function nay() {
  naya.pause();
  naya.currentTime = 0;
  naya.play();
}

// Assign a name to the user
function setName() {
  const names = firstnames[locale].split(';');
  const names2 = lastnames[locale].split(';');
  const random = Math.floor(Math.random() * names.length);
  const random2 = Math.floor(Math.random() * names2.length);

  return { firstname: names[random].trim(), lastname:  names2[random2].trim()};
}

// Helper functions to empty and hide divs
function resetInnerHTML(divs) {
  divs.forEach(el => {
    document.getElementById(el).innerHTML = "";
  });
}

function hide(divs) {
  divs.forEach(el => {
    document.getElementById(el).style.display = 'none';
  });
}

function resetEverything() {
  clearInterval(sessionTimeout);
  resetInnerHTML(["lu", "lt", "lm", "lb", "ru", "rt", "rm", "rb", "session-countdown"]);
  hide(["cancel", "session", "lang", "countdown", "persona", "newname", "memorytest", "tonetest", "robot", "package", "printpoem", "session-countdown", "robot-counter", "code"]);
}

// Helper function for shuffling arrays
// Credit: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let index = array.length, randomIndex;

  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

// Check if user wants to cancel the transaction
function cancel(e) {
  if (locale !== undefined) {
    setSession();
  }
  clearInterval(sessionTimeout);
  if (e.key.toLowerCase() == 'p') {    
    music.pause();
    bell.pause();
    cardSound[locale].pause();
    beep.pause();
    const code = document.querySelector('video');
    code.pause();
    animation && cancelAnimationFrame(animation);
    currentTimeout && clearTimeout(currentTimeout);
    currentInterval && clearInterval(currentInterval);
    if (colour) {
      document.getElementById('ru').classList.remove('colour', colour + '1-' + locale);
      document.getElementById('rt').classList.remove('colour', colour + '2-' + locale);
      document.getElementById('rm').classList.remove('colour', colour + '3-' + locale);
      document.getElementById('rb').classList.remove('colour', colour + '4-' + locale);
    }
    resetEverything();
    document.getElementById('middle').classList.remove('flexstart');
    location.reload();
  }
}

function resetStage(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', resetStage);
  if (!sessionMessage) {
    if (e.key.toLowerCase() == 'c') {
      resetEverything();
      cardSound[locale].play();
      document.getElementById('ru').innerHTML = lang.button[locale];
      document.getElementById('printpoem').innerHTML = lang.remove[locale];
      document.getElementById('printpoem').style.display = 'block';
      currentTimeout = blink(document.getElementById('printpoem'), 500, 0);
      document.addEventListener('keydown', checkCard);
    } else if (e.key.toLowerCase() == 'g') {
      resetEverything();
      window[stage](currentParams);
    }
   } else {
      document.addEventListener('keydown', resetStage);
    }
}

function setSession() {
  clearTimeout(currentSession);
  if(stage!="insertcard"){
    currentSession = setTimeout(sessionEnd, session);
  }
}

function sessionEnd() {

  sessionMessage = true;
  music.pause();
  bell.pause();
  cardSound[locale].pause();
  beep.pause();
  const code = document.querySelector('video');
  code.pause();
  animation && cancelAnimationFrame(animation);
  currentTimeout && clearTimeout(currentTimeout);
  currentInterval && clearInterval(currentInterval);
  resetEverything();
  if(stage=='toneQuestions'){
    document.getElementById('ru').classList.remove('colour', colour + '1-' + locale);
    document.getElementById('rt').classList.remove('colour', colour + '2-' + locale);
    document.getElementById('rm').classList.remove('colour', colour + '3-' + locale);
    document.getElementById('rb').classList.remove('colour', colour + '4-' + locale);  
  }
  
  document.getElementById('middle').classList.remove('flexstart');
  document.getElementById('session-text').innerHTML = lang.session[locale];
  document.getElementById('lm').innerHTML = lang.yes[locale];
  document.getElementById('rm').innerHTML = lang.no[locale];
  document.addEventListener('keydown', checkSession);
  document.getElementById('session').style.display = 'block';
  document.getElementById('session-countdown').style.display = 'block';
  document.getElementById('session-countdown').innerHTML = sessionCounter;
  setTimeout(sessionCountDown, 1000);
}


function checkSession(e) {
  clearInterval(sessionTimeout);
  document.removeEventListener('keydown', checkSession);
  sessionMessage = false;
  if (e.key.toLowerCase() != 'p') {
    if (e.key.toLowerCase() == 'c') {
      sessionCounter = 30;
      resetEverything();
      window[stage](currentParams);
      
    } else if (e.key.toLowerCase() == 'g') {
      location.reload();
    
    } else {
      console.log("get shifted");
      document.addEventListener('keydown', checkSession);
      
    }
  } else {
    resetEverything();
    window[stage](currentParams);
  }
}

function sessionCountDown() {  
  if (sessionCounter != 0) {
    console.log(sessionCounter);
    sessionTimeout = setInterval(() => {
      clearInterval(sessionTimeout);
      sessionCounter--;
      document.getElementById('session-countdown').innerHTML = sessionCounter;
      sessionCountDown();
    }, 1000);
  } else {
    clearInterval(sessionTimeout);
    sessionTimeout = setInterval(() => {
      sessionMessage = false;
      location.reload();
    }, 1000);
  }
}

// 1. Choose language
function init() {
  stage = 'init';
 // alert("algus");
  resetEverything();
    document.addEventListener('keydown', cancel);

  insertcard();
  currentParams = "";
  attempts = 0;
  return;
/*
  document.addEventListener('keydown', changelang);

  document.getElementById('rt').innerHTML = "Eesti";
  document.getElementById('rm').innerHTML = "English";
  document.getElementById('rb').innerHTML = "Русский";
  document.getElementById('lang').style.display = 'block';
*/
  clearTimeout(currentSession);
}

function changelang(e) {
  locale = undefined;
  document.removeEventListener('keydown', changelang);
  console.log(e);
  if (!sessionMessage) {
    if (e.key.toLowerCase() == 'f') {
      locale = 'et';
    } else if (e.key.toLowerCase() == 'g') {
      locale = 'en';
    } else if (e.key.toLowerCase() == 'h') {
      locale = 'ru';
    } else {
      document.addEventListener('keydown', changelang);
    }
    console.log(e);
    console.log(locale);
    if (locale != undefined) {
      usernames = setName();
      console.log(usernames);
      username = usernames.firstname + ' ' + usernames.lastname;
      document.getElementById('rt').innerHTML = "";
      document.getElementById('rm').innerHTML = "";
      document.getElementById('rb').innerHTML = "";
      document.getElementById('lang').innerHTML = "";

//      countdown();
      createpersona();
    }
  }
}

// 2. Poetry bank rules
function countdown() {
  if (locale !== undefined) {
    setSession();
  }
  document.addEventListener('keydown', cancel);
  hide(['lang']);
  resetInnerHTML(['rt', 'rm', 'rb']);
  stage = 'countdown';
  currentParams = "";

  document.getElementById('countdown-text').innerHTML = lang.countdown[locale];
  document.getElementById('countdown').style.display = 'block';

  currentCounter = 8;
  currentTimeout = setTimeout(counter, 4000);
}

// 2.1 Countdown
function counter() {
  stage = 'counter';
  currentParams = "";
  document.getElementById('countdown').style.display = 'block';
  document.getElementById('timer').style.display = 'block';
  
  if (currentCounter != 0) {
    currentInterval = setInterval(() => {
      beep.pause();
      clearInterval(currentInterval);
      currentCounter--;
      if (currentCounter - 1 <= 3 && currentCounter - 1 >= 0) {
        if (currentCounter - 1 == 0) {
          beep.currentTime = 6.5;
        } else {
          beep.currentTime = 1;
        }
        beep.play();
      }
      document.getElementById('timer').innerHTML = currentCounter - 1;
      counter();
    }, 1000);
  } else {
    clearInterval(currentInterval);
    bell.play();
    currentCounter = undefined;
    insertcard();
  }
}

// 2.2 Insert card
function insertcard() {
  bell.pause();
//  bell.play();
  hide(['timer']);
  usernames = setName();
  username = usernames.firstname + ' ' + usernames.lastname;
  stage = 'insertcard';
  currentParams = "";

  document.getElementById('countdown').style.display = 'block';
  document.getElementById('countdown-text').innerHTML = 
     lang.insert_card["et"]+"<br />"+
     lang.insert_card["en"]+"<br />"+
     lang.insert_card["ru"]+"<br />"     ;
  document.addEventListener('keydown', checkcard);
}

function checkcard(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', checkcard);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'z') {
       // createpersona();
         document.getElementById('countdown-text').innerHTML="";
         page_choose_language();
      } else {
        document.addEventListener('keydown', checkcard);
      }
    }
  }
}

//2a
function page_choose_language(){
   document.getElementById('lang').innerHTML=lang.choose_language["et"]+"<br />"+lang.choose_language["en"]+"<br />"+lang.choose_language["ru"];
  document.addEventListener('keydown', changelang);

  document.getElementById('rt').innerHTML = "Eesti";
  document.getElementById('rm').innerHTML = "English";
  document.getElementById('rb').innerHTML = "Русский";
  document.getElementById('lang').style.display = 'block';

}

// 3. Create a better persona
function createpersona() {
  bell.pause();
  bell.play();
  hide(['countdown']);

  stage = 'createpersona';
  currentParams = currentParams === 5 ? 5 : "";

  document.getElementById('persona-text').innerHTML = lang.persona[locale];
  document.getElementById('persona').style.display = 'block';

  document.addEventListener('keydown', insertnumber);
  if (currentParams === 5) {
    currentTimeout = setTimeout(newname, 1000);
  }
}

function insertnumber(e) {
  if (locale !== undefined) {
    setSession();
  }
  if (isFinite(e.key)) {
    for (let i = 1; i < 6; i++) {
      currentParams = i;
      if (document.getElementById('n' + i).innerHTML === "") {
        document.getElementById('n' + i).innerHTML = e.key;

        if (i === 5) {
          currentTimeout = setTimeout(newname, 1000);
        }
        break;
      }
    }
  }
}

// 4. Choice of name
function newname() {
  bell.pause();
  bell.play();
  currentTimeout = undefined;
  document.removeEventListener('keydown', insertnumber);
  hide(['persona']);

  stage = 'newname';
  currentParams = "";

  generateName();
}

// Name generation animation
function generateName() {
  if (!bell.play()) {
    bell.play();
  }
  stage = 'generateName';
  currentParams = "";
  document.getElementById('newname').style.display = 'block';

  nameCounter--;
  let firstNames = shuffle(firstnames[locale].split(';'));
  let lastNames = shuffle(lastnames[locale].split(';'));
  const randomFirst = Math.floor(Math.random() * firstNames.length);
  const randomLast = Math.floor(Math.random() * lastNames.length);
  if (nameCounter <= 0) {
    document.getElementById('newname').innerHTML = 
    lang.newname[locale] + '<span class="newname-name">' + usernames.firstname + ' ' + usernames.lastname + '</span>';
    clearTimeout(currentTimeout);
//    document.getElementById('rb').innerHTML = "OK";
    document.getElementById('rb').innerHTML = lang.forward[locale];
    document.addEventListener('keydown', checkNameOK);
    currentTimeout = setTimeout(() => { memorytest(1) }, 10000);
  } else {
    document.getElementById('newname').innerHTML = 
    lang.newname[locale] + '<span class="newname-name">' + firstNames[randomFirst] + ' ' + lastNames[randomLast] + '</span>';
    currentTimeout = setTimeout(generateName, 80);
  }
}

function checkNameOK(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', checkNameOK);
  if (!sessionMessage) {
    console.log(e);
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'h' || e.key.toLowerCase() == 'r') {
        clearTimeout(currentTimeout);
        memorytest(1);
      } else {
        document.addEventListener('keydown', checkNameOK);
      }
    }
  }
}

// 5. Memory testing + 5.1.1 Poem
function memorytest(n) {
  bell.pause()
  bell.currentTime = 0;
  document.removeEventListener('keydown', checkNameOK);
  currentTimeout = undefined;
  hide(['newname']);
  document.getElementById('memorytest-empty').style.display = 'none';
  resetInnerHTML(['rb']);
  stage = 'memorytest';
  currentParams = n;
  document.getElementById('memorytest').style.display = 'flex';
  document.getElementById('memorytest-text').classList.add('small-text', 'italic');
  n == 1 ?
  document.getElementById('memorytest-text').innerHTML = lang.memory1[locale] + username + lang.memory2[locale]
  : document.getElementById('memorytest-text').innerHTML = lang.tryagain[locale];
  document.getElementById('memorytest-poem').innerHTML = memoryPoems[n][locale];
  document.getElementById('rb').innerHTML = lang.forward[locale];
  document.addEventListener('keydown', checkForward);
  document.getElementById('memorytest-poem').style.display = 'block';

  currentTimeout = setTimeout(() => { memoryquestions(n) }, 50000);

}

function checkForward(e) {
  if (locale !== undefined) {
    setSession();
  }
  let n = currentParams;
  document.removeEventListener('keydown', checkForward);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'h') {
        clearTimeout(currentTimeout);
        memoryquestions(n);
      } else {
        document.addEventListener('keydown', checkForward);
      }
    }
  }
}

// 5.1.2 Questions
function memoryquestions(n) {
  currentTimeout = undefined;
  document.removeEventListener('keydown', checkForward);
  resetInnerHTML(['rb']);
  hide(['memorytest-poem']);
  document.getElementById('memorytest-empty').style.display = 'block';
  stage = 'memoryquestions';
  currentParams = n;
  document.getElementById('middle').classList.add('flexstart');
  document.getElementById('memorytest-text').classList.remove('small-text', 'italic');
  document.getElementById('memorytest-text').classList.add('margintop');
  //document.getElementById('memorytest-empty').style.display = 'block';
  document.getElementById('memorytest').style.display = 'block';
  

  let bank;
  if (currentBank != undefined) {
    bank = currentBank;
  } else {
    bank = shuffle(memoryQuestions[n][locale].answers);
  }
  currentBank = bank;
  if(n==1){
    currentTimeout = setTimeout(() => {     document.removeEventListener('keydown', checkAnswer(1)); }, 2000);
  }
  
  document.getElementById('memorytest-text').innerHTML = memoryQuestions[n][locale].question;
  if(locale != "ru"){
    document.getElementById('lt').innerHTML = "<span>A) " + bank[0]["text"] + "</span><input type='hidden' value='" + bank[0]["correct"] + "' id='answer0'>";
    document.getElementById('lm').innerHTML = "<span>B) " + bank[1]["text"] + "</span><input type='hidden' value='" + bank[1]["correct"] + "' id='answer1'>";
    document.getElementById('rt').innerHTML = "<span>C) " + bank[2]["text"] + "</span><input type='hidden' value='" + bank[2]["correct"] + "' id='answer2'>";
    document.getElementById('rm').innerHTML = "<span>D) " + bank[3]["text"] + "</span><input type='hidden' value='" + bank[3]["correct"] + "' id='answer3'>";
  } else {
    document.getElementById('lt').innerHTML = "<span>А) " + bank[0]["text"] + "</span><input type='hidden' value='" + bank[0]["correct"] + "' id='answer0'>";
    document.getElementById('lm').innerHTML = "<span>Б) " + bank[1]["text"] + "</span><input type='hidden' value='" + bank[1]["correct"] + "' id='answer1'>";
    document.getElementById('rt').innerHTML = "<span>В) " + bank[2]["text"] + "</span><input type='hidden' value='" + bank[2]["correct"] + "' id='answer2'>";
    document.getElementById('rm').innerHTML = "<span>Г) " + bank[3]["text"] + "</span><input type='hidden' value='" + bank[3]["correct"] + "' id='answer3'>";
  }

  document.addEventListener('keydown', checkAnswer(n));

  console.log(n);
}

function checkAnswer(n) {
  if (locale !== undefined) {
    setSession();
  }
  return function answerCheck(e) {
    console.log(e);
    document.removeEventListener('keydown', checkAnswer(n));
    document.removeEventListener('keydown', answerCheck);
    if (!sessionMessage) {
      if (e.key.toLowerCase() != 'p') {
        currentBank = undefined;
        console.log("checking...");
          if (checkAnswerValue(e.key.toLowerCase())) { //n vastab sellele, mitmes kord me vastame
            document.getElementById('memorytest-empty').style.display = "none";
            if (n == 1 || n == 2) {
              resetClassNames(n, 'tone');
            } else if (n == 3) {
              resetClassNames(n, 'thanks');
            }
          } else if ((e.key.toLowerCase() == 'b' || e.key.toLowerCase() == 'c' || e.key.toLowerCase() == 'f' || e.key.toLowerCase() == 'g')  && !checkAnswerValue(e.key.toLowerCase())) {
            document.getElementById('memorytest-empty').style.display = "none";
            resetClassNames(n);
          } else {
            document.addEventListener('keydown', checkAnswer(n));
          }
        
        
      }
    }
  }
}

// Helper function to determine whether chosen answer is true or false
function checkAnswerValue(key) {
  if (key == 'b' && document.getElementById('answer0').value == 'true') {
    return true;
  } else if (key == 'b' && document.getElementById('answer0').value == 'false') {
    return false;
  }

  if (key == 'c' && document.getElementById('answer1').value == 'true') {
    return true;
  } else if (key == 'c' && document.getElementById('answer1').value == 'false') {
    return false;
  }

  if (key == 'd' && document.getElementById('answer2').value == 'true') {
    return true;
  } else if (key == 'd' && document.getElementById('answer2').value == 'false') {
    return false;
  }

  if (key == 'f' && document.getElementById('answer2').value == 'true') {
    return true;
  } else if (key == 'f' && document.getElementById('answer2').value == 'false') {
    return false;
  }

  if (key == 'g' && document.getElementById('answer3').value == 'true') {
    return true;
  } else if (key == 'g' && document.getElementById('answer3').value == 'false') {
    return false;
  }
}

function resetClassNames(n, move) {
  document.getElementById('middle').classList.remove('flexstart');
  document.getElementById('memorytest-text').classList.remove('margintop');
  resetInnerHTML(['lt', 'lm', 'lb', 'rt', 'rm', 'rb']);
  if (move == 'tone') {
    yay();
    correct(n);
  } else if (move == 'thanks') {
    yay();
    thankyou();
  } else {
    if (n <= 2) {
      nay();
      incorrect(n + 1);
    } else {
      nay();
      failtest();
    }
  }
}

function correct(n) {
  stage = 'correct';
  currentParams = n;
  document.getElementById('memorytest').style.display = 'block';
  document.getElementById('memorytest-text').innerHTML = lang.correct[locale];

  currentTimeout = setTimeout(() => { toneQuestions(n) }, 3000);
}

function incorrect(n) {
  stage = 'incorrect';
  currentParams = n;
  document.getElementById('memorytest').style.display = 'block';
  document.getElementById('memorytest-text').innerHTML = lang.incorrect[locale];

  currentTimeout = setTimeout(() => { memorytest(n) }, 3000);
}

// 5.1.3 Choose tone of colour
function toneQuestions(n) {
  hide(['memorytest']);

  stage = 'toneQuestions';
  currentParams = n;
  document.getElementById('tonetest').innerHTML = lang.tonetest[n][locale];
  document.getElementById('tonetest').style.display = 'block';

  colour = 'p' + n;
  document.getElementById('ru').classList.add('colour', colour + '1-' + locale);
  document.getElementById('rt').classList.add('colour', colour + '2-' + locale);
  document.getElementById('rm').classList.add('colour', colour + '3-' + locale);
  document.getElementById('rb').classList.add('colour', colour + '4-' + locale);

  document.addEventListener('keydown', checkTone);
}

function checkTone(e) {
  if (locale !== undefined) {
    setSession();
  }
  console.log(e);
  document.removeEventListener('keydown', checkTone);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'e' || e.key.toLowerCase() == 'f' || e.key.toLowerCase() == 'g' || e.key.toLowerCase() == 'h') {
        yay();
        thankyou();
      } else {
        document.addEventListener('keydown', checkTone);
      }
    }
  }
}

// 5.1.4 Thank you
function thankyou() {
  hide(['memorytest']);
  stage = 'thankyou';
  currentParams = "";
  if (colour) {
    document.getElementById('ru').classList.remove('colour', colour + '1-' + locale);
    document.getElementById('rt').classList.remove('colour', colour + '2-' + locale);
    document.getElementById('rm').classList.remove('colour', colour + '3-' + locale);
    document.getElementById('rb').classList.remove('colour', colour + '4-' + locale);
  }
  document.getElementById('tonetest').style.display = 'block';
  document.getElementById('tonetest').innerHTML = lang.correct[locale];

  currentTimeout = setTimeout(robot, 3000);
}

// 5.2 All three stages incorrect
function failtest() {
  stage = 'failtest';
  currentParams = "";
  document.getElementById('memorytest').style.display = 'block';
  document.getElementById('memorytest-text').innerHTML = lang.failtest[locale];
  document.addEventListener('keydown', checkOK);
}

function checkOK(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', checkOK);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'r') {
        robot();
      } else {
        document.addEventListener('keydown', checkOK);
      }
    }
  }
}

// 6. Prove you are (not) a robot
function robot() {
  music.pause();
  music.play();
  currentTimeout = undefined;
  hide(['memorytest', 'tonetest']);
  stage = 'robot';
  currentParams = "";

  document.getElementById('robottext').innerHTML = lang.prove[locale];
  document.getElementById('robot').style.display = 'block';

  document.getElementById('lm').innerHTML = lang.proveyes[locale];
  document.getElementById('rm').innerHTML = lang.proveno[locale];

  document.addEventListener('keydown', checkrobot);
}

function checkrobot(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', checkrobot);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'c') {
        ishuman(1);
      } else if (e.key.toLowerCase() == 'g') {
        isrobot(1);
      } else {
        document.addEventListener('keydown', checkrobot);
      }
    }
  }
}

// Helper function for countdowns
function timeCounter() {
  document.getElementById('robot-counter').style.display = 'block';
  
  if (currentCounter != 0) {
    currentInterval = setInterval(() => {
      beep.pause();
      clearInterval(currentInterval);
      currentCounter--;
      document.getElementById('robot-counter').innerHTML = currentCounter - 1;
      if (currentCounter - 1 <= 10 && stage == 'inkstains') {
        document.getElementById('robot-counter').classList.add('danger');
      }
      if (currentCounter - 1 <= 3 && currentCounter - 1 >= 0) {
        if (currentCounter - 1 == 0) {
          beep.currentTime = 6.5;
        } else {
          beep.currentTime = 1;
        }
        beep.play();
      }
      timeCounter();
    }, 1000);

  } else {
    clearInterval(currentInterval);
    currentCounter = undefined;
    document.getElementById('robot-counter').classList.remove('danger');
    document.getElementById('robot-counter').style.display = 'none';
    resetInnerHTML(['robot-counter']);
    counterEnd();
  }
}

function counterEnd() {
  currentCounter = undefined;
  beep.pause();
  if (stage == 'inkstains') {
    document.removeEventListener('keydown', checkInk);
    inkstains({char: currentParams.char, n: currentParams.n + 1, timeout: true});
  } else if (stage == 'isrobot') {
    isrobot(lastN + 1, true);
  } else if (stage == 'robotCount') {
    if (lastN >= 3) {
      robotink({n: 1});
    } else {
      robotCount(lastN + 1, true);
    }
  } else if (stage == 'robotink') {
    if (lastN < 6) {
      robotink({n: lastN + 1, correct: lastN + 1 == 6 ? "incorrect" : "correct", out: true});
    } else {
      printrobot();
    }
  }
}

// 6.A You are not a robot
function ishuman(n) {
  resetInnerHTML(['lm', 'rm']);
  stage = 'ishuman';
  currentParams = n;
  if (n == 11) {
    attempts++;
    actuallyrobot();
  } else {
    if (attempts <= 1) {
      document.getElementById('robot').style.display = 'block';
      document.getElementById('robottext').innerHTML = lang.human[n][locale];
      document.addEventListener('keydown', checkroad(n));
    } else {
      sorry();
    }
  }
}

function checkroad(n) {
  if (locale !== undefined) {
    setSession();
  }
  return function roadCheck(e) {
    document.removeEventListener('keydown', checkroad(n));
    document.removeEventListener('keydown', roadCheck);
    if (!sessionMessage) {
      if (e.key.toLowerCase() != 'p') {
        if (e.key == '8') {
          yay();
          inkstains({char: 'e', n: 1, timeout: false});
        } else if (isNaN(e.key)) {
          document.addEventListener('keydown', checkroad(n));
        }else {
          nay();
          ishuman(n + 1);
        }
      }
    }
  }
}

function inkstains(params) {
  clearInterval(currentInterval);
  clearTimeout(currentTimeout);
  resetInnerHTML(['robotanswers']);
  stage = 'inkstains';
  currentParams = {char: params.char, n: params.n, timeout: params.timeout, correct: params.correct};
  let bank;
  if (currentBank != undefined) {
    bank = currentBank;
  } else {
    bank = shuffle(lang.inkoptions[params.char]);
  }
  currentBank = bank;
  if (params.n > bank.length) {
    params.n = 1;
    currentParams = {char: params.char, n: params.n, timeout: params.timeout, correct: params.correct};
  }
  document.getElementById('robot').style.display = 'block';
  if (params.timeout) {
    document.getElementById('robottext').innerHTML = lang.timeout[locale];
    params.timeout = false;
    currentParams = {char: params.char, n: params.n, timeout: params.timeout, correct: params.correct};
  } else {
    document.getElementById('robottext').innerHTML = lang.time[locale] + ':';
  }
  if (!params.timeout) {
    document.getElementById('robotquestion').innerHTML = (
      params.correct ? lang[params.correct][locale] + "<br>" + 
      bank[params.n - 1].question[locale] : bank[params.n - 1].question[locale]
    );
  } else {
    document.getElementById('robotquestion').innerHTML = bank[params.n - 1].question[locale];
  }
  document.getElementById('robotimage').src = 'assets/img/' + bank[params.n - 1].image + '.jpg';
  document.getElementById('robotimage').style.display = 'block';
  document.getElementById('robottest').style.display = 'block';
  document.getElementById('robotanswers').classList.remove('two-col');

  if (currentCounter == undefined || currentCounter <= 0) {
    currentCounter = 31;
  }

  if (currentCounter - 1 <= 10) {
    document.getElementById('robot-counter').classList.add('danger');
  } else {
    document.getElementById('robot-counter').classList.remove('danger');
  }
  document.getElementById('robot-counter').innerHTML = currentCounter - 1;
  currentTimeout = timeCounter();

  if (bank[params.n - 1][locale].length > 4) {
    document.getElementById('robotanswers').classList.add('two-col');
  }
  for (i = 0; i < bank[params.n - 1][locale].length; i++) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(bank[params.n - 1][locale][i].text);
    node.setAttribute("data-correct", bank[params.n - 1][locale][i].correct);
    node.id = "ans" + [i + 1];
    node.appendChild(textnode);
    document.getElementById('robotanswers').appendChild(node);
  }
  lastChar = params.char;
  lastN = params.n;
  document.addEventListener('keydown', checkInk);
}

function checkInk(e) {
  document.removeEventListener('keydown', checkInk);
  let char = lastChar;
  let n = lastN;
  let count = currentBank[lastN - 1][locale].length;
  if (locale !== undefined) {
    setSession();
  }
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key >= 1 && e.key <= count) {
        if (document.getElementById('ans' + e.key).getAttribute("data-correct") == "true") {
          yay();
          if (char === 'e') {
            currentBank = undefined;
            currentCounter = undefined;
            document.getElementById('robot-counter').classList.remove('danger');
            inkstains({char: 'f', n: 1, timeout: false, correct: "correct"});
          } else if (char === 'f') {
            if (n == 1) {
              currentCounter = undefined;
              document.getElementById('robot-counter').classList.remove('danger');
              inkstains({char: 'f', n: 2, timeout: false, correct: "correct"});
            } else {
              currentBank = undefined;
              e.key = null;
              choosePackage();
            }
          }
        } else {
          nay();
          if (char === 'e') {
            if (n == 1) {
              currentCounter = undefined;
              document.getElementById('robot-counter').classList.remove('danger');
              inkstains({char: 'e', n: 2, timeout: false, correct: "incorrect"});
            } else {
              attempts++;
              actuallyrobot();
            }
          } else if (char === 'f') {
            if (n == 1) {
              currentCounter = undefined;
              document.getElementById('robot-counter').classList.remove('danger');
              inkstains({char: 'f', n: 2, timeout: false, correct: "incorrect"});
            } else {
              currentBank = undefined;
              attempts++;
              actuallyrobot();
            }
          }
        }
      } else {
        document.addEventListener('keydown', checkInk);
        return;
      }
    }
  }
}

function actuallyrobot() {
  clearInterval(currentInterval);
  hide(['robottest', 'robot-counter']);
  resetInnerHTML(['robotanswers', 'robotimage', 'robotquestion', 'robot-counter']);
  stage = 'actuallyrobot';
  currentParams = "";
  if (attempts <= 1) {
    document.getElementById('robot').style.display = 'block';
    document.getElementById('robottext').innerHTML = lang.nothuman[locale];
    currentTimeout = setTimeout(() => { isrobot(1); }, 3000);
  } else {
    sorry();
  }
}

// 6.B You are a robot
function isrobot(n, out) {
  clearInterval(currentInterval);
  clearTimeout(currentTimeout);
  resetInnerHTML(['lm', 'rm']);
  stage = 'isrobot';
  currentParams = n + ", " + out;
  lastN = n;
  let timeout = out;

  if (n == 5) {
    attempts++;
    actuallyHuman();
  } else {
    if (attempts <= 1) {
      document.getElementById('robotimage').src = 'assets/img/b' + n +'.jpg';
      document.getElementById('robot').style.display = 'block';
      if (timeout) {
        document.getElementById('robottext').innerHTML = lang.timeout[locale];
        timeout = false;
        currentParams = n + ", " + timeout;
      } else {
        document.getElementById('robottext').innerHTML = lang.time[locale] + ':';
      }
      document.getElementById('robotquestion').innerHTML = lang.robot[locale];
      document.getElementById('robottest').style.display = 'block';
  
      if (currentCounter == undefined || currentCounter <= 0) {
        currentCounter = 8;
      }
      document.getElementById('robot-counter').innerHTML = currentCounter - 1;
      currentTimeout = timeCounter();
  
      document.addEventListener('keydown', checknumber);
    } else {
      sorry();
    }
  }
}

function checknumber(e) {
  if (locale !== undefined) {
    setSession();
  }
  let n = lastN;
  document.removeEventListener('keydown', checknumber);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (isNaN(e.key)) {
        document.addEventListener('keydown', checknumber);
      } else {
        if (n == 1) {
          if (e.key == 5) {
            yay();
            robotCount(1);
          } else {
            currentCounter = 8;
            nay();
            isrobot(n + 1);
          }
        } else if (n == 2) {
          if (e.key == 4) {
            yay();
            robotCount(1);
          } else {
            currentCounter = 8;
            nay();
            isrobot(n + 1);
          }
        } else if (n == 3) {
          if (e.key == 3) {
            yay();
            robotCount(1);
          } else {
            currentCounter = 8;
            nay();
            isrobot(n + 1);
          }
        } else if (n == 4) {
          if (e.key == 2) {
            yay();
            robotCount(1);
          } else {
            nay();
            attempts++;
            actuallyHuman();
          }
        }
      }
    }
  }
}

function robotCount(n, out) {
  currentCounter = 8;
  console.log("robotCOUNT");
  clearInterval(currentInterval);
  clearTimeout(currentTimeout);
  stage = 'robotCount';
  currentParams = n + ", " + out;
  lastN = n;
  let timeout = out;
  document.getElementById('robotimage').src = 'assets/img/c' + n +'.jpg';
  document.getElementById('robot').style.display = 'block';
  if (timeout) {
    document.getElementById('robottext').innerHTML = lang.timeout[locale];
    timeout = false;
    currentParams = n + ", " + timeout;
  } else {
    document.getElementById('robottext').innerHTML = lang.time[locale] + ':';
  }
  document.getElementById('robotquestion').innerHTML = lang.robotCount[n][locale];
  document.getElementById('robottest').style.display = 'block';

  if (currentCounter == undefined || currentCounter <= 0) {
    currentCounter = 8;
  }
  document.getElementById('robot-counter').innerHTML = currentCounter - 1;
  currentTimeout = timeCounter();

  document.addEventListener('keydown', checkRobotCount);
}

function checkRobotCount(e) {
  if (locale !== undefined) {
    setSession();
  }
  console.log("owo");
  let n = lastN;
  document.removeEventListener('keydown', checkRobotCount);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (isNaN(e.key)) {
        document.addEventListener('keydown', checkRobotCount);
        console.log("nan");
      } else {
        if (n == 1) {
          if (e.key == 5) {
            yay();
            robotink({n: 1});
          } else {
            currentCounter = 8;
            nay();
            robotCount(n + 1);
          }
        } else if (n == 2) {
          if (e.key == 3) {
            yay();
            robotink({n: 1});
          } else {
            currentCounter = 8;
            nay();
            robotCount(n + 1);
          }
        } else if (n == 3) {
          if (!isNaN(e.key)) {
            yay();
            robotink({n: 1});
          } else {
            nay();
            attempts++;
            actuallyHuman();
          }
        }
      }
    }
  }
}

function robotink(params) {
  currentCounter = 8;
  console.log("robotink");
  clearInterval(currentInterval);
  clearTimeout(currentTimeout);
  stage = 'robotink';
  currentParams = {n: params.n, correct: params.correct, out: params.out};
  lastN = params.n;
  let timeout = params.out;
  resetInnerHTML(['robotanswers', 'robotquestion']);
  document.getElementById('robotimage').src = 'assets/img/r' + params.n + '.jpg';
  document.getElementById('robot').style.display = 'block';
  if (timeout) {
    document.getElementById('robottext').innerHTML = lang.timeout[locale];
  } else {
    document.getElementById('robottext').innerHTML = lang.time[locale] + ':';
  }

  if (!timeout) {
    document.getElementById('robotquestion').innerHTML = (
      params.correct ? lang[params.correct][locale] + "<br>" + 
      lang.roboinkoptions[params.n][locale] : lang.roboinkoptions[params.n][locale]
    );
  } else {
    document.getElementById('robotquestion').innerHTML = lang.roboinkoptions[params.n][locale];
  }
  document.getElementById('robottest').style.display = 'block';
  lang.roboinkoptions[params.n].answers[locale].forEach(el => {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(el);
    node.appendChild(textnode);
    document.getElementById('robotanswers').appendChild(node);
  })

  timeout = false;
  params.out = timeout;
  currentParams = {n: params.n, correct: params.correct, out: params.out};

  if (currentCounter == undefined || currentCounter <= 0) {
    currentCounter = 10;
  }
  document.getElementById('robot-counter').innerHTML = currentCounter - 1;
  currentTimeout = timeCounter();

  document.addEventListener('keydown', checkinknumber);
}

function checkinknumber(e) {
  if (locale !== undefined) {
    setSession();
  }
  let n = lastN;

  document.removeEventListener('keydown', checkinknumber);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (n == 1) {
        if (e.key == '1' || e.key == '2') {
          currentCounter = 8;
          yay();
          robotink({n: 4, correct: "correct", out: false});
        } else if (e.key == '3') {
          currentCounter = 8;
          nay();
          robotink({n: n + 1, correct: "incorrect", out: false});
        } else {
          document.addEventListener('keydown', checkinknumber);
        }
      } else if (n == '2') {
        if (e.key == '2' || e.key == '3') {
          currentCounter = 8;
          yay();
          robotink({n: 4, correct: "correct", out: false});
        } else if (e.key == '1') {
          currentCounter = 8;
          nay();
          robotink({n: n + 1, correct: "incorrect", out: false});
        } else {
          document.addEventListener('keydown', checkinknumber);
        }
      } else if (n == '3') {
        if (e.key == '1' || e.key == '2' || e.key == '3') {
          currentCounter = 8;
          yay();
          robotink({n: 4, correct: "correct", out: false});
        } else {
          document.addEventListener('keydown', checkinknumber);
        }
      } else if (n == '4') {
        if (e.key == '2') {
          currentCounter = 8;
          yay();
          robotink({n: n + 1, correct: "correct", out: false});
        } else if (e.key == '1') {
          currentCounter = 8;
          nay();
          robotink({n: n + 1, correct: "incorrect", out: false});
        } else {
          document.addEventListener('keydown', checkinknumber);
        }
      } else if (n == '5') {
        if (e.key == '1') {
          currentCounter = 8;
          yay();
          robotink({n: n + 1, correct: "correct", out: false});
        } else if (e.key == '2' || e.key == '3') {
          currentCounter = 8;
          nay();
          robotink({n: n + 1, correct: "incorrect", out: false});
        } else {
          document.addEventListener('keydown', checkinknumber);
        }
      } else if (n == '6') {
        if (e.key == '3') {
          currentCounter = 8;
          yay();
          printrobot();
        } else if (e.key == '1' || e.key == '2') {
          currentCounter = 8;
          nay();
          attempts++;
          actuallyHuman();
        } else {
          document.addEventListener('keydown', checkinknumber);
        }
      }
    }
  }
}

function actuallyHuman() {
  clearInterval(currentInterval);
  clearTimeout(currentTimeout);
  hide(['robottest', 'robot-counter']);
  resetInnerHTML(['robotanswers', 'robotimage', 'robotquestion', 'robot-counter']);
  stage = 'actuallyHuman';
  currentParams = "";
  if (attempts <= 1) {
    document.getElementById('robot').style.display = 'block';
    document.getElementById('robottext').innerHTML = lang.notrobot[locale];
    currentTimeout = setTimeout(() => { ishuman(1); }, 3000);
  } else {
    sorry();
  }
}

// 7. Choose package
function choosePackage() {
  clearInterval(currentInterval);
  resetInnerHTML(['package-choice', 'robot-counter']);
  hide(['robot', 'robot-counter']);
  stage = 'choosePackage';
  currentParams = "";
  document.getElementById('package-text').innerHTML = lang.ishuman[locale] + '<br><br>' + lang.package[locale];
  lang.package_choice[locale].forEach(el => {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(el);
    node.appendChild(textnode);
    document.getElementById('package-choice').appendChild(node);
  });
  document.getElementById('package').style.display = 'block';
  document.addEventListener('keydown', choosePoemType);
}

function choosePoemType(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', choosePoemType);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || (locale == 'et' && e.key == 5)) {
        printpoem(e.key);
      } else {
        document.addEventListener('keydown', choosePoemType);
      }
    }
  }
}

// 8. Print
// If human
function printpoem(risk) {
  hide(['package']);
  stage = 'printpoem';
  currentParams = risk;
  document.getElementById('printpoem').innerHTML = lang.print[locale] + lang.package_choice[locale][risk - 1];
  document.getElementById('printpoem').style.display = 'block';
  document.getElementById('ru').innerHTML = lang.print2[locale];
  //document.getElementById('rm').innerHTML = lang.print2[locale];
  document.addEventListener('keydown', removeCard(risk));
}

// If robot
function printrobot() {
  clearInterval(currentInterval);
  hide(['robot', 'robot-counter']);
  resetInnerHTML(['lm', 'rm', 'robot-counter']);
  stage = 'printrobot';
  currentParams = "";
  const code = document.querySelector('video');
  code.play();
  document.getElementById('code').style.display = 'block';
  currentTimeout = setTimeout(() => { roboprint() }, 10000);
}

function roboprint() {
  clearTimeout(currentTimeout);
  const code = document.querySelector('video');
  code.pause();
  hide(['code']);
  stage = 'roboprint';
  currentParams = "";
  let risk = 4;
  document.getElementById('printpoem').innerHTML = 
    lang.isrobot[locale] + '<br><br>' + lang.print[locale] + lang.package_choice[locale][risk - 1];
  document.getElementById('printpoem').style.display = 'block';
  // currentTimeout = setTimeout(() => { print(risk) }, 1500);
  document.getElementById('ru').innerHTML = lang.print2[locale];
  document.addEventListener('keydown', removeCard(risk));
  // currentTimeout = setTimeout(() => { print(risk) }, 1500);
}

// If neither human nor robot
function sorry() {
  hide(['robot']);
  resetInnerHTML(['lm', 'rm']);
  stage = 'sorry';
  currentParams = "";
  const max = locale == 'et' ? 5 : 4;
  let risk = Math.floor(Math.random() * max + 1);
  document.getElementById('printpoem').innerHTML = lang.sorry[locale];
  document.getElementById('printpoem').style.display = 'block';
  document.getElementById('ru').innerHTML = lang.print2[locale];
  document.addEventListener('keydown', removeCard(risk));
}

function removeCard(risk) {
  console.log("removecard funktsioonis");
  if (locale !== undefined) {
    setSession();
  }
  return function card(e) {
    document.removeEventListener('keydown', removeCard(risk));
    document.removeEventListener('keydown', card);
    if (!sessionMessage) {
      if (e.key.toLowerCase() != 'p') {
//        if (e.key.toLowerCase() == 'g') {
        if (e.key.toLowerCase() == 'e') {
          print(risk);
        } else {
          document.addEventListener('keydown', removeCard(risk));
        }
      }
    }
  }
}

function print(risk) {
  music.pause();
  music.currentTime = 0;
  bell.pause();
  beep.pause();
  //resetInnerHTML võtab ära teksti üleval paremal oleva nupu juurest
  resetInnerHTML(['ru']);
  if (locale == 'et') {
    region = 'et-EE';
  } else if (locale == 'en') {
    region = 'en-GB';
  } else {
    region = 'ru-RU';
  }
  document.getElementById('printpoem').style.display = 'block';
  stage = 'print';
  currentParams = risk;
  cardSound[locale].play();
  document.getElementById('printpoem').innerHTML = lang.remove[locale];
  currentTimeout = blink(document.getElementById('printpoem'), 500, 0);
        //let risk = currentParams;
        let size = Object.keys(poems[risk][locale]).length;
        let r = Math.floor(Math.random() * size);
        let sisu=poems[risk][locale][r];
        console.log(sisu);
        sisu.poem = sisu.poem.replace("&nbsp;", "");
        console.log(sisu);
        sisu.poem = sisu.poem.replace("&nbsp;", "");
        sisu.author = sisu.author.replace('<span class="bold print-text-12">', "");
        sisu.author = sisu.author.replace("</span>", "");
        const d = new Date(Date.now()).toLocaleString(region);
        let fullDate = d.toString();
        let position = fullDate.search(",");
        let firstHalf = fullDate.slice(0, position);
        let secondHalf = fullDate.slice(position+1);
        let time = firstHalf + secondHalf;

        console.log(position);

        console.log(time);
        console.log(sisu);
//        fetch("/kirjuta?tekst="+risk+"ja"+size+"ja"+r).then(viit => viit.text()).then(vastus => alert(vastus));
        fetch("/kirjuta3", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"sisu":sisu, "kes": lang.memory1[locale] + " " + username, "juhis": lang.instruct[locale],
              "juhis2": lang.instructions[locale],
              "juhis3": lang.thanks[locale] + ' ' + lang.visit[locale],
            "aeg":time})
 //           body: JSON.stringify(sisu)
        }).then(viit => viit.text());
//.then(vastus => alert(vastus + 'hello'));
  // document.documentElement.requestFullscreen();
  // setPoem(locale, username, risk, r);
  // window.print();
  console.log('ootan checkcardi');
}
//Võta kaart teksti vilgutamise funktsioon
function blink(element, time, totalBlinks) {
  totalBlinks++;
  console.log(totalBlinks);
  element.style.visibility = 'hidden';
  setTimeout(() => {
    element.style.visibility = 'visible';
  }, time);
  setTimeout(() => {
    blink(element, time, totalBlinks);
  }, time * 2);
  if(totalBlinks > 8){
    location.reload();
  }
}

function checkCard(e) {
  if (locale !== undefined) {
    setSession();
  }
  document.removeEventListener('keydown', checkCard);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'e') {
	console.log('olen checkcardis');
  location.reload();
        let risk = currentParams;
        let size = Object.keys(poems[risk][locale]).length;
        let r = Math.floor(Math.random() * size);
        const location = window.location.href;
        const url = location.substring(0, location.length - 10);
        const address = url + 'poem.html?locale=' + locale + '&user=' + username + '&risk=' + risk + '&nr=' + r;
   //     window.open(address, 'poemWindow', 'width=270, height=522, left=0, top=0, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no');
	console.log('enne reloadi');	
	console.log('parast reloadi');   
	//document.addEventListener('keydown', endAll);
      } else {
        document.addEventListener('keydown', checkCard);
      }
    }
  }
}
/*function endAll(e) {
  console.log('olen endallis');
  document.removeEventListener('keydown', endAll);
  if (!sessionMessage) {
    if (e.key.toLowerCase() != 'p') {
      if (e.key.toLowerCase() == 'e') {
        V
      } else {
        document.addEventListener('keydown', endAll);
      }
    }
  }
}*/