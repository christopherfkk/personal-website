import Link from 'next/link'

export default function Page() {
  return (
      <div className="flex flex-col flex-none border-2 border-amber-950">
        <Link href="/">
            <p className="text-2xl mb-5">Christopher Fok</p>
        </Link>
        <Link href="/lists"><p>Lists</p></Link>
        <Link href="/writings"><p>Writings</p></Link>
      </div>
  )
}