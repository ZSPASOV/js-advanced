class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        // properties below are added later
        this.totalProfit = 0;
        this.totalTicketsSold = 0;
    }


    newScreening(date, hall, description) {
        if (this.screenings.some(function (element) {
            return element['date'] === date && element['hall'] === hall;
        })) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        else {
            this.screenings.push({
                date: date,
                hall: hall,
                description: description,
            })
            return `New screening of ${this.movieName} is added.`
        }
    }


    endScreening(date, hall, soldTickets) {
        if (!this.screenings.some(function (element) {
            return element['date'] === date && element['hall'] === hall
        })) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        } else {
            let currentProfit = this.ticketPrice * soldTickets;
            this.totalProfit += currentProfit;
            this.totalTicketsSold += soldTickets;
            // delete the screening
            this.screenings = this.screenings.filter(e => e['date'] !== date || e['hall'] !== hall);
            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
        }
    }

    toString() {
        let result = '';
        result += `${this.movieName} full information:\n`;
        result += `Total profit: ${this.totalProfit.toFixed(0)}$\n`;
        result += `Sold Tickets: ${this.totalTicketsSold}\n`
        if (this.screenings.length === 0) {
            result += 'No more screenings!';
        } else {
            result += 'Remaining film screenings:\n';
            this.screenings.sort((a, b) => a['hall'].localeCompare(b['hall']));
            // dolu e greshno zashtoto dobavq i nov red na posledniq element ot cikala
            // this.screenings.forEach((el) => {
            //     result += `${el.hall} - ${el.date} - ${el.description}\n`
            // })
            // shte go napravq taka che posledniq red da ne e s nov red
            for (let i = 0; i < this.screenings.length - 1; i ++) {
                result += `${this.screenings[i]['hall']} - ${this.screenings[i]['date']} - ${this.screenings[i]['description']}\n`;
            }
            result += `${this.screenings[this.screenings.length - 1].hall} - ${this.screenings[this.screenings.length - 1].date} - ${this.screenings[this.screenings.length - 1].description}`
        }
        return result;
    }
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

