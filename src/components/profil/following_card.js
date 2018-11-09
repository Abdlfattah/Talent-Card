import React from 'react'
import style from './style.css'

function FollowingCards({other}) {
    return (
        <div className={style.following_cards}>
           { other.map((elem,i)=>(
                <div key={i} className={style.other_card}>
                    <div className={style.avatar}>
                        <img src={elem.avatar}/>
                    </div>
                    <div className={style.name}>
                        <span>{elem.fullname}</span>
                        <img src='./images/Icons/Linkedin.png'/>
                    </div>
                    <div className={style.following_card_info}>
                        <img src='./images/Icons/paper-plane.svg'/>
                        <div>{elem.email}</div>
                    </div>
                    <div className={style.following_card_info}>
                       <img src='./images/Icons/telephone.svg'/>
                       <div>{elem.tele}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FollowingCards
