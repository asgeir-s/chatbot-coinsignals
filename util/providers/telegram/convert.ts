import { InMessage, OutMessage, Update, MessageContent } from '../../../types/base'
import { TelegramInMessage, TelegramOutMessage, TelegramUpdate, Keyboard, InlineKeyboard } from './types'

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
        text: message.content.text,
        parse_mode: message.content.contentType,
        reply_markup: getMarkup(message.content)
    }
}

function getMarkup(messageContent: MessageContent): Keyboard | InlineKeyboard | undefined {
    if (messageContent.keyboard != null) {
        return {
            keyboard: messageContent.keyboard.buttons.map(buttonRow => buttonRow.map(text => { return { text: text } })),
            resize_keyboard: messageContent.keyboard.resize,
            one_time_keyboard: messageContent.keyboard.oneTime
        }
    }
    else if (messageContent.buttons != null) {
        return {
            inline_keyboard: messageContent.buttons.map(buttonRow => buttonRow.map(button => {
                return {
                    text: button.text,
                    url: button.url,
                    callback_data: button.callbackData
                }
            })
            )
        }
    }
}