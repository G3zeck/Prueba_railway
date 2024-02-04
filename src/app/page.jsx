import Image from 'next/image'
import styles from './page.module.css'
import PreSu from '@/componentes/Busqueda/PreSu'
import Trabajo from '@/componentes/Como_trabajamos/Trabajo'
import Flota from '@/componentes/Flota/Flota'
import Acordeon from '@/componentes/acordeon/Acordeon'

export default function Home() {
  return (
   <>
      <main>
        <div className={styles.container}>
          <PreSu/>
        </div>
          <Trabajo/>
          <Flota/>
        {/* <Acordeon /> */}
      </main>
   </>
  )
}
