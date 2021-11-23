function solve(input) {
    // let result = input.map(([width, height]) => {
    //     return {
    //         width: width,
    //         height: height,
    //     }
    // });
    /*v2 sukraten syntax - v js ako se suzdava obekt i imeto i stoinostta e edna i sushta
    moje da se napravi vmesto {width: width} napravo {width}*/
    let result = input.map(([width, height]) => ({
        width,
        height,
        area: function() {
            return this.width * this.height;
        },
        /*v2*/
        // area: () => width * height
        compareTo(rect) {
            let result = rect.area() - this.area();

            return result == 0
            ? rect.width - this.width
            : result
        }
    }))
    .sort((a, b) => a.compareTo(b));

    return result;
}

solve([[10, 5], [5, 12]])