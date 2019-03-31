import add from 'lodash/fp/add';

export default class DemoLodashFP {
  static demo() {
    DemoLodashFP.testLodashFP();
  }

  static testLodashFP() {
    const addOne = add(1);
    console.log(addOne(1));
  }
}
