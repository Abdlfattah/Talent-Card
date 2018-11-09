import React from 'react'
import style from './style.css'
function Square() {
    return (
        <div className={style.square_container}>
            <div className={style.square_right_top}></div>
            <div className={style.square_left_top}></div>
            <div className={style.square_right_bottom}></div>
            <div className={style.square_left_bottom}></div>
        </div>
    )
}

export default Square
