import { Carousel } from "antd"
import ganres from '../../pages/ganres/ganres'
import Link from "next/link"
import styles from './ganres.module.scss'

export default () => {
    return(
        <div className={styles.ganres}>
        <Carousel draggable autoplaySpeed={2000} autoplay>
            {
            ganres.map((ganre) => (
            <div key={ganre.id}>
            <h2><Link href='/pages/ganres' className={styles.link}>{ganre.title}</Link></h2>
            <p>{ganre.text}</p>
            </div>
            ))
            }
        </Carousel>
        </div>
    )
}