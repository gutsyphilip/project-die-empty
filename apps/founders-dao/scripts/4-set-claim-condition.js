import sdk, { config } from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(config.BUNDLE_DROP_ADDRESS);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1,
        });


        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Sucessfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()