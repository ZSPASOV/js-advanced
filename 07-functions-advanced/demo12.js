(function() {
    console.log('some app here');
})(); /*some app here*/

// taka se sazdava funkciq koqto se izpalnqva vednaga. 
// nqkoi shte kaje - kakuv e smisala ot funkciqta togava,
// ideqta e che taka promenlivite vutre sa v scope-a na funkciqta,
// a ne v global scope

/*tova raboti i s arrow funkcii*/
/*immediately invoked funkction*/
let result = (() => {
    return 1 + 10;
})(); 

console.log(result); /*11*/