import React, { useState } from 'react'

function CustomeTable() {

    const content = [
        { button: 'Home', content: "This is Home Page Content" },
        { button: 'About', content: "This is About Page Content" },
        { button: 'Contact', content: "This is Contact Page Content" },
        { button: 'Careers', content: "This is Careers Page Content" }
    ]
    const [selected, setselected] = useState(content[0].content)

    const filter = selected ? content?.filter(data => data.button == selected) : null

    return (
        <div className='container'>
            <h1>Custom Table</h1>

            <div className="category-list">

                {content.map((data, i) => (
                    <button onClick={() => setselected(data?.button)}>{data?.button}</button>
                ))}
            </div>

            <div className="product-list">
                {filter.map(data => (
                    <div> {data.content}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CustomeTable