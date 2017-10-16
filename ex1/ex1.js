var firstObservable = Rx.Observable.create(function(observer){
  return observer.next(42);
});

firstObservable.subscribe(console.log)