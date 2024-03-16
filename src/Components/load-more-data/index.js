import React, { useEffect, useState } from 'react'
import './styles.css'
import data from '../Accordian/data';

const LoadMoreData = () => {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState();
    const [disabled , setDisabled] = useState(false);

    async function fetchImage() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            if (data) {
                setProduct((prevData)=>[...prevData, ...data.products]);
                setLoading(false);
            }

            console.log(data);

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImage();
    }, [count])

    useEffect(()=>{
        if (product && product.length===100){
            setDisabled(true)
        }
    }, [product])
    if (loading) {
        return <div>Loading data please wait</div>
    }

    if (error) {
        return <div>Error Occured: {error}</div>
    }

    // function handleMoreProduct(){
    //     count++;
    //     setCount(count);
    // }

    return (
        <div className='load-more-container'>
            <div className='product-container'>
                {product && product.length
                    ? product.map((item) =>
                        <div key={item.id} className='product'>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )
                    : null}
            </div>
            <div className='button-container'>
                
                <button disabled={disabled} onClick={()=>setCount(count+1)}>Load More data</button>
                {
                    disabled?<p>You reached to 100 products</p>: null
                }
            </div>
        </div>
    )
}

export default LoadMoreData
