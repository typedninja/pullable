/** @ignore */
export function rejector(error: unknown): PromiseLike<never> {
  return {
    then: (_resolve: (value: never) => PromiseLike<never>, reject: (error: unknown) => PromiseLike<never>) => reject(error),
  }
}
