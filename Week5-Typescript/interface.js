//b) Create a function that takes an IBook instance and test it with an object instance.
var myBook = {
    title: "Beyond Order",
    author: "Jordan Peterson",
    published: new Date(Date.now()),
    pages: 250
};
function printBook(book) {
    console.log(book);
}
printBook(myBook);
