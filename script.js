let form = document.querySelector("form");
form.onsubmit = submit;
function submit(e) {
  e.preventDefault();
  // get input
  let input = document.querySelector("input");
  if (input.value === "fred") {
    alert("why hello there george");
  } else if (input.value === "george") {
    alert("hello hello fred");
  } else if (input.value === "ron") {
    alert("oh hi ron");
  } else if (input.value === "ginny") {
    alert("hiiii ginnyyy");
  } else if (input.value === "bill") {
    alert("yo bill whats up");
  } else if (input.value === "charlie") {
    alert("hey charles yknow dragons");
  } else if (input.value === "percy") {
    alert("hi perce hows school");
  } else if (input.value === "arthur") {
    alert("oh mr weasley i need to talk to you");
  } else if (input.value === "molly") {
    alert("thank you mrs weasley");
  } else {
    alert("you a weasley or ? (get out)");
  }
}
