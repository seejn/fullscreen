let fullScreen = 0;
let imgFullScreen = 0;
let body = document.querySelector("#fullScreen");
let imgid = document.querySelector("#img"); 
body.addEventListener("click", ()=>
{
    fullscreen();
});
imgid.addEventListener("click", ()=>
{
    imgFullscreen();
});
function fullscreen()
{
    let elem = document.documentElement;
    if(fullScreen == 0)
    {
        if(elem.requestFullscreen)
            elem.requestFullscreen();
        else if(elem.webkitRequestFullscreen)
            elem.webkitRequestFullscreen();
        else if(elem.msRequestFullscreen)
            elem.msRequestFullscreen();
        fullScreen = 1;
    }   
    else if(fullScreen == 1)
    {
        if(document.exitFullscreen)
            document.exitFullscreen();
        else if(document.webkitexitFullscreen)
            document.webkitexitFullscreen();
        else if(document.msexitFullscreen)
            document.msexitFullscreen();
        fullScreen = 0;
    }      
}
function imgFullscreen()
{
    let img = document.querySelector("#img");
    if(imgFullScreen == 0)
    {
        if(img.requestFullscreen)
            img.requestFullscreen();
        else if(img.webkitRequestFullscreen)
            img.webkitRequestFullscreen();
        else if(img.msRequestFullscreen)
            img.msRequestFullscreen();
        imgFullScreen = 1;
    } 
    else if(imgFullScreen == 1)
    {
        if(document.exitFullscreen)
            document.exitFullscreen();
        else if(document.webkitexitFullscreen)
            document.webkitexitFullscreen();
        else if(document.msexitFullscreen)
            document.msexitFullscreen();
        imgFullScreen = 0;
    } 
}