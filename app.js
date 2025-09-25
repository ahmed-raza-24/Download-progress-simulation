let btn = document.querySelector("#startBtn");
let percent = document.querySelector("#percent");
let progress = document.querySelector("#progress");

btn.addEventListener("click", function(){
  let progress = 0;
  let interval = setInterval(function(){
    if(progress >=100){
      clearInterval(interval);
      percent.innerText = "Download Complete ✅";
    }else{
      progress++;
      bar.style.width = progress + "%";
      percent.innerText = progress + "%";
    }
  }, 30);
});
