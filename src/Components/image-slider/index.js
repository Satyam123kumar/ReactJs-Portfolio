import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './MyStyle.css';
export default function ImageSlider({ url, page = 1, limit = 5 }) {

    const [image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errMsg, setErrMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImage(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImage(data);
                setLoading(false);
            }

            // console.log(data);
        } catch (error) {
            setErrMsg(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImage(url);
    }, [url])

    console.log(image);
    if (loading) {
        return <div>Loading data! please wait</div>
    }

    if (errMsg) {
        return <div>Error Occured! {errMsg}</div>
    }

    function handlePrev() {
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1)
    }

    function handleAfter() {
        setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1)
    }
    return (
        <div className='container'>
            <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
            {image && image.length
                ? image.map((imgItem, index) => (
                    <img
                        key={imgItem.id}
                        alt={imgItem.download_url}
                        src={imgItem.download_url}
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                    />
                )) : null}
            <BsArrowRightCircleFill onClick={handleAfter} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {image && image.length
                    ? image.map((_,index) => (
                        <button
                            key={index}
                            className={currentSlide === index ? 'current-indicator' : "current-indicator inactive-indicator"}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                    : null}
            </span>
        </div>
    )
}
