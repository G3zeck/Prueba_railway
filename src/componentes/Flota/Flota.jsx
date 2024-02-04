import React from 'react'
import styles from "./flota.module.css"
import Image from 'next/image'
const Flota = () => {
    return (
        <section className={styles.section_flota}>
            <h1>Nuestra flota</h1>
            <div className={styles.item_container}>

                <div className={styles.item}>
                    <img src="/CronosB.jpg"  />
                </div>
                <div className={styles.item}>
                    <img src="/CronosB.jpg"  />
                </div>
                <div className={styles.item}>
                    <img src="/CronosB.jpg"  />
                </div>
                <div className={styles.item}>
                    <img src="/LoganPB.jpg"  />
                </div>
                <div className={styles.item}>
                    <img src="/LoganPA.jpg"  />
                </div>
                <div className={styles.item}>
                    <img src="/Kwid.jpg"  />
                </div>
            </div>
        </section>
    )
}

export default Flota