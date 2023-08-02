var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var text = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = text;
    if (text == "Tire Minha Selfie") {
        speak();
        setTimeout(function () {
            takeSelfie();
            save();
        }, 5000);

    }
}
function speak() {
    var synth = window.speechSynthesis;
    var talk = "Tirando sua Selfie em 5 Segundos";
    var utterThis = new SpeechSynthesisUtterance(talk);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeSelfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';

    })
}
function save(){
    image= document.getElementById('selfieImage').src;
    document.getElementById("link").href=image;
       
    //click automatico
    document.getElementById("link").click();
}