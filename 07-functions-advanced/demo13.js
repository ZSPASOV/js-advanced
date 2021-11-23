function outerFunc() {
    let outerVar = 'Pesho';

    return function innerFunc() {
        console.log(outerVar);
        return 'eto, varna go';
    }
}

let returnedInnerFunction = outerFunc();

console.log(returnedInnerFunction()); 
/*Pesho*/
/*eto, varna go*/

// ideqta e che kato outerFunc se izpalni tq izchezva ot stack-a v ram-ta s vsichkite i promenlivi
// obache vutreshnata funkciq innerFunc vzima neinata promenliva outerVar i q darji v neiniq scope i v ram-ta
// dokato i tq ne se izpalni

// tova koeto e stanalo e che poneje ima referenciq koqto sochi kam onazi promenliva, tq se premestva v heap-a zaradi closure