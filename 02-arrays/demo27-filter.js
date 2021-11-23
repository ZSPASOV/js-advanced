let names = ['superman', 'spiderman', 'batman', 'wonderwoman', 'superwoman']

 let filteredNames = names.filter(x => {
     return x[0] !== 's'
 });

 console.log(names) /*(5) ['superman', 'spiderman', 'batman', 'wonderwoman', 'superwoman'] - originalniq array ne e mutiran*/
 console.log(filteredNames) /*(2) ['batman', 'wonderwoman'] - sazdava nov array ot originalniq na baza na uslovieto*/