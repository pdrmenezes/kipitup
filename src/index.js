import { loadPyodide } from "pyodide";

async function hello_python() {
  let pyodide = await loadPyodide();
  return pyodide.runPythonAsync("1+1");
}

const tryButton = document.querySelector("#try");
tryButton.addEventListener(
  "click",
  hello_python().then((result) => console.log("whoa!, Python says that 1+1 = ", result))
);
