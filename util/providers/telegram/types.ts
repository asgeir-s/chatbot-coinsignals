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
    reply_to_message_id?: number | string
}