export function emptyError() {
  return new Error("No value emitted");
}

export function fromableError() {
  return new Error("Argument is not a fromable value");
}
