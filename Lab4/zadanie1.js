const ksiazka = {
tytul: "book",
autor: "Ostap",
rok_wydania: 1655,
SayHello: function(){
    console.log("Tytul " + this.autor + " " + this.rok_wydania);
}
        
};

ksiazka.SayHello()