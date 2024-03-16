import React, { useState } from 'react'
import './styles.css';

const Tabs = ({ tabsContent, onChange }) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(currentIndex) {
        setCurrentTabIndex(currentIndex);
        onChange(currentIndex);
    }
    return (
        <>
            <div className='wrapper'>
                <div className='heading'>
                    {tabsContent.map((tabsItem, index) => (
                        <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} onClick={() => handleOnClick(index)} key={tabsItem.label}>
                            <span className='label'>{tabsItem.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='content' style={{ color: 'black' }}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </>
    )
}

export default Tabs
