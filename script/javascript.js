/** Initialize MDC Web components. */
const buttons = document.querySelectorAll('.mdc-button');
for (const button of buttons) {
  mdc.ripple.MDCRipple.attachTo(button);
}

const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}

/** Custom javascript code. */
const calculateMessageEl = document.querySelector('.calculate-message');
const calculateButton = document.querySelector('.calculate-button');

calculateButton.addEventListener('click', () => {
  
  const y = document.querySelector('.calculus-y-input').value;
  const inteval = document.querySelector('.calculus-interval-input').value;
  const divisions = document.querySelector('.calculus-divisions-input').value;

/*
  if (firstNameInput || lastNameInput) {
    name = firstNameInput + ' ' + lastNameInput;
  } else {
    name = '0.0';
  }
*/
	var total = (2-1)*divisions;

	//TODO

	calculateMessageEl.textContent = `result: ${total}`;

});

