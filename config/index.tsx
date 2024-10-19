// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = '10ce0a0c6d13d5a92d6319d3eb3b8cb5'

if (!projectId) {
    throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks,
    // siweConfig: siweConfig // pass your siweConfig
})

export const config = wagmiAdapter.wagmiConfig