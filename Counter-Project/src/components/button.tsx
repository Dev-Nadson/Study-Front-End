type buttonProps = {
    name: string
}

function Button({ name }: buttonProps) {
    return <button className="bg-indigo-600 px-4 py-2 rounded-xl mx-8 text-amber-50 font-semibold border-4 border-indigo-700 shadow-[0_3px_100px] shadow-blue-600 hover:bg-indigo-700 hover:border-indigo-800 hover:ring dark:ring-amber-50 ring-gray-900">{name}</button>
}

export { Button }