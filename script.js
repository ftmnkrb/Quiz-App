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
     new Soru("1-Yazılım nedir?", { a : "Program", b : "Veri",c : "İşletim"}, "a"),
     new Soru("2-Yazılım geliştirme sürecindeki adımlar nelerdir?", { a : "Tasarım", b : "Test",c : "Dağıtım"}, "b"),
     new Soru("3-Nesne tabanlı programlama nedir?", { a : "Paradigma", b : "Yaklaşım",c : "Dil"}, "a"),
     new Soru("4Yazılım test etmenin amacı nedir?", { a : "Hata", b : "Doğruluk",c : "Kalite"}, "a"),
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




document.querySelector(".btn-start").addEventListener("click", function() {
     if(quiz.sorular.length != quiz.soruIndex){
          console.log(quiz.soruGetir());
          quiz.soruIndex += 1;
     }
     else{
          console.log("Quiz Bitti");
     }     
     


})


