let body=document.querySelector("body")
// let mouse=document.querySelector(".mouse")
body.addEventListener("mousemove",function(dets){
    // mouse.style.left=dets.x+"px"
    // mouse.style.top=dets.y+"px"
    // console.log(xpos);



    let spanel=document.createElement("span");
    var xpos=dets.offsetX
    var ypos=dets.offsetY; // Corrected typo here
    spanel.style.top=ypos+"px";
    spanel.style.left=xpos+"px";
    let random=Math.random()*100
    spanel.style.width=random+"px"
    spanel.style.height=random+"px"
    body.appendChild(spanel)
    setTimeout(()=>{
        spanel.remove();
    },3000)
})