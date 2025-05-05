import React, { useState } from 'react'

function Accordian() {

    const faqData = [
        {
            id: 1,
            question: "What is the Virtual DOM in React?",
            answer:
                "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to detect changes and efficiently update only the parts of the actual DOM that changed."
        },
        {
            id: 2,
            question: "What are React Hooks?",
            answer:
                "Hooks are functions that let you use state and lifecycle features in functional components. Common hooks include useState, useEffect, useMemo, and useCallback."
        },
        {
            id: 3,
            question: "What is the use of useMemo in React?",
            answer:
                "useMemo is a hook that memoizes the result of an expensive computation and returns the cached result unless dependencies change. It helps improve performance."
        }
    ];



    const RenderItem = ({ question, ans, id }) => {
        const [isShow, setisShow] = useState(false)

        const handleShow = () => {
            setisShow((isShow) => !isShow)
        }
        return (
            <button key={id} onClick={handleShow} style={{
                display: 'flex', justifyContent: "center",
                alignItems: "center", padding: 20, flexDirection: 'column', gap: 20, textAlign: 'center', border: '2px solid black',
                backgroundColor: "beige", cursor: 'pointer'
            }}>
                <div className="qus"  style={{color:'red'}}>
                    {question}

                </div>
                <div className="ans" style={{color:'green'}}>
                    {isShow && ans}
                </div>
            </button>
        )
    }

    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20, flexDirection: 'column', gap: 40 }}>
            <h1>Accordian
            </h1>

            {faqData.map((data, i) => (
                <RenderItem question={data.question} ans={data.answer} id={data.id} />
            ))}


        </div>
    )
}

export default Accordian

