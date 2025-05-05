import React, { useState } from 'react'

function CountryProblem() {
    const [country, setcountry] = useState("")

    const countries = [
        {
            name: "United States",
            value: "us",
            cities: ["New York", "Los Angeles"]
        },
        {
            name: "India",
            value: "in",
            cities: ["Mumbai", "Bangalore"]
        },
        {
            name: "Germany",
            value: "de",
            cities: ["Berlin", "Munich"]
        },
        {
            name: "Japan",
            value: "jp",
            cities: ["Tokyo", "Osaka"]
        },
        {
            name: "Australia",
            value: "au",
            cities: ["Sydney", "Melbourne"]
        }
    ];


    const games = ["football", "vollyball", "cricket", "tennies"]

    const [gamesarr, setgamesarr] = useState(games)


    const selectedCountry = countries.find(data => data.value === country)

    const [chckbox, setchckbox] = useState({ index: null, ischeck: false })

    const [todo, settodo] = useState([])
    const [todos, settodos] = useState("")


    const handleOndelete = (index) => {
        let modifiesArr = gamesarr.filter((data, i) => i !== index)
        setgamesarr(modifiesArr)

    }

    const handleOncheck = (i) => {
        setchckbox((prev) => ({
            index: i,
            ischeck: i === prev.index ? !prev.ischeck : true
        }))
    }

    const handleCheckbox = (index) => {
        setchckbox((prev) => ({
            index: index,
            ischeck: prev.index === index ? !prev.ischeck : true
        }));
    };

    const handleTodo = () => {

        settodo((prev) => ({ ...prev, todos }))
    }



    return (
        <div>

            <div>


                <div>
                    <h1>Add Task</h1>

                    <input type='text' value={todos} onChange={(e) => settodos(e.target.value)} />
                    <button onClick={() => {
                        settodo((prev) => ([...prev, { task: todos }])), settodos("")
                    }} >Add Task</button>
                    <ul>
                        {todo.map((data, i) => (
                            <li key={i}>{data.task}</li>
                        ))}
                    </ul>
                </div>




                {/* <select value={country} onChange={(e) => setcountry(e.target.value)
                } >
                    {countries.map((cn, i) => {
                        return <option key={i} value={cn.value} >
                            {cn.name}

                        </option>

                    })}

                </select>

                <select value={country}
                >
                    {selectedCountry?.cities.map((cn, i) => {
                        return <option key={i} value={cn}>
                            {cn}

                        </option>

                    })}

                </select> */}


                {/* <div>
                    {gamesarr.map((data, i) => (
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }} key={i}>
                            <input onChange={() => handleOncheck(i)} type='checkbox' checked={chckbox.index === i && chckbox.ischeck}
                            />
                            <ul  >{data}
                                {chckbox.index === i && chckbox.ischeck && < button onClick={() => handleOndelete(i)}>DELETE</button>}
                            </ul>
                        </div>

                    ))}
                </div> */}



            </div>


        </div >
    )
}

export default CountryProblem