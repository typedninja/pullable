import { Transformer } from "../types";

export function pipe<T>(): Transformer<T, T>;

export function pipe<I, O>(
  op1: Transformer<I, O>,
): Transformer<I, O>;

export function pipe<I, T1, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, T4, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, T4>,
  op5: Transformer<T4, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, T4, T5, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, T4>,
  op5: Transformer<T4, T5>,
  op6: Transformer<T5, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, T4, T5, T6, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, T4>,
  op5: Transformer<T4, T5>,
  op6: Transformer<T5, T6>,
  op7: Transformer<T6, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, T4, T5, T6, T7, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, T4>,
  op5: Transformer<T4, T5>,
  op6: Transformer<T5, T6>,
  op7: Transformer<T6, T7>,
  op8: Transformer<T7, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, T4, T5, T6, T7, T8, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, T4>,
  op5: Transformer<T4, T5>,
  op6: Transformer<T5, T6>,
  op7: Transformer<T6, T7>,
  op8: Transformer<T7, T8>,
  op9: Transformer<T8, O>,
): Transformer<I, O>;

export function pipe<I, T1, T2, T3, T4, T5, T6, T7, T8, T9, O>(
  op1: Transformer<I, T1>,
  op2: Transformer<T1, T2>,
  op3: Transformer<T2, T3>,
  op4: Transformer<T3, T4>,
  op5: Transformer<T4, T5>,
  op6: Transformer<T5, T6>,
  op7: Transformer<T6, T7>,
  op8: Transformer<T7, T8>,
  op9: Transformer<T7, T9>,
  op10: Transformer<T9, O>,
): Transformer<I, O>;

/** @category Transformer */
export function pipe<I, O>(... ops: Transformer<any, any>[]): Transformer<I, I> | Transformer<I, O> {
  if (ops.length === 0) {
    return function(generator) {
      return generator;
    }
  } else {
    return function (generator) {
      for (const op of ops)
        generator = op(generator);

      return generator;
    }
  }
}
