import async from 'async';

export default class DemoAsync {
  static demo() {
    DemoAsync.demo1();
    DemoAsync.demo2();
  }

  static demo1() {
    const callOrder = [];

    async.setImmediate(() => {
      callOrder.push('three');
      console.dir(callOrder);
    });

    async.nextTick(() => {
      callOrder.push('two');
      // call_order now equals ['one','two']
      console.dir(callOrder);
    });

    callOrder.push('one');

    console.dir(callOrder);
  }

  static demo2() {
    const myFirstFunction = async.asyncify(callback => {
      return callback(null, 'one', 'two');
    });

    const mySecondFunction = async.asyncify((arg1, arg2, callback) => {
      // arg1 now equals 'one' and arg2 now equals 'two'
      callback(null, 'three');
    });

    const myLastFunction = async.asyncify((arg1, callback) => {
      // arg1 now equals 'three'
      callback(null, 'done');
    });

    async.waterfall(
      [myFirstFunction, mySecondFunction, myLastFunction],
      (err, result) => {
        console.log(result);
      }
    );
  }
}
