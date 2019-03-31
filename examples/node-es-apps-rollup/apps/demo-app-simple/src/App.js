import DemoLodashFP from './DemoLodashFP';
import DemoEventEmitter from './DemoEventEmitter';
import DemoAsync from './DemoAsync';

export default class App {
  static main() {
    DemoLodashFP.demo();
    DemoEventEmitter.demo();
    DemoAsync.demo();
  }
}
