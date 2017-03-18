import { OutMessage } from '../types/base'
import * as Telegram from './providers/telegram/sendMessage'
export function send(message: OutMessage) {
    //if (message.provider == 'telegram') {
        return Telegram.send(message)
    //}
}