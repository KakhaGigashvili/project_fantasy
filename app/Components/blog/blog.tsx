import Link from "next/link"
import styles from './blog.module.scss'

export default () =>{
    return(
        <div className={styles.blog}>
            <h1><Link className={styles.link} href="/pages/blog">ბლოგი</Link></h1>
        </div>
    )
}