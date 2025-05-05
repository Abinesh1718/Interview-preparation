import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from './redux/Slice'

function Header() {

    const [product, setproduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {

        async function GetData() {
            try {
                let data = await fetch('https://dummyjson.com/products')
                let response = await data.json()

                console.log("RE", response);

                setproduct(response?.products)
            } catch (error) {
                console.log(error);
            }

        }
        GetData()


    }, [])



    return (
        <>
            {/* <div  >Header</div> */}
            <nav className='navbar'>
                <header>Wellcome</header>
                <ul className='header-container' >
                    <li>Home</li>
                    <li>Careers</li>
                    <li>About</li>
                    <li>Contact</li>
                    <Link to="/login">Login</Link>
                    <Link to="/cart">Cart</Link>

                </ul>

            </nav>
            <body>
                <h1>Product List  Data </h1>
                <div className='product-container'>

                    {Array.isArray(product) && product.map(data => {
                        return (
                            <div className='products' key={data?.id} >
                                <img src={data?.images[0]} />
                                <div>{data?.title}</div>
                                <button onClick={() => dispatch(addCart(data?.title))} className='addtocart'>  +  Add To Cart</button>
                            </div>

                        )
                    })}
                </div>
            </body>



        </>
    )
}

export default Header