let button2 = document.getElementById("button2");
let content = document.getElementById("maincontent");
let button = document.getElementById("button");
let credits = document.getElementById("credits");

button.onclick = () => {
    credits.style.display = '';
    credits.showModal();
}

function button2click() {
    let pedro = new Audio();

    pedro.src = './media/pedro/pedro.mp3';
    pedro.play();
    pedro.loop = true;
    content.style.display = '';
    button2.style.display = 'none';

}