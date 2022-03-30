import { useEffect, useState } from 'react';

function Palabras({text}) { // Componente Palabras()

    // const [palabras, setPalabras] = useState("");
    
    // Cuenta las palabras sin tener en cuenta los espacios
    let palabras = 0;
    // Se remplazan los saltos de linea por espacios, para que no cuente una palabra menos cada vez que se salta de línea
    // el problema esta en que une la última palabra con la anterior y solo cuenta 1
    text = text.replace (/\r?\n/g," ");
    // El método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en subcadenas
    const Array = text.split(" ");
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] !== " " && Array[i] !== "\n" ) { // "\n" para que no cuente el salto de línea
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

