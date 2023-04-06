import React from 'react';
import Header from '../../components/Header'

import style from '../../styles/Home.module.css'

import Link from 'next/link';
import PotCardRules from '../../pages/about/PotCardRules';

export default function About() {

    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.menucontainer}>
                <div className={style.dropdown}>
                    <button className={style.dropbtn}>Menu</button>
                    <div className={style.dropdowncontent}>
                        <Link href="/about">Instructions</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Contact Us</Link>
                    </div>
                </div>
            </div>
            <PotCardRules />
            <div className={style.blank}></div>
        </div>
    )
};