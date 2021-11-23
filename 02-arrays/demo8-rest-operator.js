let names = ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro'];

function getNames(names) {
    let [firstName, secondName, ...rest] = names;
    console.log(firstName);
    console.log(secondName);
    console.log(rest);

}

getNames(names) 

/*pesho
gosho
(3) ['panyo', 'vanyo', 'kiro']*/


function solve(...names) {
    console.log(names.join('-'));
}

solve('joro', 'vanyo', 'panyo') /*joro-vanyo-panyo*/