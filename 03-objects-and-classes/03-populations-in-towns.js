function solve(input) {

    let towns = input
        .map(x => x.split(' <-> '))
        .reduce(
            (a, x) => {
                let currentTown = x[0];
                let currentPopulation = Number(x[1]);

                if (!a.hasOwnProperty(currentTown)) {
                    a[currentTown] = 0;
                }

                a[currentTown] += currentPopulation;

                return a;
            },
            {}
        );
    Object.keys(towns).forEach(town => console.log(`${town} : ${towns[town]}`));
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)