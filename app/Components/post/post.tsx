import { Carousel } from "antd"
import posts from '../../pages/posts/posts'
import Link from "next/link"
import styles from './post.module.scss'

export default () => {
    return(
        <div className={styles.posts}>
        <Carousel autoplaySpeed={2000} autoplay draggable dotPosition="top">
                {
                    posts.map((post) => (
                        <div key={post.id}>
                            <h3>
                            <Link href={post.linkUrl} className={styles.link}>{post.title}</Link>
                            </h3>
                            <img src={post.imageUrl} alt={post.title} loading="lazy" />
                        </div>
                    ))
                }
             </Carousel>
                </div>
    )
}