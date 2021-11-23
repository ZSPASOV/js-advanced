function print() {
    console.log(`${this.name} is printing a page`);
}
function scan() {
    console.log(`${this.name} is scanning a document`);
}
const printer = {
    name: 'ACME Printer',
    print // short syntax for print: print
};
const scanner = {
    name: 'Initech Scanner',
    scan // short syntax for scan: scan
};
const copier = {
    name: 'ComTron Copier',
    print, // short syntax for print: print
    scan // short syntax for scan: scan
};

printer.print(); // ACME Printer is printing a page
