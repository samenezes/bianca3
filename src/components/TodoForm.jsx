import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")
    const [categoria, setCategoria] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !categoria) return 
        console.log(value, categoria)
   
        addTodo(value, categoria)
        setValue("")
        setCategoria("")

    }
    
    return (
        <div className="todo-form">
            <h2>Registro Temperatura:</h2>
            <form onSubmit={handleSubmit}> {}
                <input type="text" placeholder="Digite a temperatura" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="quente">Quente</option>
                    <option value="fria">Fria</option>
                </select>
                <button type="submit">Criar registrio</button>
            </form>
        </div>
    )
}

export default TodoForm