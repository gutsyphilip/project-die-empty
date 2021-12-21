import { ethers } from "ethers";
import sdk, { config } from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule(config.APP_ADDRESS);

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "FoundersDAO Membership Collection",
            description: "an inclusive community for makers and startup founders.",
            image: readFileSync("scripts/assets/header.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()