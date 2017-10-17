//ex 1
var firstObservable = Rx.Observable.create(function (observer) {
  observer.next(42);
});

firstObservable.subscribe(console.log);

//ex 2

var multipleValues = Rx.Observable.create(function (observer) {
  observer.next(42);
  observer.next("Nefrette");
  setTimeout(() => { observer.next("Async") }, 1000)
})

multipleValues.subscribe(console.log)

//ex 3

var completedObservable = Rx.Observable.create(function (observer) {
  observer.next(42);
  observer.complete();
  observer.next('Should not emit this');
})

completedObservable.subscribe(console.log);

var errorObservable = Rx.Observable.create(function (observer) {
  observer.next('Starting http request');
  setTimeout(() => observer.error('whoops'), 1000);
});

errorObservable.subscribe(console.log, console.error)

//ex 4

//of operator emit values and then completes
var obs1 = Rx.Observable.of(42, 100, 200);
obs1.subscribe(console.log)

//ex 5

var obsArray = Rx.Observable.from([42, 100, 200]);
obsArray.subscribe(console.log)


//ex 6

var todosPromise = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
var obsPromise = Rx.Observable.fromPromise(todosPromise); //from also works
obsPromise.subscribe(console.log);

//ex 7 events

function addClickHandler(handler) {
  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  console.log("remove handler")
  document.removeEventListener('click', handler);
}

var clicks = Rx.Observable.fromEventPattern(
  addClickHandler,
  removeClickHandler
);

var clicksSubscription = clicks.subscribe(console.log);

setTimeout(() => { clicksSubscription.unsubscribe()}, 5000)