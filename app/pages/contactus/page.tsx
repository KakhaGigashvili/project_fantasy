import Button from '@/app/Components/button/button'
import styles from './page.module.scss'

export default () => {
    return(
        <div className={styles.container}>
            <div className={styles.contactus}>
            <h4>სახელი</h4>
            <input type="name" />
            <h4>მეილი</h4>
            <input type='mail' />
            <h4>ტექსტი</h4>
            <textarea className={styles.textarea} name="text"></textarea>
            <Button className={styles.button}> გაგზავნა </Button>
            </div>
            <div className={styles.background}></div>
        </div>
    )
}