import React from 'react'
import Card from './card'
import style from './style.css'
import Info from './info'
import FollowingCards from './following_card'
import Square from './square'

function Profil(props) {
    return (
        <div className={style.profil}>
            <Card {...props}/>
            <Info {...props}/>
            <Square/>
            <FollowingCards {...props}/>
        </div>
    )
}

export default Profil
