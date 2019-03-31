import pImmediate from 'p-immediate';
import pTry from 'p-try';
import pWaterfall from 'p-waterfall';

const getEmoji = name => {
  return name === 'unicore' ? '🦄' : '';
};

export default class DemoPFun {
  static demo() {
    DemoPFun.demo1();
    DemoPFun.demo2();
  }

  static demo1() {
    (async () => {
      const tasks = [
        initialValue => getEmoji(initialValue),
        previousValue => `I ❤️ ${previousValue}`,
      ];

      console.log(await pWaterfall(tasks, 'unicorn'));
      // => 'I ❤️ 🦄'
    })();
  }

  static demo2() {
    (async () => {
      await pImmediate();

      Promise.resolve()
        .then(() => {
          console.log('promise1');
        })
        .then(() => {
          console.log('promise2');
        });

      // Executed in the next event loop
      console.log('🦄');
    })();
  }

  static demo3() {
    (async () => {
      await pTry(() => {
        console.log('here 1');
      });
      console.log('here 2');
    })();
  }
}
