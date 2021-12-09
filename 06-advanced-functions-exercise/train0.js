function solve() {
    console.log(this);
}

let obj = {};
obj.attr = solve;

solve()
obj.attr();