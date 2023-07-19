// OOP : Nesne Tabanlı Programlama



function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
     this.soruMetni = soruMetni;
     this.cevapSecenekleri = cevapSecenekleri;
     this.dogruCevap = dogruCevap;
     


}

Soru.prototype.cevabiKontrolEt = function(cevap) {
     return cevap == this.dogruCevap;
}

let soru1 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", { a : "Node.js", b : "nuget",c : "Npm"}, "b");

let soru2 = new Soru("Hangisi Javascript paket yönetim uygulamasıdır?", { a : "Node.js", b : "Typescript",c : "Npm"}, "c");



let sorular = [   // burada bir dizi içinde oluşturduk
     new Soru("1-Yazılım nedir?", { a : "Program", b : "Veri",c : "İşletim", d : "Kod"}, "a"),
     new Soru("2-Yazılım geliştirme sürecindeki adımlar nelerdir?", { a : "Tasarım", b : "Test",c : "Dağıtım"}, "b"),
     new Soru("3-Nesne tabanlı programlama nedir?", { a : "Paradigma", b : "Yaklaşım",c : "Dil"}, "a"),
     new Soru("4-Yazılım test etmenin amacı nedir?", { a : "Hata", b : "Doğruluk",c : "Kalite"}, "a"),
]

function Quiz(sorular){
     this.sorular = sorular;
     this.soruIndex=0 ;
}

// console.log(new Quiz(sorular[1]));



Quiz.prototype.soruGetir = function() {
     return this.sorular[this.soruIndex];
}
const quiz = new Quiz(sorular);




document.querySelector(".btn_start").addEventListener("click", function() {
          document.querySelector(".quiz_box").classList.add("active")
   
          soruGoster(quiz.soruGetir())
         
     


})

document.querySelector(".next_btn").addEventListener("click", function() {
     if(quiz.sorular.length != quiz.soruIndex + 1 ){
          
          quiz.soruIndex += 1;
          soruGoster(quiz.soruGetir())
     }
     else{
          console.log("Quiz Bitti");
     } 
})



function soruGoster(soru) {
     let question = `<span>${soru.soruMetni}</span>`;
     let options = '';

     for(let cevap in soru.cevapSecenekleri){
          options += `
          <div class="option">
               <span><b>${cevap}</b> : ${soru.cevapSecenekleri[cevap]}</span>
           </div>`;
         

     }

     const option_list = document.querySelector(".option_list")
     document.querySelector(".question_text").innerHTML = question;
     option_list.innerHTML = options;

     const option = option_list.querySelectorAll(".option");

     for(let opt of option){
          opt.setAttribute("onclick", "optionSelected(this)")
     }

}

function optionSelected(option){
     let cevap = option.querySelector("span b")}


