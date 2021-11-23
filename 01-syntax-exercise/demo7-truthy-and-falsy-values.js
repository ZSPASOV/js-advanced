// "truthy" -  a value that coerces to true when evaluated in a boolean context
// The following values are "falsy" - false, null, undefined, NaN, 0, 0n and ""

function logTruthiness(val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}

logTruthiness (3.14);      //Truthy!
logTruthiness ({});        //Truthy!
logTruthiness (NaN);       //Falsy.
logTruthiness ("NaN");     //Truthy!
logTruthiness ([]);        //Truthy!
logTruthiness (null);      //Falsy.
logTruthiness ("");        //Falsy.
logTruthiness (undefined); //Falsy.
logTruthiness (0);         