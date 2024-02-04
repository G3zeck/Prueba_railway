"use client"
import React, { useState } from 'react'
import styles from "./acordeon.module.css"
const Acordeon = () => {
    const [accordeon, setAcordeon] = useState()
    const content = [
        {
            title: 'Pepe mato a roberto',
            description: 'a su maquinola'
        },
        {
            title: 'Pepe mato a roberto',
            description: 'a su maquinola'
        },
        {
            title: 'Pepe mato a roberto',
            description: 'a su maquinola'
        },
    ]

    const acordeonToggle = (index) => {
            if(accordeon === index) {
                setAcordeon(null)
            }else{
                setAcordeon(index)
            }
    }
    return (
        <div className={styles.accordion_wrapper}>
            <h1>Preguntas frecuentes</h1>
            {content.map((item, index) => {
                return (
                    <div className={styles.first_info} key={index}>
                        <header className={styles.accordion_title} onClick={()=>{acordeonToggle(index)}}>{item.title} <span>+</span> </header>
                        <p className={`${styles.description} ${accordeon === index ? styles.openTab : ''}`}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Acordeon