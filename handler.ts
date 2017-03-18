import * as Telegram from './util/telegram'
import { bot } from './bot'
import { log } from './util/logger'

let lastUpdateId = -1

export function handle(event, context, callback) {
  const update = Telegram.convert.toUpdate(JSON.parse(event.body))
  log.custom("UPDATE", "received new update", update)
  if (update.id > lastUpdateId) {
    return bot(update.message)
      .then(res => {
        return {
          statusCode: 200,
          body: res
        }
      })
      .then(_ => log.custom('RESULT', 'SUCCESS: returning result', _))
      .then(result => callback(null, result))
      .catch(error => {
        log.exception("unknow exception", error)
        return callback({
          statusCode: 500,
          data: "internal server error",
        }, null)
      })
  }
  else {
    log.warning("received a update that was already processed")
    return callback(null, 'ignored: already processed')
  }
}