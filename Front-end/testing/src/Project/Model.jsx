import React, { useState } from 'react'

function Model() {
    const [isopen, setisopen] = useState(false)
    const [accpted, setaccpted] = useState(false)
    const accpet = () => {
        setisopen(prev => !prev)
        setaccpted(true)
    }
    const Model = () => {

        return (
            <div className='model' style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', border: '0.7px solid black', padding: 20, position: 'relative', borderRadius: 20
            }}>
                <button onClick={() => setisopen(prev => !prev)} style={{ width: 20, backgroundColor: 'whitesmoke', display: 'flex', position: 'relative', right: 100, bottom: 30 }}>X</button>
                <div className="content" style={{ font: "caption" }}>   Click The Button to Accept the Offer</div>

                <button onClick={accpet} className='accept-offer'> Click To Accept Offer</button>


            </div>
        )
    }
    return (
        <div className={`container ${isopen ? 'blur-background' : ''}`}>
            <h1>Show Model</h1>
            <button onClick={() => setisopen(prev => !prev)} style={{ display: 'flex', position: "relative" }}> Open Model  &#9733;</button>
            {isopen && <Model />}
            {accpted && <h2> Finaly Accepted The Offer</h2>}

        </div>
    )
}

export default Model