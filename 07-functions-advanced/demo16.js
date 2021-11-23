function somethingBroken() {
    if (Math.random() < 0.3) {
        throw new Error('something is broken but Panyo rulz!');
    }

    return 'Yey';
}

let result = somethingBroken();
console.log(result);

/*vseki pat kato izvikvam shte vrushta ili yey ili shte vdiga greshkata*/