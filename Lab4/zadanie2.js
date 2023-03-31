const student ={
imie: "Darth vader", 
nazwisko: "Cislo", 
nr_albumu: "w87680",
ocena1: 3,
ocena2: 5,
ocena3: 4,
Srednia: function(){
    console.log("srednia: " +(this.ocena1 + this.ocena2 + this.ocena3)/3);
}
};

student.Srednia()
