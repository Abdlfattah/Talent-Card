import React from 'react'
import style from './style.css'

function Info({item}) {
    const list=[
        {
            name:'contexte',
            title:'Contexte'
        },
        {
            name:'experience',
            title:'Dernières expériences'
        },
        {
            name:'formation',
            title:'Formations'
        },
        {
            name:'skills',
            title:'Compétance'
        },
        {
            name:'perso',
            title:'Personnalité'
        },
    ]

    const renderInfos = () =>(
        list.map((elem,i)=>{
            if(elem.name==='experience'){
                return (
                    <div className={style.item_container} key={i}>
                        <div className={style.header}>
                            <div className={style.triangle}/>
                            <div className={style.title}>{elem.title}</div>
                        </div>
                        <div className={style.info_content}>
                            <div><b>{item[elem.name].title}</b></div>
                           {item[elem.name].content.map((content,i)=>(
                               <div key={i} className={style.exper_container}>
                                    - {content}
                               </div>
                           ))}
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className={style.item_container} key={i}>
                        <div className={style.header}>
                            <div className={style.triangle}/>
                            <div className={style.title}>{elem.title}</div>
                        </div>
                        <div className={style.info_content}>
                            {item[elem.name]}
                        </div>
                    </div>
                )
            }
        })
    )
    return (
        <div className={style.info_container}>
            {renderInfos()}
        </div>
    )
}

export default Info
