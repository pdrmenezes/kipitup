from pyscript import document

def print_text(event):
    input_field = document.querySelector("#file_url")
    file_url = input_field.value
    output_span = document.querySelector("#output_span")
    output_span.innerText = file_url