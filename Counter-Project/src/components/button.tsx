type buttonProps = {
    name: string
}

function Button({ name }: buttonProps) {
    return <button className="object-center" >{name}</button>
}

export { Button }