import { readFileSync } from 'fs';

interface writing {
    key: number,
    title: string,
    type: string,
    body: string
}

const writingsJson = readFileSync('app/writings/writings.json', 'utf8');
const writings: writing[] = JSON.parse(writingsJson);

export default function Page() {
    return (
        <div className="">
            {writings.map((writing) => (
                <div key={writing.key} className="m-1">
                    <h3 className="">
                        <a
                            href={`/writings/${writing.title.toLowerCase().replace(/[^\w-]+/g, '-')}`}
                        >
                            <strong>{writing.title} </strong>
                        </a>
                        {writing.type}
                    </h3>
                </div>
            ))}
        </div>);
}
