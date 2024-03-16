import React, { useEffect, useState } from 'react'
import './styles.css'
const ScrollIndicator = ({ url }) => {

    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {

            setLoading(true);

            const response = await fetch(getUrl);
            const data = await response.json();

            // console.log(data.products)
            if (data && data.products) {
                setLoading(false)
                setProductData(data.products)
            }

        } catch (error) {
            setLoading(false);
            console.log(error.message)
        }

    }

    function handleScrollPercentage() {
        // console.log(document.body.scrollTop, document.documentElement.scrollTop, 
        //     document.documentElement.scrollHeight, document.documentElement.clientHeight)

        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


        setScrollPercentage((scrolled / height) * 100);
        // console.log(scrolled, height);
    }

    useEffect(() => {
        if (url !== '') fetchData(url);
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    // console.log(productData, loading);
    console.log(scrollPercentage);
    return (
        <div>
            <div className='top-container'>
                <h1>Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}>
                    </div>
                </div>
            </div>

            <div className='data-container'>
                {
                    productData && productData.length > 0
                        ? productData.map((dataItem) => <p>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator

