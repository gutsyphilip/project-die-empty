import { useWeb3 } from '@3rdweb/hooks';
import React from 'react'

import styles from './LandingPage.module.scss'

const LandingPage = () => {
    const { connectWallet } = useWeb3();
    return (
        <main>
            <section className={styles.LandingPage_hero}>
                <div className={styles.LandingPage_hero_content}>
                    <h1 className={styles.LandingPage_hero_content_ttl}>foundersDAO.</h1>
                    <p className={styles.LandingPage_hero_content_desc}>an inclusive community for makers and startup founders.</p>
                    <div className={styles.LandingPage_hero_content_btn} onClick={() => connectWallet("injected")} >
                        Join now
                    </div>
                </div>
            </section>
            <section className={styles.LandingPage_about}>
                <div>{" "}</div>
                <div>
                    <h4>The idea</h4>
                    <p>Earn $FOUNDR</p>
                </div>
                <div></div>
            </section>
        </main>
    )
}

export default LandingPage
