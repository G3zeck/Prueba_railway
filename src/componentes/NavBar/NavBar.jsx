"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <section className={styles.navbar_section}>
        <div className={styles.navbar_container}>
            <div className={styles.navbar_logo}>
                <Image src='/logo_blitz.png' alt='logo' width={100} height={100} />
            </div>
            <ul className={styles.navbar_links}>
                <li className={styles.nav_items}><Link className={styles.links} href={"/"}>INICIO</Link></li> 
                <li className={styles.nav_items}><Link className={styles.links} href={"/"}>NUESTRA FLOTA</Link></li>
                <li className={styles.nav_items}><Link className={styles.links} href={"/SobreNosotros"}>QUIENES SOMOS</Link></li>
                <li className={styles.nav_items}><Link className={styles.links} href={"/Terminos"}>TERMINOS Y CONDICIONES</Link></li>
                <li className={styles.nav_items}><Link className={styles.links} href={"/"}>CONTACTO</Link></li>
            </ul>
            <div>
              <span className={styles.open} onClick={()=>{setMenuOpen(!menuOpen)}}><FontAwesomeIcon icon={faBars} /></span>
            </div>
            {
              menuOpen ? 
              <div className={styles.responsive_menu}>
              <span className={styles.close} onClick={()=>{setMenuOpen(!menuOpen)}}><FontAwesomeIcon icon={faXmark} /></span>
                <ul className={styles.responsive_menu_links}>
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>INICIO</Link></li> 
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>NUESTRA FLOTA</Link></li>
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>QUIENES SOMOS</Link></li>
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>TERMINOS Y CONDICIONES</Link></li>
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>RESERVAS</Link></li>
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>PRECIOS</Link></li>
                <li className={styles.resposive_nav_items}><Link className={styles.responsive_links} href={"/"}>CONTACTO</Link></li>
            </ul>
            </div>
             : undefined
            }
            
        </div>
    
    </section>
  )
}

export default NavBar