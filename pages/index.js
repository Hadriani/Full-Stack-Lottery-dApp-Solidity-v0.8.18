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
      <div className={style.menucontainer}>
        <div className={style.dropdown}>
          <button className={style.dropbtn}>Menu</button>
          <div className={style.dropdowncontent}>
            <Link href="/about">Instructions</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>
      <PotCard />
      <Table />
    </div>

  )
};
