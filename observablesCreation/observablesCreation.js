//ex 1
var firstObservable = Rx.Observable.create(function (observer) {
  return observer.next(42);
});

firstObservable.subscribe(console.log);

//ex 2

var multipleValues = Rx.Observable.create(function (observer) {
  observer.next(42);
  observer.next("Nefrette");
  setTimeout(() => { observer.next("Async") }, 1000)
})

multipleValues.subscribe(console.log)