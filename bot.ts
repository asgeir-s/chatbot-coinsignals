import { InMessage } from './types/base'
import fetch from 'node-fetch'
import { secret } from './secret'
import { createSender } from './util/sendMessage'
import * as Chat from './chat'
import * as R from 'ramda'

export async function bot(message: InMessage) {
    const send = createSender('telegram', message.from.id)

    if (message.content.match(/^\/start?/)) Chat.start(message.from.name).map(send)
}