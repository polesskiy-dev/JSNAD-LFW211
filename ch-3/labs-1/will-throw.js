function f (n = 99) {
  if (n === 0) {
    debugger;
    throw Error()
  }
  f(n - 1)
}
f()

