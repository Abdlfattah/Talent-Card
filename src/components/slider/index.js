import React from 'react'
import items from '../../data/data'
import Slider from "react-slick";
import Arrow from '../arrow'
import Profil from '../profil/index'
import style from './style.css'

function SliderComp() {

    let settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: <Arrow direction='scroll-arrow-to-right.svg' />,
        prevArrow: <Arrow direction='scroll-arrow-to-left.svg'/>
        
    };
    const renderItems = () => (
        items.map((item,i)=>(
            <div key={i}>
                <Profil item={item} other={[items[(i+1+items.length)%items.length],items[(i+2+items.length)%items.length]]}/>
            </div>
        ))
    )
    return (
        <div className={style.slider_container}>
            <Slider {...settings}>
                {renderItems()}
            </Slider>
        </div>
    )
}

export default SliderComp
