import { InMessage } from './types/base'
import fetch from 'node-fetch'
import { secret } from './secret';
import { send } from './util/sendMessage';

export async function bot(message: InMessage) {
    return send({
        "provider": 'telegram',
        "targetChat": message.from.id,
        "replayToMessageId": message.id,
        "content": "hei du"
    })
        .then(res => 'got in return: ' + JSON.stringify(res, null, 2))
}