import {readFileSync} from 'fs';

interface writing {
    key: number,
    title: string,
    type: string,
    body: string
}

const writingsJson = readFileSync('app/writings/writings.json', 'utf8');
const writings: writing[] = JSON.parse(writingsJson);


export default function Page({params}: { params: { slug: string } }) {
    const matchingWriting = writings.find(writing => {
        const lowercasedTitle = writing.title.toLowerCase();
        const hyphenatedTitle = lowercasedTitle.replace(/[^\w-]+/g, '-');
        return hyphenatedTitle === params.slug;
    });
    return (
        <div className="w-[70%]">
            {matchingWriting ? (
                <div className="space-y-5">
                    <strong >
                        {matchingWriting.title}
                    </strong>
                    <br />
                    <p className="display-linebreak">
                        {matchingWriting.body}
                    </p>
                </div>
            ) : (
                <p>No post found.</p>
            )}
        </div>
    )
}
