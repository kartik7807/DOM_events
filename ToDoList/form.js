let btn=document.querySelector("button");
let ul=document.querySelector('ul');
let int=document.querySelector("input");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=int.value;

    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");


    item.appendChild(del);
    ul.appendChild(item);
    int.value="";


    ul.addEventListener("click", function(event){
        console.dir(event.target.nodeName);
        if (event.target.nadeName="BUTTON"){
            let listitem=event.target.parentElement;
            listitem.remove();
            console.log("deleted");

        }

    });

    // let delbt=document.querySelectorAll(".delete");
    // for(db of delbt){
    //     db.addEventListener("click", function(){
    //         let par=this.parentElement;
    //         par.remove();
    //     })
    // }

});