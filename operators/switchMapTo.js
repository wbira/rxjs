const button = document.getElementById("btn");
const clicks$ = Rx.Observable.fromEvent(button, "click");

const fetchTodos = Rx.Observable.from(
  fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
);

clicks$
  .switchMapTo(fetchTodos)
  .map(todos => {
    return todos.filter(todo => todo.completed);
  })
  .subscribe(console.log);
