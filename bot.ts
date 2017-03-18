import { Message } from './types/base'

export async function bot(message: Message) {
    return 'got message: ' + JSON.stringify(message, null, 2)
}