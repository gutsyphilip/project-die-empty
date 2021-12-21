import sdk, { config } from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(config.BUNDLE_DROP_ADDRESS);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "FoundersDAO Membership NFT",
                description: "This NFT will give you access to FoundersDAO!",
                image: readFileSync("scripts/assets/membership-nft.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()