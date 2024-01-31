function run_recursive() {
  let value = parseInt(document.getElementById("fib-recursive").value);
  let result;
  try {
    result = fib_recursive(value);
  } catch (e) {
    result = e.message;
  }
  document.getElementById("fib-recursive-result").innerText = result;
}

function run_iterative() {
  let value = parseInt(document.getElementById("fib-iterative").value);
  let result;
  try {
    result = fib_iterative(value);
  } catch (e) {
    result = e.message;
  }
  document.getElementById("fib-iterative-result").innerText = result;
}


function fib_recursive(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  return fib_recursive(x-1) + fib_recursive(x-2);
}


function fib_iterative(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;

  let back1 = 0;
  let back2 = 1;
  let result = 0;

  for (let count = 1; count <= x; ++count) {
    result = back1 + back2;
    back2 = back1;
    back1 = result;
  }

  return result;
}


document.getElementById("run-recursive").addEventListener("click", run_recursive);
document.getElementById("run-iterative").addEventListener("click", run_iterative);
