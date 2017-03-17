import { bot } from './bot'

export function hello(event, context, callback) {
  bot(event)
    .then(res => {
      return {
        statusCode: 200,
        body: res
      }
    })
    .then(_ => (console.log('Respondse: ' + JSON.stringify(_, null, 2)), _))
    .then(result => callback(null, result))

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
