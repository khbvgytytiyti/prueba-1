const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click" ,function () {
    alert("tu eres una hermosura de mujer")
});

const noBtn = document.querySelector("#yesBtn");

noBtn.addEventListener("mousover" , function () { 
    const randomX = parseInt(math.random()*100);
    const randomY = parseInt(math.random()*100); 
    noBtn.stile.setProperty("top" ,randomY+"%");
    noBtn.stile.setProperty("left" ,randomX+"%"); 
    noBtn.stile.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})