import React, { useState } from 'react'

const Profe = (TutorComponent) => { // => HOCVA
  
    const NuevoComponente = (props) => {
        const [sueldo,setSueldo] = useState(10);
        const handleAumentarSueldo = () => setSueldo( sueldo * 2);

        return (
            <TutorComponent {...props} sueldo={sueldo} handleAumentarSueldo={handleAumentarSueldo} />
        )
    }

    return NuevoComponente
}

export default Profe