const list =["pasta", "carne","frutta","pesce"];
const spesa = document.querySelector("ul");
let i = 0;
let listItem;
do{
    listItem = list[i];
    spesa.innerHTML +=`<li>${listItem}</li>`
    i++
}while(i < list.length)   
console.log(list)
