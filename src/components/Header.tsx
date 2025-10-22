export default function Header({word1, word2}: {word1: string, word2: string}) {
    return (
        <div className="flex gap-2 text-4xl mb-5">
            <span className="text-indigo-500">{word1}</span>
            <span>{word2}</span>
        </div>
    )
}