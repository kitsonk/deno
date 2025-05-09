// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';
const common = require('../common');
const { Writable } = require('stream');

{
  // Sync + Sync
  const writable = new Writable({
    write: common.mustCall((buf, enc, cb) => {
      cb();
      cb();
    })
  });
  writable.write('hi');
  writable.on('error', common.expectsError({
    code: 'ERR_MULTIPLE_CALLBACK',
    name: 'Error'
  }));
}

{
  // Sync + Async
  const writable = new Writable({
    write: common.mustCall((buf, enc, cb) => {
      cb();
      process.nextTick(() => {
        cb();
      });
    })
  });
  writable.write('hi');
  writable.on('error', common.expectsError({
    code: 'ERR_MULTIPLE_CALLBACK',
    name: 'Error'
  }));
}

{
  // Async + Async
  const writable = new Writable({
    write: common.mustCall((buf, enc, cb) => {
      process.nextTick(cb);
      process.nextTick(() => {
        cb();
      });
    })
  });
  writable.write('hi');
  writable.on('error', common.expectsError({
    code: 'ERR_MULTIPLE_CALLBACK',
    name: 'Error'
  }));
}
