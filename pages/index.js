import React from 'react';
import Header from '../components/Header'
import PotCard from '../components/PotCard'
import Table from '../components/Table'
import Link from 'next/link';

import style from '../styles/Home.module.css'

export default function Home() {

  return (

    <div className={style.wrapper}>
      <Header />
      <div>
        <ul className={style.headblocks}>
          <il className={style.about}>
            <Link href="/about">Instructions</Link>
          </il>
          <il className={style.leaderboard}>Leaderboard</il>
          <il className={style.us}>Contact Us</il>
        </ul>
      </div>
      <PotCard />
      <Table />
    </div>

  )
};
