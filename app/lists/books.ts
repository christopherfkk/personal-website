import * as fs from 'fs';

interface Book {
    key: number
    name: string;
    author: string;
}
export const books: Book[] = [];

let key = 0
for (const line of fs.readFileSync('app/lists/books.txt','utf8').split('\n')) {
    const [name, author] = line.split(' by ');
    const book = { key, name, author };
    key ++
    books.push(book);
}
console.log(books);
