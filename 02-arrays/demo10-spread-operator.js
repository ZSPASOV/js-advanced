let numbers = [10, 2, 100, 4];
/*Math.max ne raboti s massive, zatova ne moje da podadem numbers direktno, no moje
da go podadem s ...*/
let largestNumber = Math.max(...numbers); 

console.log(largestNumber); /*100*/

/* v sluchaq ... podadeno v funkciqta e spread operator, a ne rest operator*/