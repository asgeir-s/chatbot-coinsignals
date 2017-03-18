import { OutMessage, MessageContent } from '../types/base'
import * as Telegram from './providers/telegram/sendMessage'

export function send(message: OutMessage) {
    if (message.provider == 'telegram') {
        return Telegram.send(message)
    }
    else {
        throw new Error('Unknown provider. Provider: ' + message.provider)
    }
}

export function createSender(provider, targetChat) {
    return (message: MessageContent) => {
        send({
            "provider": provider,
            "targetChat": targetChat,
            "content": message
        })
    }
}