export type Update = {
    id: number
    message: InMessage
}

export type Responds = {
    statusCode?: number // only used when failing. If success is true 200 is always returned
    data: any
    success: boolean
}

export type User = {
    id: number | string
    name: string
    username: string
}

export type InMessage = {
    provider: string,
    id: number | string
    from: User
    timestamp: number
    content: string
}

export type MessageContent = {
    text: string
    contentType?: "Markdown" | "HTML",
    keyboard?: Keyboard
    buttons?: Array<Array<Button>>
}

export type OutMessage = {
    provider: string,
    targetChat: number | string
    content: MessageContent
}

export type Keyboard = {
    buttons: Array<Array<string>>,
    resize?: boolean,
    oneTime?: boolean
}

export type Button = {
    text: string,
    url?: string,
    callbackData?: string
}
