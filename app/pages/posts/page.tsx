import { Key, useState } from "react";
import styles from './page.module.scss'
import posts from './posts'

export default () => {

    const renderTextWithHeadings = (text: string) => {
        return text.split('\n').map((line: string, index: Key | null | undefined) => {
            if (/^\d+\./.test(line.trim())) {
                return <h4 key={index}>{line.trim()}</h4>;
            } else {
                return <p key={index}>{line.trim()}</p>;
            }
        });
    };

    return(
        <div className={styles.main_container}>
        <div className={styles.container}>
        {
            posts.map((post) => (
                <div className={styles.border} key={post.id}>
                    <h2 key={post.id}>{post.title}</h2>
                    {renderTextWithHeadings(post.text)}
                </div>
            ))
        }
        </div>
            </div>
    )
}