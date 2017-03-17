export async function bot(message) {
    return 'got message: ' + JSON.stringify(message, null, 2)
}