import React from 'react'
import Tabs from './tabs'
import Rating from '../star-rating'
import Accordian from '../Accordian'
import RandomColor from '../random-color'
import ImageSlider from '../image-slider'
import LoadMoreData from '../load-more-data'
import QrCodeGen from '../qr-code-generator'

const TabTest = () => {

    function RandomContent(){
        return <div>Some random content is there</div>
    }
    const TabData = [
        {
            label: 'Image-Slider',
            content: <ImageSlider url = {"https://picsum.photos/v2/list"} page={'1'} limit={"10"}/>
        },
        {
            label: 'Load-More-Data',
            content: <LoadMoreData/>
        },
        {
            label: 'Accordian',
            content: <Accordian/>
        },
        {
            label: 'Random-Color-Generator',
            content: <RandomColor/>
        },
        {
            label: "QR-Code-Generator",
            content: <QrCodeGen/>
        },
        {
            label: 'Star-rating',
            content: <Rating/>
        }
    ]

    function handleCurrentTabs(currentTabIndex){
        console.log(currentTabIndex);
    }
  return (
    <div>
      <Tabs tabsContent={TabData} onChange={handleCurrentTabs}/>
    </div>
  )
}

export default TabTest
