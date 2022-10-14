function processMessage() {
    let canSend = true;

    let message = getMessage();

    if (canSend) {

    } else {

    }
}

function getMessage() {
    let optionalName = document.getElementById("optionalName").value;
    let messageForDrivers = document.getElementById("messageForDrivers").value;

    let message = {};

    if (optionalName.length > 0) {
        message.from = optionalName;
    } else {
        message.from = 'Anónimo';
    }

    if (messageForDrivers.length > 0) {
        message.message = messageForDrivers;
    } else {
        message.message = "Bueno, en realidad no os dice nada porque no ha puesto nada. Lo ha intentado que es lo importante.";
    }

    return message;
}

function speak() {
    let message = getMessage();


    let msg = new SpeechSynthesisUtterance();

    let voices = window.speechSynthesis.getVoices();

    msg.text = message.from + " dice " + message.message;
    msg.voice = voices[2];

    console.log(msg.text);

    window.speechSynthesis.speak(msg);
}

var noMessagePhrases = [
    "Nada, no os dice nada.",
    "Algo que solo existe en su cabeza.",
    "Bueno, en realidad no os dice nada."
];