import { Fromable, PullableLike } from "../types";
import { from } from "./from";
import { concat } from "../transformers/concat";

export function concatFrom<T1>(
  it1: Fromable<T1>,
): PullableLike<T1>;

export function concatFrom<T1, T2>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
): PullableLike<T1 | T2>;

export function concatFrom<T1, T2, T3>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
): PullableLike<T1 | T2 | T3>;

export function concatFrom<T1, T2, T3, T4>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
): PullableLike<T1 | T2 | T3 | T4>;

export function concatFrom<T1, T2, T3, T4, T5>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
  it5: Fromable<T5>,
): PullableLike<T1 | T2 | T3 | T4 | T5>;

export function concatFrom<T1, T2, T3, T4, T5, T6>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
  it5: Fromable<T5>,
  it6: Fromable<T6>,
): PullableLike<T1 | T2 | T3 | T4 | T5 | T6>;

export function concatFrom<T1, T2, T3, T4, T5, T6, T7>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
  it5: Fromable<T5>,
  it6: Fromable<T6>,
  it7: Fromable<T7>,
): PullableLike<T1 | T2 | T3 | T4 | T5 | T6 | T7>;

export function concatFrom<T1, T2, T3, T4, T5, T6, T7, T8>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
  it5: Fromable<T5>,
  it6: Fromable<T6>,
  it7: Fromable<T7>,
  it8: Fromable<T8>,
): PullableLike<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;

export function concatFrom<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
  it5: Fromable<T5>,
  it6: Fromable<T6>,
  it7: Fromable<T7>,
  it8: Fromable<T8>,
  it9: Fromable<T9>,
): PullableLike<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;

export function concatFrom<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  it1: Fromable<T1>,
  it2: Fromable<T2>,
  it3: Fromable<T3>,
  it4: Fromable<T4>,
  it5: Fromable<T5>,
  it6: Fromable<T6>,
  it7: Fromable<T7>,
  it8: Fromable<T8>,
  it9: Fromable<T9>,
  it10: Fromable<T10>,
): PullableLike<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;

/** @category Helper */
export function concatFrom<T>(... fromables: Fromable<T>[]): PullableLike<T> {
  const pullables = fromables.map(fromable => from(fromable));

  return from(pullables).pipe(concat());
}
