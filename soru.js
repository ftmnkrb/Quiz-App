function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
     this.soruMetni = soruMetni;
     this.cevapSecenekleri = cevapSecenekleri;
     this.dogruCevap = dogruCevap;
     


}

Soru.prototype.cevabiKontrolEt = function(cevap) {
     return cevap == this.dogruCevap;
}


let sorular = [   // burada bir dizi içinde oluşturduk
     new Soru("1-Yazılım nedir?", { a : "Program", b : "Veri",c : "İşletim", d : "Kod"}, "a"),
     new Soru("2-Hangisi backend kapsamında değerlendirilir?", { a : "node.js", b : "typescript",c : "angular",d : "react"}, "a"),
     new Soru("3-Hangisi frontend kapsamında değerlendirilmez?", { a : "CSS", b : "HTML",c : "JavaScript", d : "Sql"}, "d"),
     new Soru("4-Hangisi JS programlama dilini kullanmaz?", { a : "React", b : "Angular",c : "Vue.js", d : "Asp.net"}, "d"),
]