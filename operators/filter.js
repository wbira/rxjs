//filter odd numbers
const obs = Rx.Observable.of(1,2,3,4,5,6,7,8,9,10).filter(number => number % 2);

obs.subscribe(console.log);
