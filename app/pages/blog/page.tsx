import Link from "next/link";
import React from "react";
import Button from '../../Components/button/button';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddBlogButton = () => {
    return (
        <div>
            <Link href={'/pages/blog/addblog'} className={styles.link}>
                <Button className={styles.button} >
                    <FontAwesomeIcon width={20} icon={faPlus} />
                    დაამატეთ ბლოგი
                </Button>
            </Link>
        </div>
    );
};

export default AddBlogButton;
