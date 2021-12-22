import React from 'react'
import BottomBar from '../../components/BottomBar/BottomBar'

import styles from './DashboardPage.module.scss'


const DashboardPage = () => {
  return (
    <main className={styles.DashboardPage}>
      <section className={styles.DashboardPage_hero}>
        <div className={styles.DashboardPage_hero_content}>
          <h1 className={styles.DashboardPage_hero_content_ttl}>FoundersDAO Dashboard</h1>
          <p className={styles.DashboardPage_hero_content_desc}>Congratulations on being a member.</p>
        </div>
      </section>
      <BottomBar />
    </main>
  )
}

export default DashboardPage
