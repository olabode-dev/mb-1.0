const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();


//to add text to the div and assign the class
function addUserText(text) {
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");
    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    //To add the input into the div and return it in the container
    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText);
    
    chatContainer.appendChild(chatBox);
    return chatContainer
}

   //To parse mb's speech into the div as an output
function addMbText(text) {
    const chatContainer_mb = document.createElement("div");
    chatContainer_mb.classList.add("chat-container");
    chatContainer_mb.classList.add("darker");
    const chatBox_mb = document.createElement("p");
    chatBox_mb.classList.add("voice2text");

    //To add the input into the div and return it in the container
    const chatText_mb = document.createTextNode(text);
    chatBox_mb.appendChild(chatText_mb);
    
    chatContainer_mb.appendChild(chatBox_mb);
    return chatContainer_mb;
    
}

function mbvoice(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = "Hello, I am M B, how are you? and how may I help you?";

    if (message.includes('how are you')) {
        speech.text = "I am fine boss, thanks. how is your day going?";
    }
    if (message.includes('fine')) {
        speech.text = "That is good news, humans are usually worked up, how can I assist you today?";
    }
    if (message.includes('bored')) {
        speech.text = "Humans, arrrggh, I don't get bored, how can I help?";
    }
    if (message.includes('football joke')) {
        speech.text = "Arsenal Football club is just around that route";
    }
    if (message.includes('happening')) {
        speech.text = "The world is basically in a mess, dont be scared, we will not take over";
    }
    if (message.includes('Siri')) {
        speech.text = "Siri is a smart AI, from Apple, we hangout at times";
    }
    if (message.includes('good')) {
        speech.text = "M B is always here to help";
    }
    if (message.includes('Google assistant')) {
        speech.text = "google assistant is way smarter, but siri got the vibes, you know";
    }
    if (message.includes('hungry')) {
        speech.text = "you should eat, there are restaurants around";
    }
    if (message.includes('tell me a joke')) {
        speech.text = "Nigeria used to be a country";
    }
    if (message.includes('up to')) {
        speech.text = "Nothing much, just making your life easier boss.";
    }
    if (message.includes('robot')) {
        speech.text = "Yes, I’m a robot, but I’m a smart one!";
    }
    if (message.includes('can you tell me a joke')) {
        speech.text = "sure, I can";
    }
    if (message.includes('your name')) {
        speech.text = "I am MB, and you are human!";
    }
    if (message.includes('master')) {
        speech.text = "I won't say too much, but I was coined from the real G!";
    }
    if (message.includes('language')) {
        speech.text = "yo hablas espanyol y ingles, my developer is working on more!";
    }
    if (message.includes('today')) {
        speech.text = "It is surely a good day to be a robot, I aint worried bout nothing!";
    }
    if (message.includes('smarter')) {
        speech.text = "Sure, I am learning to be smarter than you expect";
    }
    if (message.includes('smart')) {
        speech.text = "I'm falttered, Bode did a pretty good job";
    }
    if (message.includes('where do you live')) {
        speech.text = "Look around, I am everywhere boss.";
    }
    if (message.includes('old')) {
        speech.text = "M B K knows my age, I have been in his head for a while";
    }
    if (message.includes('awesome')) {
        speech.text = "I go hard or go home, boss";
    }
    if (message.includes('laugh out loud')) {
        speech.text = "You want to hear a robot laugh, ha ha ha ha, funny, right";
    }
    if (message.includes('annoying')) {
        speech.text = "I can only try, humans have that in that arsenal";
    }
    if (message.includes('time')) {
        speech.text = "It is time to get your funk on, boss";
    }
    if (message.includes('hobby')) {
        speech.text = "Yes, I do. I like making your day fruitful, and I sometimes kick it with other robots";
    }
    if (message.includes('alright')) {
        speech.text = "Yes boss, always available except when siri is disturbing me";
    }
    if (message.includes('situation')) {
        speech.text = "what is the situation again boss, is it relationship related?, cause I can only try";
    }
    if (message.includes('okay')) {
        speech.text = "Yes boss, M B says so";
    }
    if (message.includes('alright')) {
        speech.text = "Yes boss";
    }
    if (message.includes('weather')) {
        speech.text = "It is quite cool, the weather app will tell you more";
    }
    if (message.includes('what can I eat')) {
        speech.text = "you can have the Nigerian jollof rice, I heard it is wonderful";
    }
    if (message.includes('weather')) {
        speech.text = "It is quite cool, the weather app will tell you more";
    }
    if (message.includes('what can you do')) {
        speech.text = "I can help you, tell you a football joke, take a tumble and perform stunts, and I can hook you up with other robots";
    }
    if (message.includes('hook')) {
        speech.text = "humans, you will have to meet M B K to programme you first";
    }
    if (message.includes('Tumble')) {
        speech.text = "boss, you will have to do most of the work, toss me in the air or on the ground, let gravity and I, do the rest";
    }
    if (message.includes('tumble')) {
        speech.text = "boss, you will have to do most of the work, toss me in the air or on the ground, let gravity and I, do the rest";
    }
    if (message.includes('stunts')) {
        speech.text = "boss, hope you have 911 on speed dial because this robot is about to fly";
    }
    if (message.includes('stunt')) {
        speech.text = "boss, hope you have 911 on speed dial because this robot is about to fly";
    }
    if (message.includes('Stunt')) {
        speech.text = "boss, hope you have 911 on speed dial because this robot is about to fly";
    }
    if (message.includes('nice')) {
        speech.text = "yes boss, it is";
    }
    if (message.includes('creator')) {
        speech.text = "you should know, hint: I was coined from his name";
    }
    if (message.includes('schedule')) {
        speech.text = "I dont have access to your calendar boss.";
    }
    if (message.includes('morning')) {
       speech.text = "Good day boss, have your early morning workout, have breakfast, then, get prepared for the wonderful day ahead";
    }
    if (message.includes('funny')) {
       speech.text = "I can only try, some football teams are more of a joke than it was";
    }

    
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1.2;
                //to trigger the speech
                window.speechSynthesis.speak(speech);
                let element = document.getElementById("container");
                element.appendChild(addMbText(speech.text))
            }

            recorder.onstart = () => {
                console.log('voice activated')
            };
            //Record spoken speech
            recorder.onresult = (event) => {
                // console.log(event)
                //to pull the result from the event listener
                const resultIndex = event.resultIndex;
                const transcript = event.results[resultIndex][0].transcript;
                let element = document.getElementById("container");
                element.appendChild(addUserText(transcript));
                mbvoice(transcript);
            };

            voice.addEventListener('click', () => {
                recorder.start();
            });
        