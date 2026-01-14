function SaludoUsuario({nombre}) {
    return(
        <p>
            {nombre? `Hola, ${nombre}` : `Por favor, ingrese un nombre`}
        </p>
    )
}

export default SaludoUsuario;