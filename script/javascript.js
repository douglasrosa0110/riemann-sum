const buttons = document.querySelectorAll('.mdc-button');
for (const button of buttons) {
  mdc.ripple.MDCRipple.attachTo(button);
}

const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}

const calculateMessageEl = document.querySelector('.calculate-message');
const calculateButton = document.querySelector('.calculate-button');

calculateButton.addEventListener('click', () => {
  y = document.querySelector('.calculus-y-input').value;
  beginX = parseInt(document.querySelector('.calculus-begin-x-input').value);
  endX = parseInt(document.querySelector('.calculus-end-x-input').value);
  divisions = parseInt(document.querySelector('.calculus-divisions-input').value);
  total = 0;

  absInterval = Math.abs(beginX - endX)
  baseOfRectangle = absInterval/divisions

  for (var i = 1; i <= divisions; i++) {
  	xPoint = beginX + baseOfRectangle*i
  	yWithVarsReplaced = y.replace(/x/, xPoint)
  	yAplicable = math.compile(yWithVarsReplaced).evaluate()
  	total += baseOfRectangle * yAplicable
  }

  calculateMessageEl.textContent = `result: ${total}`;
});

