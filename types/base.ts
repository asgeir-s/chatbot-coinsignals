export type Update = {
    id: number,
    message: Message
}

export type Responds = {
    statusCode?: number // only used when failing. If success is true 200 is always returned
    data: any
    success: boolean
}

export type User = {
    id: number,
    name: string,
    username: string
}

export type Message = {
    id: number,
    from: User,
    timestamp: number,
    content: string
}