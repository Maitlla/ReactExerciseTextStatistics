import { useEffect, useState } from 'react';

function Palabras({text}) { // Componente Palabras()

    // const [palabras, setPalabras] = useState("");
    
    // Cuenta las palabras sin tener en cuenta los espacios
    let palabras = 0;
    const Array = text.split(" ");
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] != "" && Array[i] != "\n") { // "\n" para que no cuente el salto de línea
            palabras++;
        }
    }

    return (
        <>
            <p>
                Palabras: {palabras}
            </p>

        </>

    );

}

export default Palabras;