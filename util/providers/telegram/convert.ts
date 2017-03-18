import { InMessage, OutMessage, Update } from '../../../types/base'
import { TelegramInMessage, TelegramOutMessage, TelegramUpdate } from './types';

export function toUpdate(tgUpdate: TelegramUpdate): Update {
    return {
        id: tgUpdate.update_id,
        message: toInMessage(tgUpdate.message)
    }
}

export function toInMessage(tgMessage: TelegramInMessage): InMessage {
    return {
        provider: 'telegram',
        id: tgMessage.message_id,
        from: {
            id: tgMessage.from.id,
            name: tgMessage.from.first_name,
            username: tgMessage.from.username
        },
        timestamp: tgMessage.date,
        content: tgMessage.text
    }
}

export function toOutMessage(message: OutMessage): TelegramOutMessage {
    return {
        chat_id: message.targetChat,
        text: message.content,
        parse_mode: message.contentType,
        reply_to_message_id: message.replayToMessageId
    }
}