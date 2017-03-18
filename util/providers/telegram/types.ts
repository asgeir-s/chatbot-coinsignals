export type TelegramUpdate = {
    update_id: number
    message: TelegramInMessage
}

export type TelegramInMessage = {
    message_id: number | string
    from: {
        id: number | string
        first_name: string
        username: string
    },
    chat: {
        id: number | string
        first_name: string
        username: string
        type: string
    },
    date: number
    text: string
}

export type TelegramOutMessage = {
    chat_id: number | string
    text: string
    parse_mode?: "Markdown" | "HTML"
    reply_to_message_id?: number | string,
    reply_markup?: Keyboard | InlineKeyboard | undefined
}

export type Keyboard = {
    keyboard: Array<Array<{ text: string }>>,
    resize_keyboard?: boolean,
    one_time_keyboard?: boolean
}

export type InlineKeyboard = {
    inline_keyboard: Array<Array<{
        text: string,
        url?: string,
        callback_data?: any
    }>>
}