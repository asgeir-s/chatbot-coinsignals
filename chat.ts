import { MessageContent } from './types/base';

export function start(user): Array<MessageContent> {
    return [
        {
            text: `Hi, ${user}! Thanks for initiating me :)`,
            buttons: [
                [
                    { text: 'test1', url: 'https://coinslant.com' },
                    { text: 'test2', callbackData: JSON.stringify({ someJSonTest: 124 }) }
                ]
            ]
        },
        {
            text: "Do you want to subscribe to signals or publish your own?",
            keyboard: {
                buttons: [['subscribe', 'publish']],
                resize: true,
                oneTime: true
            }
        }
    ]
}