/*****Visibilitychange Event******/
//Sekme görünür hale geldiğinde yada gizlendiğinde çalışan bir event.
//Bu kullanıcının şuan bizim sekmemizde mi değil mi onu anlıyor.


let seconds=10;

span=document.getElementById("seconds");

const counter=()=>{
    if(seconds>1){
        seconds -=1
        span.innerText=seconds
    }
    else{
        //yönlendirme
        clearInterval(countdown)
        window.location.href="https://prototurk.com"
    }
}

let countdown=setInterval(counter,1000)

document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="visible"){
        countdown=setInterval(counter,1000)

    }
    else{
        console.log("geri sayım dolduruldu")
        clearInterval(countdown)
    }
})