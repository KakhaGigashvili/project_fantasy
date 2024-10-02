import styles from './mainpage.module.scss'
import Writers from '../../Components/writersbooks/writers/writers'
import Books from '../../Components/writersbooks/books/books'
import Boardgame from '@/app/Components/boardgame/boardgame'
import Map from '@/app/Components/map/map'
import Topic from '@/app/Components/topic/topic'
import Ganres from '@/app/Components/ganres/ganres'
import Post from '@/app/Components/post/post'
import Blog from '@/app/Components/blog/blog'

export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.first_container}>
                    <Post />
                    <Ganres />
                    <Topic />
                    <Map />
                    <Boardgame />
                    <Blog />
            </div>
            <div className={styles.second_container}>
                    <Writers />
            </div>
            <div className={styles.third_container}>
                    <Books />
            </div>
        </div>
    )
}