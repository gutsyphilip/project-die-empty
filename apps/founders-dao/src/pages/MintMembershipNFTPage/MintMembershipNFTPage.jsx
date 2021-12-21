import React, { useState } from 'react'
import { bundleDropModule } from '../../utils/thirdweb';
import MembershipContext from '../../context/MembershipContext';


const MintMembershipNFTPage = () => {
    const { updateContext } = React.useContext(MembershipContext);

    // isClaiming lets us easily keep a loading state while the NFT is minting.
    const [isClaiming, setIsClaiming] = useState(false);

    const mintNft = () => {
        setIsClaiming(true);
        // Call bundleDropModule.claim("0", 1) to mint nft to user's wallet.
        bundleDropModule
            .claim("0", 1)
            .catch((err) => {
                console.error("failed to claim", err);
                setIsClaiming(false);
            })
            .finally(() => {
                // Stop loading state.
                setIsClaiming(false);
                // Set claim state.
                updateContext({ hasClaimedNFT: true });
                // Show user their fancy new NFT!
                console.log(
                    `🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${bundleDropModule.address}/0`
                );
            });
    }

    return (
        <div className="mint-nft">
            <h1>Mint your free FoundersDAO Membership NFT</h1>
            <button
                disabled={isClaiming}
                onClick={() => mintNft()}
            >
                {isClaiming ? "Minting..." : "Mint your nft (FREE)"}
            </button>
        </div>
    );
}

export default MintMembershipNFTPage
