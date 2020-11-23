import { AsyncGeneratorFn, Transformer, PullableLike } from "./types";

export class Pullable<T> implements PullableLike<T> {
  constructor(
    private generator: AsyncGeneratorFn<T>,
  ) {
  }

  [Symbol.asyncIterator](): AsyncIterator<T> {
    return this.generator();
  }

  public pipe<U>(... ops: Transformer<any, any>[]): PullableLike<T> | PullableLike<U> {
    if (ops.length === 0) {
      return this;
    } else {
      let generator: AsyncGeneratorFn<any> = this.generator;

      for (const op of ops)
        generator = op(generator);

      return new Pullable(generator as AsyncGeneratorFn<U>);
    }
  }
}
