const obj = {
    id: 10,
    author: 'Ivan',
    content: 'asdfsaffa',
    upvotes: 5,
    downvotes: 10,
}

function test() {
    this.upvotes += 10;
}

test.call(obj);

console.log(obj);
console.log(obj['upvotes']);