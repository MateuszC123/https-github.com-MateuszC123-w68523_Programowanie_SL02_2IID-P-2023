let x=[5, 3, 5, 6, 8, 10, 56]
let suma=0
for(i of x){
    suma+=i
}
let newlist=[]
for(i of x){
    if(i%2==0){
        newlist.push(i);
    }
}
// let newlist2=[]
// for(i of x){
//     let m = 0;
//     m = i * 3;
//     newlist2.push(m);
// }
console.log(x.map(y => y * 3)); //mnozy liczby przez 3

console.log(`suma watrosci ${suma}`);
console.log(`liczby parzyste: ${newlist}`);
// console.log(`liczby nowe: ${newlist2}`);

let v=prompt("podaj numer albumu")
x.push(v)
console.log(x.indexOf(v))