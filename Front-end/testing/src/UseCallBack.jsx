import React, { useEffect, useState } from 'react'

function UseCallBack({ data }) {
    const [value, setvalue] = useState([])

    useEffect(() => {
        console.log("CALL BACK CALLING");

        setvalue(data())
    }, [data])

    return (
        <div>
            <h1>Use Call back</h1>
            {value?.map(dataaa => (
                <div>{dataaa}  </div>
            ))}

        </div>
    )
}

export default UseCallBack