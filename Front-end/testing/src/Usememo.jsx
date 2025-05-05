import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import UseCallBack from './UseCallBack';

function Usememo() {

    const [number, setnumber] = useState(0)
    const [dark, setdark] = useState(false)

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '10px',
        marginTop: '10px',
    };

    const doubleValue = useMemo(() => {
        return SlowFunction(number)
    }, [number])

    const callbackFunction = useCallback(() => {
        return [number * 2, number * 5, number + 7]

    }, [number])

    const valueRef = useRef()

    const handleUseRef = () => {
        console.log("USEREFFF", valueRef?.current?.value);

    }




    return (
        <div>
            <h2>Use Ref</h2>
            <input type='text' ref={valueRef} />

            <button onClick={handleUseRef}>Use REF</button>


            <h1>Use Memo</h1>
            <input value={number} type='text' onChange={(e) => setnumber(e.target.value)} />
            <button onClick={() => setdark(!dark)} >Set Theme Change</button>
            <div style={themeStyles} >{doubleValue}</div>

            <UseCallBack data={callbackFunction} />
        </div>
    )
}
function SlowFunction(data) {
    for (let i = 0; i < 100000000; i++) {


    }
    return data * 4
}


export default Usememo

