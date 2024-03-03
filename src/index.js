async function parseData() {
  try {
    const response = await fetch("https://pythonserver.com/serviceId");
    const data = await response.json();

    if (data.status.ok) {
      return data;
    }
    return { error: "parse failed" };
  } catch (error) {
    return { error: "error on python service" };
  }
}

const callParserButton = document.querySelector("#parser-button");
callParserButton.addEventListener("click", () => parseData());
