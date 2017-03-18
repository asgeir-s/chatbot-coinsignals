import test from 'ava'
declare var require: any;

import { Responds } from './types/base'
import { handle } from './handler'
const event = require('./event')

test('foo', t => {
    t.pass()
})

function callHandler(handler, event) {
    return new Promise((resolve, reject) => {
        handler(event, {}, (fail, done) => fail ? reject(fail) : resolve(done))
    })
}

test('should return success status', async t => {
    const result = <Responds>await callHandler(handle, event)
    t.is(result.statusCode, 200)
})