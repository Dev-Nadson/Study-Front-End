import { Button } from "./components/button"

let num = 0

function App() {
  return <>
    <div className="bg-slate-250 dark:bg-slate-900 h-screen flex items-center justify-center ">
      <Button name="Adicionar" />
      <p className="text-stone-900 dark:text-amber-50 text-6xl font-serif">{num}</p>
      <Button name="Remover" />
    </div>
  </>
}

export default App
