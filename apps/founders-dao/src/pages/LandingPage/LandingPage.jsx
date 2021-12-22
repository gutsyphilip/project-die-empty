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
            Join now(Connect wallet)
          </div>
        </div>
      </section>
      <section className={styles.LandingPage_about}>
        <div>{" "}</div>
        <div>
          <h4>The idea</h4>
          <div>
            <p>This is an experimental project that is aimed at creating a community for makers and early stage founders to work together to improve their chances of success. My goal here is to achieve this while exploring the potential of Web 3.0 and hopefully discover some of its flaws and limitations.</p>
            <br />
            <div>
              <h5>How it works</h5>
              <ol>
                <li>
                  Authenticate by connecting your metamask wallet. If you don't have metamask installed, follow the instructions <a href='https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask' target="_blank" rel="noreferrer">here to set it up.</a>
                </li>
                <li>
                  Mint your FREE membership NFT(You will pay some vary small amount for gas fees.)
                </li>
                <li>
                  <b>WIP:</b> Once, you have minted your NFT successfully, you will gain access to the dashboard where you can join the discord community and vote on decisions to be made().
                </li>
                <li><b>WIP:</b>The governance token $FOUNDR will be created and issued via an Airdrop to initial members and will subsequently be earned via interaction within the community. This could either be through the weekly syncs or providing support on discord. More on this later. Okay bye. </li>
              </ol>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  )
}

export default LandingPage
