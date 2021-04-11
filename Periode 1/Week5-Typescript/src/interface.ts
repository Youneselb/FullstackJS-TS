//a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
interface IBook{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

//b) Create a function that takes an IBook instance and test it with an object instance.
const myBook: IBook = {
title: "Beyond Order",
author: "Jordan Peterson",
published: new Date(Date.now()),
pages: 250
};

function printBook(book: IBook) {
    console.log(book);
}

printBook(myBook);

/*
c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
It means, that every book that is declared must have the same properties as the 'IBook' interface.
Duck-typing is when you are able to compare one object with other objects by checking 
that both objects have the same type matching names or not. So if a an object meets the same
requirements as an instance of an Interface, then they are the "same".
Thereby the saying: “If it walks like a duck, and it quacks like a duck, then it must be a duck.”
*/

