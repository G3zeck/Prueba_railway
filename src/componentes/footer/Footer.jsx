import styles from './footer.module.css'


const Footer = () => {
  return (
    <section className={styles.footer_section}>
        <picture className={styles.image_container}>
            <img src="/logo_blitz.png" alt="" />
        </picture>
        <div className={styles.fastAcc_container}>
            <ul className={styles.fastAcc_list}>
                <li className={styles.fastAcc_item}>Inicio</li>
                <li className={styles.fastAcc_item}>Terminos y condiciones</li>
                <li className={styles.fastAcc_item}>Quienes somos</li>
                <li className={styles.fastAcc_item}>Contactanos</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer