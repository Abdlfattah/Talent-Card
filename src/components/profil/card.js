import React from 'react'
import style  from './style.css'


function Card({item}) {
    return (
        <div className={style.card}>
            <div className={style.avatar}>
                <img src={item.avatar}/>
            </div>
            <div className={style.name}>
                <span>{item.fullname}</span>
                <img src='./images/Icons/Linkedin.png'/>
            </div>
           <div className={style.other_info_card_container}>
            <div className={style.card_info}>
                    <img src='./images/Icons/paper-plane.svg'/>
                    <span>{item.email}</span>
                </div>
                <div className={style.card_info}>
                    <img src='./images/Icons/mobile-phone.svg'/>
                    <span>{item.tele}</span>
                </div>
                <div className={style.card_primary}>
                    <img src='./images/Icons/growth.svg'/>
                    <span>Salaire demandé</span>
                </div>
                <div className={style.card_secondary}>
                    Vise entre {item.compensation.fixe}K et {item.compensation.fixe+item.compensation.variable}K
                </div>
                <div className={style.card_secondary}>
                    <div className={style.bar_container}>
                        <div className={style.var}>
                            <div className={style.fix}>
                                {item.compensation.fixe}k
                            </div>
                            <div>{item.compensation.variable}k</div>
                        </div>
                    </div>
                </div>
                <div className={style.card_primary}>
                    <img src='./images/Icons/dispo.png'/>
                    <span>Disponibilité</span>
                </div>
                <div className={style.card_secondary}>
                    {item.dispo.date} de préavis
                </div>
                <div className={style.card_secondary}>
                    {item.dispo.commentaire}
                </div>
           </div>
        </div>
    )
}

export default Card
