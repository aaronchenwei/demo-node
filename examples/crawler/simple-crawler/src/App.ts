import EventEmitter from 'eventemitter3';
import request from 'request-promise-native';

export class App {
  public static main() {
    const app = new App();
    app.run();
  }

  private html!: string;
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
    this.initEventEmitter();
  }

  public initEventEmitter() {
    this.eventEmitter.on('event1', async (args: number) => {
      console.log(args);
      await this.crawler(args);

      console.log('crawler finished');
      this.eventEmitter.emit('event2');
    });

    this.eventEmitter.on('event2', () => {
      console.log('event2');
    });
  }

  public run() {
    for (let i = 0; i < 10; i++) {
      this.eventEmitter.emit('event1', i);
    }
  }

  public async crawler(args: number) {
    try {
      console.time('request' + args);
      this.html = await request('https://github.com');
      console.timeEnd('request' + args);

      console.log(this.html.length);
    } catch (error) {
      console.log(error);
    }
  }

  public get htmlString() {
    return this.html;
  }
}
