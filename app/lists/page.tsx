import {books} from '@/app/lists/books';

export default function Page() {
    return (
        <div>
            {books.map((book) => (
                <p key={book.key} className="m-1">
                    <strong>{book.author}</strong> {book.name}
                </p>
            ))}
        </div>);
}
