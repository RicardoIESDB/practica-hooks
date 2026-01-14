function InputUsuario({nombre, setNombre}) {
    return(
        <div>
            <label>
                Nombre:
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)}></input>
            </label>
        </div>
    )
}

export default InputUsuario;