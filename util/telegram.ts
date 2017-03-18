import { Message, Update } from './../types/base'

type TelegramUpdate = {
    update_id: number,
    message: TelegramMessage
}

type TelegramMessage = {
    message_id: number,
    from: {
        id: number,
        first_name: string,
        username: string
    },
    chat: {
        id: number,
        first_name: string,
        username: string,
        type: string
    },
    date: number,
    text: string
}

function toUpdate(tgUpdate: TelegramUpdate): Update {
    return {
        id: tgUpdate.update_id,
        message: toMessage(tgUpdate.message)
    }
}

function toMessage(tgMessage: TelegramMessage): Message {
    return {
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

export const convert = {
    toUpdate: toUpdate,
    toMessage: toMessage
}