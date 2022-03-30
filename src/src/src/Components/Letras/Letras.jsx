import { useEffect, useState } from 'react';

// dispersión, solo text del objeto props ({text}) en vez de (props)
function Letras({ text }) { // Componente Letras()

    // Cuenta las Letras sin tener en cuenta los espacios
    let letras = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " " && text[i] !== "\n") { // "\n" para que no cuente el salto de línea
            letras++;
        }
    }

    return (
        <>

            <p>
                Letras: {letras}
            </p>

        </>

    );

}

export default Letras;