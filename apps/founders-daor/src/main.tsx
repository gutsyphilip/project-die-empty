import React from "react";
import ReactDOM from "react-dom";
import "./styles/generic.scss";
import App from "./App.jsx";

import { ThirdwebWeb3Provider } from '@3rdweb/hooks';


// 4 stands for Rinkeby
const SUPPORTED_CHAIN_IDS = [4]
const connectors = {
  injected: {}
}


ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={SUPPORTED_CHAIN_IDS}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
