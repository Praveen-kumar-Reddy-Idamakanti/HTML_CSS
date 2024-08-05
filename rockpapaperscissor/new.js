console.log("hello");
element=document.getElementById('user');
console.log(element);
document.getElementById('rockButton').onclick=function()
{   
    console.log("Hello");
    element.style.animation="none";
    element.style.background="center url(download.jpg) no-repeat ";

};
document.getElementById('paperButton').onclick=function()
{   
    console.log("Hello");
    element.style.animation="none";
    element.style.background=" center url(paperimage.jpg) no-repeat ";

};
document.getElementById('scissorButton').onclick=function()
{   
    console.log("Hello");
    element.style.animation="none";
    element.style.background=" center url(scissor.jpg) no-repeat ";

};

