type buttonProps = {
    name: string
}

function Button({ name }: buttonProps) {
    return <button className="bg-indigo-600 px-4 py-2 rounded-xl mx-10 my-6 text-amber-50 font-semibold border-4 border-indigo-700 hover:bg-indigo-700 hover:border-indigo-800">{name}</button>
}

export { Button }