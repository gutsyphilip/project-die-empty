import React, { useState } from 'react'
import { bundleDropModule } from '../../utils/thirdweb';
import MembershipContext from '../../context/MembershipContext';

import styles from './MintMembershipNFTPage.module.scss'
import BottomBar from '../../components/BottomBar/BottomBar';

const MintMembershipNFTPage = () => {
  const { updateContext } = React.useContext(MembershipContext);

  // isClaiming lets us easily keep a loading state while the NFT is minting.
  const [isClaiming, setIsClaiming] = useState(false);

  const mintNft = () => {
    setIsClaiming(true);
    // Call bundleDropModule.claim("0", 1) to mint nft to user's wallet.
    bundleDropModule
      .claim("0", 1)
      .then(() => {
        updateContext({ hasClaimedNFT: true });
        console.log(
          `🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${bundleDropModule.address}/0`
        );
      })
      .catch((err) => {
        console.error("failed to claim", err);
      })
      .finally(() => {
        setIsClaiming(false);
      });
  }

  return (
    <main className={styles.MintMembershipNFTPage}>
      <section className={styles.MintMembershipNFTPage_hero}>
        <div className={styles.MintMembershipNFTPage_hero_content}>
          <p className={styles.MintMembershipNFTPage_hero_content_ttl}>Welcome to foundersDAO. <span aria-label='confetti' role="img">🎉</span></p>
          <p className={styles.MintMembershipNFTPage_hero_content_desc}>Mint your free FoundersDAO Membership NFT to gain access.</p>
          <div
            className={styles.MintMembershipNFTPage_hero_content_btn}
            disabled={isClaiming}
            onClick={() => mintNft()}
          >
            {isClaiming ? "Minting..." : "Mint NFT"}
          </div>
        </div>
      </section>
      <BottomBar />
    </main>
  );
}

export default MintMembershipNFTPage
