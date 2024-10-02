'use client'

import { Card} from "antd"
import cards from "./booksList"
import styles from './page.module.scss'
import Meta from "antd/es/card/Meta"
import React from "react"

export default () => {

    return(
            <div className={styles.container}>
             <h1 className={styles.title}>ავტორები</h1>
             <div className={styles.warp_card}>
                        {cards.map((card) => (
                            <Card className={styles.card}
                            cover={<img alt={card.title} src={card.imageUrl} className={styles.cardImage} />}
                            >
                                    <div className={styles.metaContainer}>
                                        <Meta title={<h4>{card.title}</h4>} description={<p>{card.text}</p>} />
                                    </div>
                                </Card>
                        ))}
                        </div>
                </div>
    )
}