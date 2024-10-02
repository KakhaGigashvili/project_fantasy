import { Carousel } from "antd"
import styles from './board.module.scss'
import Link from "next/link"

export default () =>{
    return(
        <div className={styles.boardgame}>
    <h2><Link className={styles.w_link} href="/pages/boardgame">სამაგიდო თამაშები</Link></h2>
    <Carousel draggable autoplaySpeed={2000} autoplay>
        <div className={styles.boardgame_carousel}><img src="/boardgame/dnd.webp" alt="D&D"/><h4>დილიგები და დრაკონები</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/gloomhaven.jpeg" alt="Gloomhaven"/><h4>ბნელი ნავსაყუდელი</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/Mage_Knight.webp" alt="Mage Knight"/><h4>ჯადოქარი რაინდი</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/Descent.jpg" alt="Descent: Journeys in the Dark"/><h4>დაცემა: მოგზაურობა სიბნელეში</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/arkhamhorror.avif" alt="arkhamhorror"/><h4>საშინელება არკამში</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/Talisman.jpeg" alt="Talisman"/><h4>თილისმა</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/tlotr.jpg" alt="tlotr"/><h4>ბეჭდების მბრძანებელი: მოგზაურობა შუამიწეთში</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/Runebound.webp" alt="Runebound"/><h4>რუნებით შეკრული</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/MiceMystics.jpeg" alt="MiceMystics"/><h4>თაგვები და მისტიკა</h4></div>
        <div className={styles.boardgame_carousel}><img src="/boardgame/HeroQuest.jpeg" alt="HeroQuest"/><h4>გმირების ქვესტი</h4></div>
    </Carousel>
        </div>
    )
}