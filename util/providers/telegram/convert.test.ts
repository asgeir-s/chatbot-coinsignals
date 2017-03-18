import test from 'ava'
declare var require: any;

import * as TelegramConverter from './convert'
import { Update, OutMessage } from '../../../types/base'
import { TelegramUpdate, TelegramOutMessage } from './types';

test('should convert raw Telegram-updates to generic Update', async t => {
    const telegramUpdate: TelegramUpdate = {
        "update_id": 414361944,
        "message": {
            "message_id": 5,
            "from": {
                "id": 127969060,
                "first_name": "TradersBit",
                "username": "TradersBit_com"
            },
            "chat": {
                "id": 127969060,
                "first_name": "TradersBit",
                "username": "TradersBit_com",
                "type": "private"
            },
            "date": 1489833481,
            "text": "wally"
        }
    }
    const update: Update = TelegramConverter.toUpdate(telegramUpdate)
    t.is(update.id, telegramUpdate.update_id)
    t.is(update.message.provider, 'telegram')
    t.is(update.message.content, telegramUpdate.message.text)
    t.is(update.message.id, telegramUpdate.message.message_id)
    t.is(update.message.timestamp, telegramUpdate.message.date)
    t.is(update.message.from.id, telegramUpdate.message.from.id)
    t.is(update.message.from.username, telegramUpdate.message.from.username)
    t.is(update.message.from.name, telegramUpdate.message.from.first_name)
})

test('should convert generic OutMessage to Telegram-out-message', async t => {
    const outMessage1: OutMessage = {
        provider: 'telegram',
        targetChat: 123456,
        content: "some content",
        replayToMessageId: 9876,
        contentType: "HTML"
    }

    const outMessage2: OutMessage = {
        provider: 'telegram',
        targetChat: 321321,
        content: "some content22",
        replayToMessageId: 432432
    }

    const telegramOutMessage1: TelegramOutMessage = TelegramConverter.toOutMessage(outMessage1)
    const telegramOutMessage2: TelegramOutMessage = TelegramConverter.toOutMessage(outMessage2)

    t.is(telegramOutMessage1.chat_id, outMessage1.targetChat)
    t.is(telegramOutMessage1.parse_mode, outMessage1.contentType)
    t.is(telegramOutMessage1.reply_to_message_id, outMessage1.replayToMessageId)
    t.is(telegramOutMessage1.text, outMessage1.content)

    t.is(telegramOutMessage2.chat_id, outMessage2.targetChat)
    t.is(telegramOutMessage2.parse_mode, outMessage2.contentType)
    t.is(telegramOutMessage2.reply_to_message_id, outMessage2.replayToMessageId)
    t.is(telegramOutMessage2.text, outMessage2.content)

})