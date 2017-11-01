// let exercise: reuse filtering logic
const isOdd = number => number % 2
const justOdds = obs$ => obs$.filter(isOdd); 

const obs1to10 = Rx.Observable.of(1, 2, 3, 4, 5, 6, 7, 9, 10);
const obs10to20 = Rx.Observable.of(11, 12, 13, 14, 15, 16, 17, 19, 20);

obs1to10.let(justOdds).subscribe(console.log);
obs10to20.let(justOdds).subscribe(console.log);
