function textToAudio() {
    let msg = document.querySelector(".text").value;
    let lang = document.getElementById("languageSelect").value
    let speech = new SpeechSynthesisUtterance();
    speech.lang = lang;
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speechSynthesis.speak(speech);
    console.log(speech, msg, speech.lang);
}

