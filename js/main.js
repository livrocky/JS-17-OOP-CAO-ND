console.log("main");

const formEl = document.forms[0];

formEl.addEventListener("submit", (event) => {
  //stabdom perkrovima ir issiuntima per html
  event.preventDefault();
  console.log("js in control");
  const inputVal = formEl.elements.fullName.value;
  console.log("inputVal===", inputVal);

  const proc = new ProcessInput(inputVal);
  console.log("proc===", proc);

  new Person(proc.readyVal.name, proc.readyVal.lName);
});
