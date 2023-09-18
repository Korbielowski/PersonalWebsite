# PersonalWebsite
#7CFEF0
#6BFFB8
#2CEAA3
#28965A
#2A6041
const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

const imageCarausel = document.querySelector('.image-carausel');

for(let i=0; i < 10; i++)
{

}

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

function animateCarausel()
{

}

function animateText()
{

}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char ===splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}


<img class="project-image" src="${project["image"]}" alt="${project["alt"]}">
    background-position: top;
    background-size: cover;
    transition: ease-in-out 8s;
    margin: 10px;
    padding: 10px;
    background-color: whitesmoke;
    border-radius: 20px;
    grid-area: image;
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    box-shadow: 0px 1px 6px grey;

    p {
    color: black;
    font-size: 3rem;
    text-align: left;
    line-height: 10vh;
}