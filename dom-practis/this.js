let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");
let btn=document.querySelector("button");

function colorChange(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellow";
}

h1.addEventListener('click', colorChange );
h3.addEventListener('click', colorChange );
p.addEventListener('click', colorChange );
btn.addEventListener('click', colorChange );


