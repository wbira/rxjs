//fetch todos and capitalize first letter of title
const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());

const capitalizeLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('')
const capitalizeTodo = todo => {
  return {
    ...todo,
    title: capitalizeLetter(todo.title)
  }
}
const capitalize = (todos) => todos.map(capitalizeTodo)
const obs = Rx.Observable.from(todosPromise).map(capitalize);



obs.subscribe(console.log)


