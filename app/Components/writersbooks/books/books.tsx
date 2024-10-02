import { Card, Carousel, Col, Row } from 'antd'
import styles from '../styles.module.scss'
import Meta from 'antd/es/card/Meta'
import cards, { Book } from '../../../pages/writersbooks/books/booksList'
import React from 'react'
import Link from 'next/link'

export default () => {
    
    const groupedCards = React.useMemo(() => {
        const groups: Book[][] = [];
        for (let i = 0; i < cards.length; i += 4) {
            groups.push(cards.slice(i, i + 4));
        }
        return groups;
    }, [cards]);

    return(
        <div className={styles.container}>
        <h1 className={styles.title}>
        <Link className={styles.link} href="/pages/writersbooks/books">ქართულად ნათარგმნი წიგნები</Link>
        </h1>
            <Carousel autoplay arrows draggable>
            {groupedCards.map((group, index) => (
                <div key={index}>
                    <Row gutter={[16, 16]} justify="center">
                        {group.map(({ id, title, imageUrl, text }) => (
                            <Col key={id} xs={24} sm={12} md={8} lg={6}>
                                <Card className={styles.card}
                                    cover={<img alt={title} src={imageUrl} className={styles.cardImage} />}
                                >
                                    <div className={styles.metaContainer}>
                                        <Meta title={<h4>{title}</h4>} description={<p>{text}</p>} />
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Carousel>
        </div>
    )
}