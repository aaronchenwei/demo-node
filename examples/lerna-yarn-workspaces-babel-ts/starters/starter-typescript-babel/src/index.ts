import { autorun, computed, observable } from 'mobx';

class App {
  public static main() {
    console.log('Hello, World');

    const app = new App();
    app.demoMobX();
  }

  private demoMobX() {
    console.log(this);

    const numbers = observable([1, 2, 3]);
    const sum = computed(() => numbers.reduce((a, b) => a + b, 0));

    const disposer = autorun(() => console.log(sum.get()));
    // prints '6'
    numbers.push(4);
    // prints '10'

    disposer();
    numbers.push(5);
    // won't print anything, nor is `sum` re-evaluated
  }
}

App.main();
