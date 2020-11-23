export type Transformer<I, O> = (generator: AsyncGeneratorFn<I>) => AsyncGeneratorFn<O>;
export type Promisable<T> = T | Promise<T>;
export type AnyIterable<T> = Iterable<T> | AsyncIterable<T>;
export type GeneratorFn<T> = () => IterableIterator<T>;
export type AsyncGeneratorFn<T> = () => AsyncIterableIterator<T>;
export type AnyGeneratorFn<T> = GeneratorFn<T> | AsyncGeneratorFn<T>;
export type AsyncMapFn<I, O> = (value: I) => Promisable<O>;
export type AsyncFilterFn<T> = (value: T) => Promisable<boolean>;
export type AsyncTapFn<T> = (value: T) => Promisable<any>;
export type Fromable<T> = PullableLike<T> | AnyIterable<T> | AsyncGeneratorFn<T>;

export interface PullableLike<T> extends AsyncIterable<T> {
  pipe(): PullableLike<T>;

  pipe<U>(
    op1: Transformer<T, U>,
  ): PullableLike<U>;

  pipe<T1, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, U>,
  ): PullableLike<U>

  pipe<T1, T2, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, T4, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, T4>,
    op5: Transformer<T4, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, T4, T5, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, T4>,
    op5: Transformer<T4, T5>,
    op6: Transformer<T5, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, T4, T5, T6, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, T4>,
    op5: Transformer<T4, T5>,
    op6: Transformer<T5, T6>,
    op7: Transformer<T6, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, T4, T5, T6, T7, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, T4>,
    op5: Transformer<T4, T5>,
    op6: Transformer<T5, T6>,
    op7: Transformer<T6, T7>,
    op8: Transformer<T7, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, T4, T5, T6, T7, T8, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, T4>,
    op5: Transformer<T4, T5>,
    op6: Transformer<T5, T6>,
    op7: Transformer<T6, T7>,
    op8: Transformer<T7, T8>,
    op9: Transformer<T8, U>,
  ): PullableLike<U>

  pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(
    op1: Transformer<T, T1>,
    op2: Transformer<T1, T2>,
    op3: Transformer<T2, T3>,
    op4: Transformer<T3, T4>,
    op5: Transformer<T4, T5>,
    op6: Transformer<T5, T6>,
    op7: Transformer<T6, T7>,
    op8: Transformer<T7, T8>,
    op9: Transformer<T8, T9>,
    op10: Transformer<T9, U>,
  ): PullableLike<U>
}
