import { InMessage, OutMessage, Update } from '../types/base'
import * as TelegramConvert from './providers/telegram/convert'


export function toUpdate(provider: string, rawUpdate: any) {
    if (provider == 'telegram') {
        return TelegramConvert.toUpdate(rawUpdate)
    }
    else {
        throw new Error('Unknown provider. Provider: ' + provider)
    }
}