const cards = Rx.Observable
  .range(1, 30)
  .bufferCount(3)
  .concatMap(x => Rx.Observable.of(x).delay(1000))
  .scan((x, y) => [...x, ...y])
  .subscribe(console.log);
