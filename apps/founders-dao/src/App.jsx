import React, { useEffect } from 'react';
import { useWeb3 } from "@3rdweb/hooks";

import LandingPage from './pages/LandingPage';
import MintMembershipNFTPage from './pages/MintMembershipNFTPage/MintMembershipNFTPage';
import DashboardPage from './pages/DashboardPage';


import { bundleDropModule, sdk } from "./utils/thirdweb"
import { MembershipContext } from './context';
import { DEFAULT_VALUES } from './context/MembershipContext';


function App() {
  const [state, setState] = React.useState(DEFAULT_VALUES);
  const { address, provider } = useWeb3();

  // The signer is required to sign transactions on the blockchain.
  // Without it we can only read data, not write.
  const signer = provider ? provider.getSigner() : undefined;

  const handleStateUpdate = (newState) =>
    setState((state) => ({ ...state, ...newState }));

  const renderUI = () => {
    if (!address) {
      return <LandingPage />
    }
    if (!state.hasClaimedNFT) {
      return <MintMembershipNFTPage />
    }
    return <DashboardPage />
  }

  useEffect(() => {
    sdk.setProviderOrSigner(signer);
  }, [signer]);

  useEffect(() => {
    if (address) {
      handleStateUpdate({ initializing: true })

      // Check if the user has the NFT by using bundleDropModule.balanceOf
      bundleDropModule
        .balanceOf(address, "0")
        .then((balance) => {
          // If balance is greater than 0, they have our NFT!
          if (balance.gt(0)) {
            console.log(address, balance.toNumber())
            handleStateUpdate({ hasClaimedNFT: true, initializing: false })
          } else {
            handleStateUpdate({ hasClaimedNFT: false, initializing: false })
            console.log("😭 this user doesn't have a membership NFT.")
          }
        })
        .catch((error) => {
          handleStateUpdate({ hasClaimedNFT: false, initializing: false })
          console.error("failed to retrieve nft balance", error);
        });
    } else {
      handleStateUpdate({ initializing: false })
    }


  }, [address]);



  return (
    <MembershipContext.Provider value={{ ...state, updateContext: handleStateUpdate }}>
      {state.initializing ? <p>Loading...</p> : renderUI()}
    </MembershipContext.Provider>
  )
}

export default App;
