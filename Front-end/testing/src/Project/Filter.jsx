import React, { useMemo, useState } from 'react'
import Usememo from '../Usememo';

function Filter() {
    const [selectedCategory, setselectedCategory] = useState('')

    const productsData = [
        { id: 1, category: "Electronics", name: "Smartphone", price: 699 },
        { id: 2, category: "Electronics", name: "Laptop", price: 999 },
        { id: 3, category: "Electronics", name: "Bluetooth Speaker", price: 129 },
        { id: 4, category: "Electronics", name: "Smart Watch", price: 199 },
        { id: 5, category: "Electronics", name: "Tablet", price: 499 },

        { id: 6, category: "Clothing", name: "Men's T-Shirt", price: 25 },
        { id: 7, category: "Clothing", name: "Women's Jeans", price: 40 },
        { id: 8, category: "Clothing", name: "Jacket", price: 60 },
        { id: 9, category: "Clothing", name: "Sneakers", price: 80 },
        { id: 10, category: "Clothing", name: "Sunglasses", price: 35 },

        { id: 11, category: "Home", name: "Sofa", price: 899 },
        { id: 12, category: "Home", name: "Dining Table", price: 499 },
        { id: 13, category: "Home", name: "LED Lamp", price: 49 },
        { id: 14, category: "Home", name: "Curtains", price: 70 },
        { id: 15, category: "Home", name: "Bookshelf", price: 150 },

        { id: 16, category: "Books", name: "Fiction Novel", price: 15 },
        { id: 17, category: "Books", name: "Self Help Book", price: 20 },
        { id: 18, category: "Books", name: "Programming Guide", price: 30 },
        { id: 19, category: "Books", name: "Cookbook", price: 25 },
        { id: 20, category: "Books", name: "History Book", price: 22 }
    ];

    const UpdateCategory = [...new Set(productsData.map(data => data.category))]
    
    const filterPorduct = useMemo(() => selectedCategory
        ? productsData.filter((data, i) => data.category === selectedCategory)
        : productsData, [selectedCategory])


    return (
        <div className='container'>
            <h1>Filter</h1>
            <div className="category-list">

                {UpdateCategory.map((data, i) => (
                    <button key={i} onClick={() => setselectedCategory(data)} className={`category ${selectedCategory === data ? 'category-click' : ''}`}
                    >{data}</button >
                ))}

            </div>

            <div className="product-list">
                {filterPorduct?.map(data => (
                    <div className="product">
                        {data.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter