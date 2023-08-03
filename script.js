// OOP : Nesne Tabanlı Programlama


const quiz = new Quiz(sorular);
const ui = new UI();





ui.btn_start.addEventListener("click", function() {
          ui.quiz_box.classList.add("active");
          startTimer(10);
          ui.soruGoster(quiz.soruGetir());
          ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
          ui.btn_next.classList.remove("show");
         
     


})

ui.btn_next.addEventListener("click", function() {
     if(quiz.sorular.length != quiz.soruIndex + 1 ){
          
          quiz.soruIndex += 1;
          clearInterval(counter);
          startTimer(10);
          ui.soruGoster(quiz.soruGetir());
          ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);

          ui.btn_next.classList.remove("show");

     }
     else{
          console.log("Quiz Bitti");
          ui.quiz_box.classList.remove("active")
          ui.score_box.classList.add("active");
          ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapsayisi);
     } 
});

const option_list = document.querySelector(".option_list")





 
// const correctIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>'
// const incorrectIcon = '<div class="icon"><i class="fa-regular fa-circle-xmark"></i></div>'

function optionSelected(option){
     clearInterval(counter)
     let cevap = option.querySelector("span b").textContent;
     let soru = quiz.soruGetir();

     if(soru.cevabiKontrolEt(cevap)){
          quiz.dogruCevapsayisi += 1;
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
     }
     else{
          option.classList.add("incorrect");
          option.insertAdjacentHTML("beforeend", ui.incorrectIcon);


     }

     for(let i=0; i< ui.option_list.children.length; i++) {
          ui.option_list.children[i].classList.add("disabled");
     }

     ui.btn_next.classList.add("show");

     
     }

ui.btn_quit.addEventListener("click", function() {
     window.location.reload();     //Sayfayı baştan çağırıyoruz.
 }); 

ui.btn_replay.addEventListener("click", function() {
     quiz.soruIndex= 0;
     quiz.dogruCevapsayisi = 0;
     ui.btn_start.click();
     ui.score_box.classList.remove("active");
 }); 



function startTimer(time){
     counter = setInterval(timer, 1000); //timer fonksiyonunu saniyede 1 çağırmak için zamanlayıcı başlatır.

     function timer(){
          ui.time_second.textContent = time;
          time--;

          if(time < 0) {
               clearInterval(counter);
               ui.time_text.textContent = "Süre Bitti";
               let cevap = quiz.soruGetir().dogruCevap;

               for(let option of ui.option_list.children) {
                    if(option.querySelector("span b").textContent == cevap){
                         option.classList.add("correct");
                         option.insertAdjacentHTML("beforeend", ui.correctIcon);
                    }
                    option.classList.add("disabled");
               }
               ui.btn_next.classList.add("show");
          }
     }
}


