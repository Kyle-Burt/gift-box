import { AppState } from "../AppState.js"
import { giftServices } from "../services/GiftService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawGift() {
    const gift = AppState.Gifts
    let template = ''
    gift.forEach(gift => template += gift.GTemplate)
    setHTML('giftList', template)
}


export class GiftsController {
    constructor() {
        console.log('Controller Working')

        this.getGifts()
        AppState.on('Gifts', _drawGift)
    }

    async getGifts() {
        try {
            giftServices.getGifts()
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

    async createGift(event) {
        try {
            event.preventDefault()
            const form = event.target
            const giftData = getFormData(form)
            console.log('Created gift', giftData);
            await giftServices.createGift(giftData)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)

        }
    }

}
