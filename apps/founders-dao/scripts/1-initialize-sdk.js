import { ThirdwebSDK } from "@3rdweb/sdk"
import ethers from "ethers"
import dotenv from 'dotenv'
dotenv.config()

const getEnvVariable = (key) => {
    if (!process.env[key] || process.env[key] == "") {
        console.log(`Missing environment variable: ${key}`)
        return
    }
    return process.env[key]
}


export const config = {
    PRIVATE_KEY: getEnvVariable("PRIVATE_KEY"),
    WALLET_ADDRESS: getEnvVariable("WALLET_ADDRESS"),
    ALCHEMY_API_URL: getEnvVariable("ALCHEMY_API_URL"),
    APP_ADDRESS: "0xF69C5E3f4d877c1dA963a30c2FdeBb38dB177AB7",
    BUNDLE_DROP_ADDRESS: "0x845f754554c7F372A9734511A1c4E89c887E1C52",
    TOKEN_MODULE_ADDRESS: "0xD6ef164A510814338253c03924253001904a83cf"
}




const sdk = new ThirdwebSDK(new ethers.Wallet(config.PRIVATE_KEY, ethers.getDefaultProvider(config.ALCHEMY_API_URL)));

(
    async () => {
        try {
            const apps = await sdk.getApps();
            console.log("Your app address is:", apps[0].address);
        } catch (error) {
            console.error("Failed to get apps from the sdk", error);
            process.exit(1);
        }
    }
)()


export default sdk;