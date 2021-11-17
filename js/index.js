// containe all DOM for load button , check button etc.
// also conatins function for what to display in case of success , failure of binary palindrome check , clearing input tape ,clearing steps by step.


/**
 * Enabling page RUN button
 * as entered word in input and loaded onto tape
 */
document.getElementById('btn-load').addEventListener('click', () => {
    document.getElementById('btn-click').removeAttribute('disabled');
});
/**
 * When submitting the form, activates this function
 */
document.getElementById('form-submit').addEventListener("submit", (event) => {
    event.preventDefault();
    /* Clearing acceptance or rejection fields */
    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'none';
    document.getElementById('steps').style.display = 'none';
    clearSteps();
    /* Writing user input to tape */
    submitInTape(document.getElementById('input-value').value);

});
/**
 * Click the CHECK button to enter here
 */
document.getElementById('btn-click').addEventListener('click', () => {
    document.getElementById('btn-click').setAttribute('disabled', 'disabled');
    transition(document.getElementById('input-value').value);
    /* Clearing fields for next word */
    document.getElementById('input-value').value = '';
})
/**
 * If the word is a palindrome enter here
 */
function defineSuccess(word, count) {
    const success = document.getElementById('success');
    success.style.display = 'block';
    success.innerHTML =
        `<strong>${word}</strong> is a binary palindrome! Steps: <strong>${count}</strong>`;
    clearTape();
}
/**
 * If the word is NOT a palindrome enter here
 */
function defineFail(word) {
    const fail = document.getElementById('fail');
    fail.style.display = 'block';
    fail.innerHTML =
        `<strong>Rejected! (${word})</strong> is not a binary palindrome!`;
    clearTape();
}
/**
 * Adds to UI screen ribbon
 */
function submitInTape(word) {
    for (const i in word) {
        document.getElementsByTagName('li')[i]
            .innerHTML = word[i];
    }
}
/**
 * Tape wipe function
 */
function clearTape() {
    const list = document.getElementsByTagName("li");
    for (const element of list) {
        element.innerHTML = '';
    }
}
/**
 * Function for displaying step-by-step machine operation given an input
 */
function showSteps(item, steps, currentState, symbol) {
    const stepsBox = document.getElementById('all-steps');
    document.getElementById('steps').style.display = 'block';
    if (item != undefined) {
        const itemStep = document.createElement('p');
        itemStep.innerHTML = `<strong>Step: ${steps + 1}</strong> -> Read symbol: <strong>"${symbol}"</strong> - Write: <strong>"${item.write}"</strong> - Current state: <strong>q${currentState}</strong> - Move: <strong>${item.move}</strong> - Next state: <strong>q${item.next_state}</strong>`;
        itemStep.setAttribute('class', 'list-group-item');
        itemStep.setAttribute('style', 'width:55%; margin:auto;');

        stepsBox.appendChild(itemStep);
    }

}
/**
 * Function to clear screen step by step
 */
function clearSteps() {
    document.getElementById('all-steps').innerHTML = '';
}