import React from 'react';
import Header from '../../components/Header'

import style from '../../styles/Home.module.css'

import Link from 'next/link';
import PotCardRules from '../../pages/about/PotCardRules';

export default function About() {

    return (
        <div className={style.wrapper}>
            <Header />
            <div>
                <ul className={style.headblocks}>
                    <il className={style.about}>
                        <Link href="/">Home</Link>
                    </il>
                    <il className={style.leaderboard}>Leaderboard</il>
                    <il className={style.us}>Contact Us</il>
                </ul>
            </div>
            <PotCardRules />
            <div className={style.blank}></div>
        </div>
    )
};