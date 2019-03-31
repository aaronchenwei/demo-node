import got from 'got';
import { of, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import util from 'util';

const inspectOptions = { showHidden: true, depth: null };

const createJsonClient = () =>
  got.extend({
    baseUrl: 'http://jsonplaceholder.typicode.com/',
    json: true,
  });

const process = async (url: string) => {
  try {
    const { body } = await createJsonClient().get(url);

    return body;
  } catch (error) {
    console.error(error);
  }
};

export const main = () => {
  const promiseSource = of('/posts').pipe(
    tap(val => {
      console.log(util.inspect(val, inspectOptions));
    }),
    switchMap(val => process(val)),
    tap(val => {
      console.log(util.inspect(val, inspectOptions));
    }),
    switchMap(val => from(val)),
    map((val: any) => val.title)
  );

  promiseSource.subscribe(val => console.log(`Done with ${val}`));
};
