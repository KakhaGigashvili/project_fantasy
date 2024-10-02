import { Carousel } from 'antd'
import styles from './map.module.scss'
import Link from 'next/link'

export default () => {
    return(
        <div className={styles.maps}>
        <h1><Link className={styles.link} href="/pages/maps">რუკები</Link></h1>
        <Carousel draggable autoplaySpeed={2000} autoplay>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/got.jpg" alt="got" /></div>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/tlotr.jpg" alt="tlotr" /></div>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/grishaverse.jpg" alt="grishaverse" /></div>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/luthadel.jpg" alt="luthadel" /></div>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/witcher.jpg" alt="witcher" /></div>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/firstLaw.jpg" alt="firstLaw" /></div>
            <div className={styles.map_carousel}><img src="/maps/mapscarousel/narnia.jpg" alt="narnia" /></div>
        </Carousel>
        </div>
    )
}