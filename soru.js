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
     new Soru("2-Yazılım geliştirme sürecindeki adımlar nelerdir?", { a : "Tasarım", b : "Test",c : "Dağıtım"}, "b"),
     new Soru("3-Nesne tabanlı programlama nedir?", { a : "Paradigma", b : "Yaklaşım",c : "Dil"}, "a"),
     new Soru("4-Yazılım test etmenin amacı nedir?", { a : "Hata", b : "Doğruluk",c : "Kalite"}, "a"),
]