import { App } from './App';

console.time('App');
App.main();
console.timeEnd('App');

process.on('SIGINT', () => {
  console.log('Ctrl +C is pressed');
  process.exit();
});
