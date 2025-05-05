import React from 'react'

function Table() {
    const users = [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Alice', email: 'alice@example.com' },
        { id: 3, name: 'Bob', email: 'bob@example.com' },
    ];

    const headers = Object.keys(users[0]); 

    return (
        <div>

            <h1>Table Try</h1>

            <table cellPadding={10} border={1}>
                {/* <thead> */}
                {/* <tr> */}
                <tr>
                    {headers.map((header, i) => (
                        <th key={i}>{header.toUpperCase()}</th>
                    ))}
                </tr>
                {/* </tr> */}
                {/* </thead> */}

                <tbody>

                    {users.map((data, i) => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Table