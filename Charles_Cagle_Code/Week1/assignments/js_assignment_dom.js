function addIOPair(label, transform) {
  const div = $(`
    <div class="jumbotron col">
      <h3 class="text-nowrap">${label}</h3>
      <span class="output"></span><br>
      <input type="text" class="input form-control"><br>
      <input type="button" value="update" class="update btn btn-primary">
    </div>
  `);
  $('#row').append(div);

  const output = div.find('.output');
  const input = div.find('.input');
  div.find('.update').click(() => {
    output.empty();
    output.append(transform(input.val()));
  });
}

addIOPair('1. Fibonacci', fibHTML);
addIOPair('2. Bubble Sort', bubbleSortHTML);
addIOPair('3. Reverse String', reverseStr);
addIOPair('4. Factorial', factorialHTML);
addIOPair('6. EvenNumber', isEvenHTML);
addIOPair('7. Palindrome', isPalindromeHTML);
addIOPair('8. Shapes', printShapeHTML);
addIOPair('15. Descending order', descendingDigits);
