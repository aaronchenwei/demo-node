import EventEmitter from 'eventemitter3';
import pImmediate from 'p-immediate';
import pTry from 'p-try';
import { makeEnum } from './utils';

const EventTypes = makeEnum('event1', 'event2');

export default class DemoEventEmitter {
  static demo() {
    const instance = new DemoEventEmitter();
    instance.start();
  }

  constructor() {
    this.initEventEmiiter();
  }

  initEventEmiiter() {
    this.eventEmitter = new EventEmitter();

    this.eventEmitter.on(EventTypes.event1, async () => pTry(this.noop));
    this.eventEmitter.on(EventTypes.event2, async obj =>
      pTry(this.asyncnoop, obj)
    );
  }

  start() {
    this.eventEmitter.emit(EventTypes.event1);
  }

  asyncEventHandler = cb => async () => {
    await pImmediate();
    cb();
  };

  noop = () => {
    console.log('noop', this);
    this.eventEmitter.emit(EventTypes.event2, { a: 1, b: 2 });
  };

  asyncnoop = async obj => {
    console.log(obj);
    await pImmediate();
    console.log('asyncnoop', this);
  };
}
