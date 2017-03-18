import { OutMessage } from '../../../types/base'
import fetch from 'node-fetch'
import { secret } from '../../../secret';
import * as TelegramConvert from './convert';
import { TelegramInMessage } from './types';

export async function send(message: OutMessage) {
    const telegramOutMessage = TelegramConvert.toOutMessage(message)
    const token = secret.telegram.botToken
    console.log('body: ' + JSON.stringify(telegramOutMessage))
    return await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(telegramOutMessage)
    })
        .then(res => res.text())
        .then(JSON.parse)
        .then(res => console.log(JSON.stringify(res)))
        //.then(TelegramConvert.toInMessage)
}
