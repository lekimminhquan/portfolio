const intro = setTimeout(Intro,3950);

function Intro(){
   const y = document.getElementById("intro");
    y.remove()
    const x = document.getElementById("trangchus");
    x.classList.remove("home")
}

const nodeList = document.querySelectorAll('.menu__item');
const windonwlink = window.location.pathname;

nodeList.forEach(nodeLists => {
    if (nodeLists.href.includes(windonwlink))
    {
        nodeLists.classList.add("active");
    }
});


const pos = document.getElementById('menu').style.location;
console.log(pos);











