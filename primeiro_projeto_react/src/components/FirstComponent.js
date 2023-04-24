import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
    const name = "Matheus";
    return(
        <div className="firstcomponent">
            {/*Comentrios no JSX*/}
            <p>Primeiro Componente</p>
            {2+2}
            <p>Nome: {name}</p>
            <AnotherComponent/>
        </div>
    )
}

export default FirstComponent