import { OutMessage } from '../../../types/base'
import fetch from 'node-fetch'
import { secret } from '../../../secret';
import * as TelegramConvert from './convert';
import { TelegramInMessage } from './types';
import { log } from './../../logger';

export async function send(message: OutMessage) {
    const telegramOutMessage = TelegramConvert.toOutMessage(message)
    const token = secret.telegram.botToken
    console.log('body: ' + JSON.stringify(telegramOutMessage))

    const responds = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(telegramOutMessage)
    })

    const respondsBody = await responds.json()

    if (respondsBody.ok) {
        return TelegramConvert.toInMessage(respondsBody.result)
    }
    else {
        log.error('The responds was not successful', respondsBody)
        throw Error('The responds was not successful')
    }
}