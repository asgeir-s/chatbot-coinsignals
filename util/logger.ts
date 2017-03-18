import * as _ from "ramda"

export const log = {
    info: _.curry(logMessage)("INFO"),
    error: _.curry(logMessage)("ERROR"),
    warning: _.curry(logMessage)("WARNING"),
    exception: exception,
    custom: logMessage,
    raw: console.log
}

function logMessage(logLevel: string, message: any, data: any) {
    console.log(JSON.stringify({
        "level": logLevel,
        "message": message,
        "data": data instanceof Array ? data.slice(0, 4).push("TRUNCATED...") : data
    }))
    return data
}

function exception(message: string, error: Error, stack: boolean = true) {
    return console.log(JSON.stringify({
        "level": "EXCEPTION",
        "message": message,
        "exceptionName": error.name,
        "exceptionMessage": error.message,
        "stack": stack ? error.stack : ""
    }))
}