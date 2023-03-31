function Samochod(Marka, Model, rok_produkcji, kolor, predkosc){
    this.marka = Marka;
    this.model = Model;
    this.rok_produkcji = rok_produkcji;
    this.kolor = kolor;
    this.predkosc = predkosc;
    this.zwieksz = function(val){
        this.predkosc = this.predkosc + val
    }

    this.inf_samochod = function(){
        return this.marka + " " + this.model + " " + this.rok_produkcji +", Kolor: " + this.kolor + ", Predkosc: " + this.predkosc;
    }
};

const auto = new Samochod("Mercedes", "A klasa", 2012, "czerwony", 1)
console.log(auto.inf_samochod())
auto.zwieksz(5);
console.log(auto.inf_samochod())