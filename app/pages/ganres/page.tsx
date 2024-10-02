import styles from './page.module.scss'
import ganresData from './ganres';

export default function GanresComponent() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        {
          ganresData.map((genre) => (
            <div key={genre.id}>
              <h2>{genre.title}</h2>
              <p>{genre.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
