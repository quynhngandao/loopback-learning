import {get} from '@loopback/rest';
// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

export class TestController {
  @get('/hello')
  hello(): string {
    return 'Hello from Loopback 4';
  }
}
