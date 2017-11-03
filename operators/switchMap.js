const button = document.getElementById("btn");
const clicks$ = Rx.Observable.fromEvent(button, "click");

clicks$
  .switchMap(() => {
    const todosPromise = fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then(res => res.json());
    return Rx.Observable.from(todosPromise);
  })
  .map(todos => {
    return todos.filter(todo => todo.completed);
  })
  .subscribe(console.log);
