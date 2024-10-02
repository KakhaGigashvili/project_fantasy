'use client'

import { useEffect, useState } from 'react';
import styles from "./navigation.module.scss"
import Link from "next/link"
import Image from "next/image"

export default () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); 
    }, []);

    if (!mounted) return null;

    return (
        <nav className={styles.navigation}>
            <Link href="/">
                <Image 
                    className={styles.img} 
                    src="/images/logo-removebg-preview.png" 
                    alt="fantasy-icon" 
                    width={100} 
                    height={50}
                    priority 
                />
            </Link>
            <ul className={styles.main_nav}>
                <li>
                  <Link className={styles.link} href="/">მთავარი</Link>
                </li>
                <li><Link className={styles.link} href='/pages/posts'>პოსტები</Link></li>
                <li>
                  <Link className={styles.link} href="/pages/ganres">ჟანრები</Link>
                </li>
                <li><Link className={styles.link} href="/pages/writersbooks/writers">ავტორები</Link></li>
                <li><Link className={styles.link} href="/pages/writersbooks/books">წიგნები</Link></li>
                <li
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={styles.dropdown}
                >
                    <Link className={styles.link} href="/pages/topic">თემები</Link>
                    {isDropdownOpen && (
                        <ul className={styles.dropdown_menu}>
                <li><Link href="/pages/topic/cosmere" className={styles.link}>კოსმიერი</Link></li>
                <li><Link href="/pages/topic/dune" className={styles.link}>დიუნი</Link></li>
                <li><Link href="/pages/topic/tlotr" className={styles.link}>ბეჭდების მბრძანებელი</Link></li>
                <li><Link href="/pages/topic/grishaverse" className={styles.link}>გრიშავერსი</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link className={styles.link} href="/pages/maps">რუკები</Link></li>
                <li><Link className={styles.link} href="/pages/boardgame">სამაგიდო თამაშები</Link></li>
                <li><Link className={styles.link} href="/pages/blog">ბლოგი</Link></li>
                <li><Link className={styles.link} href='/pages/contactus'>კონტაქტი</Link></li>
            </ul>
            <ul className={styles.register}>
                <li>
                    <Link className={styles.link} href="/pages/register">რეგისტრაცია</Link>
                    </li>
                <li>
                  <Link className={styles.link} href="/pages/loginpage">შესვლა</Link>
                </li>
            </ul>
        </nav>
    );
}
