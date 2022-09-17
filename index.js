let btn=document.getElementsByClassName('btn')[0]
let div=document.getElementsByClassName('hidediv')[0];
btn.addEventListener('click',(e)=>{
    if(div.style.display=='block'){
        div.style.display='none'
    }
    else{
        div.style.display='block'
    }
})