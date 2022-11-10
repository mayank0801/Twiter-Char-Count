const text=document.querySelector("#text");
const charCount=document.querySelector("#charCount");
const btnSubmit=document.querySelector("#submit");
const output=document.querySelector("#output");
var count=30;

function NofChar(){
    var currentCount=count-text.value.length;
    // count=count-currentCount;
    charCount.innerText=currentCount;
    if(currentCount<15)
    {
        charCount.style.color="yellow";
    }
    else if(currentCount<0){
        charCount.style.color="red";
        btnSubmit.style.display="none";
    }
}

function submitFun(){
    // console.log(text.innerText)
output.innerText=text.innerText;

}


text.addEventListener('input',NofChar);
btnSubmit.addEventListener("click",submitFun);