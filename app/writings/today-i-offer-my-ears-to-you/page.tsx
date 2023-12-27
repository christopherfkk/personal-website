import { promises as fs } from 'fs';

interface writing {
    key: number,
    title: string,
    type: string,
    body: string
}

export default async function Page() {

    const TITLE = "Today, I offer my ears to you"

    const writingsJson = await fs.readFile(process.cwd() + '/app/writings/writings.json', 'utf8');
    const writings: writing[] = JSON.parse(writingsJson);

    const matchingWriting = writings.find(writing => {
        return writing.title === TITLE;
    });
    return (
        <div className="md:w-[75%] lg:w-[50%]">
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
