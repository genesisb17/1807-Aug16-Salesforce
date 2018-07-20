function addIOPair(label, transform) {
  const div = $('<div class="jumbotron col-sm-4"></div>');
  const output = $('<span></span>');
  const input = $('<input type="text">');
  const update = $('<input type="button" value="update">');

  div.append($(`<h3>${label}</h3>`));
  div.append(output);
  div.append($('<br>'));
  div.append(input);
  div.append(update);
  $('#row').append(div);

  update.click(() => {
    output.empty();
    output.append(transform(input.val()));
  });
  input.change(() => update.click());

}

addIOPair('1. Fibonacci', fibHTML);
addIOPair('2. Bubble Sort', bubbleSortHTML);
addIOPair('3. Reverse String', reverseStr);
addIOPair('4. Factorial', factorialHTML);
addIOPair('6. EvenNumber', isEvenHTML);
addIOPair('7. Palindrome', isPalindromeHTML);
addIOPair('8. Shapes', printShapeHTML);
addIOPair('15. Descending order', descendingDigits);
