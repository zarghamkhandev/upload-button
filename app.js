let button = document.querySelector(".button");
let sleep = time => new Promise(resolve => setTimeout(resolve, time));
let link = document.querySelector(".link");

link.addEventListener("click", myfunc);

async function myfunc() {
  button.classList.add("uploading");
  await sleep(900);
  button.classList.add("upload-progress");
  await sleep(2800);
  button.classList.remove("upload-progress");

  button.classList.add("upload-after");
  await sleep(3000);
  button.classList.remove("uploading");
  button.classList.remove("upload-after");
}
