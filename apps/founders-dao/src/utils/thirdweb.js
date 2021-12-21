import { ThirdwebSDK } from "@3rdweb/sdk";

export const sdk = new ThirdwebSDK("rinkeby");

// We can grab a reference to our ERC-1155 contract.
export const bundleDropModule = sdk.getBundleDropModule("0x845f754554c7F372A9734511A1c4E89c887E1C52");

