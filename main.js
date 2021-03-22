const calc = function calc() {
  const a = parseInt(document.querySelector("#value1").value);
  const b = parseInt(document.querySelector("#value2").value);
  const op = document.querySelector("#operator").value;
  const calculate;
  if (op == "add") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  }
  return;
  console.log(calculate);

  document.querySelector("#result").innerHTML = calculate;
};
