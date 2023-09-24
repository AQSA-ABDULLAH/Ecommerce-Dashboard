import React, { useEffect, useState } from 'react'

export default function Card() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:4000/");
        result = await result.json();
        setProduct(result);
    }
    return (
        <div>
            <div>
                {
                    product.map((item, index) =>
                    <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                        <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top' alt='' />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <div classNameName='container w-100'>
                                <select className='m-2 h-100 bg-success rounded'>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>
                                <select className='m-2 h-100 bg-success rounded'>
                                    <option value="half">Half</option>
                                    <option value="full">Full</option>
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    Total Price {item.price}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}