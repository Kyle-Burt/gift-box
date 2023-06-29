import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { GiftApi, api } from "./AxiosService.js"




class GiftServices {
    async getGifts() {
        const res = await GiftApi.get('api/gifts')
        console.log('got pictures', res.data)

        // let newGift = new Gift(res.data)
        let newGift = res.data.map(g => new Gift(g))
        AppState.Gifts = newGift
        console.log('gifts in the AppState', AppState.Gifts);
    }

    async createGift(giftData) {
        // const gift = AppState.Gifts
        const res = await api.post('api/gifts', giftData)
        console.log('crated gift', res.data)
        const newGift = new Gift(res.data)
        AppState.Gifts.push(newGift)
        AppState.emit('Gifts')

    }

}


export const giftServices = new GiftServices()