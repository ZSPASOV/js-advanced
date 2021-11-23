/*prodaljenie na demo16.js no s try i catch*/
function somethingBroken() {
    if (Math.random() < 0.3) {
        throw new Error('something is broken but Panyo rulz!');
    }

    return 'Yey';
}

try {
    let result = somethingBroken();
    
    console.log(result);
} catch(greshka) {
    console.log('something went wrong, izvinqvaite')
}


/*vseki pat kato izvikvam shte vrushta ili yey ili shte vdiga greshkata*/