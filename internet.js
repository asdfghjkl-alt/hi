function onClickBinary(event) {
  var x = parseInt(binary.value);
  var y = [];
  while (x > 1) {
    y.push(String(x % 2));
    x = (x - (x % 2)) / 2;
  }
  y.push(String(x % 2));
  y = y.reverse();
  y = y.join();
  y = y.replace(/,/g, "");
  binaryText.textContent = y;
}

binaryButton.onclick = onClickBinary;


function onClickAnalogue(event) {
  var x = analogue.value;
  console.log(x)
  analogueText.textContent = x;
}

analogueButton.onclick = onClickAnalogue;
