import { Carousel } from "antd"
import Link from "next/link"
import titles from '../../pages/topic/titles'
import styles from './topic.module.scss'

export default () => {
    return(
        <div className={styles.topics}>
        <h2><Link className={styles.w_link} href="/pages/topic">სამყაროები</Link></h2>
            <Carousel draggable autoplaySpeed={2000} dotPosition="left" autoplay className={styles.topic_carousel}>
            {  
            titles.map((title) =>(
                <div key={title.id}>
                <h1><Link  
                href={title.linkUrl}>
                    {title.title}
                </Link></h1>                             
                </div>
                ))
            }
            </Carousel>
        </div>
    )
}