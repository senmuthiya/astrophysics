var i = 0;
var txt = `Providence Public Library -  Rhode Coders | Data Navigator | W3Schools.com | simplestepscode.com | Repl.it | https://medium.com/starts-with-a-bang/5-reasons-why-the-21st-century-will-be-the-best-one-ever-for-astrophysics-e84f0978282 | wikipedia.org | Typewriter sound Credit: SoundBible.com | Image Credit: nasa.gov`;
var speed = 50;
var a = new Audio('typewriter.mp3');

function Quotes() {
 
if (i < txt.length)
{
    a.play();
    if(a.currentTime > 16){
    a.pause();
    }
    
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(Quotes, speed);   
}

}



// var i = 0;
// var txt = `Providence Public Library -  Rhode Coders | Data Navigator | W3Schools.com | simplestepscode.com | Repl.it | Google Dictionary | https://medium.com/starts-with-a-bang/5-reasons-why-the-21st-century-will-be-the-best-one-ever-for-astrophysics-e84f0978282 | wikipedia.org | Image Credit: nasa.gov`;
// var speed = 50;

// function Quotes() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(Quotes, speed);
//   }  
// }

