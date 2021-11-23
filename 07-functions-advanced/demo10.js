let pow = (y, x) => {
    return x ** y;
};

/*bind vrushta nova funkciq, prilaga pow na context null i slaga defolten parametar y=2 za vsqko izvikvane. taka ostava v novata funkciq sqr da se podava samo x parametura*/
let sqr = pow.bind(null, 2); 

console.log(pow(2, 9)); /*81*/
console.log(sqr(9)); /*81*/