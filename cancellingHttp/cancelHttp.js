const userInput = document.getElementById("username");
const userTypeInSearchBox = Rx.Observable
  .fromEvent(userInput, "keyup")
  .map(() => userInput.value);

const fetchUsers = username =>
  Rx.Observable.from(
    fetch(`https://api.github.com/users/${username}`).then(res => res.json())
  );

userTypeInSearchBox
  .debounceTime(300)
  .switchMap(fetchUsers)
  .subscribe(console.log);
