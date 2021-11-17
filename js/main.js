//  contains function for checking binary palindrome step by step using object 'states'. and stores all the steps and  steps count.

function transition(word) {
    if (validateWord(word)) {

        /* Add each of the characters of the word into an array
              * along with a blank value for the machine to understand
              * the end of the input word while reading */
        let fragmentedWord = [...word.split(''), ''];
        /* Declaration of variables */
        let count = 0, position = 0, currentState = 0;
        let symbol, move, next_state, write;
        /* As long as the state is not final or if the word is not a palindrome
                * The machine states will be traversed */
        while (currentState != (turing.states.length - 1)) {
            /* This variable receives the JSON object as the symbol read */
            symbol = turing.states[currentState][fragmentedWord[position]];
            /* Displays step by step what is happening on the machine */
            showSteps(symbol, count, currentState, fragmentedWord[position]);
            /* If not a palindrome enter here */
            if (symbol == undefined) {
                defineFail(word);
                break;
            }
            /* Update variables with JSON values ​​*/
            move = symbol.move;
            next_state = symbol.next_state;
            write = symbol.write;
            /* Change current state*/
            currentState = next_state;
            /* Write machine write value to Array */
            fragmentedWord[position] = write;
            /* Move left or right in the Array*/
            position = move == 'right' ? position + 1 : position - 1;
            /* Increments the tape operations counter */
            count++;

            if (currentState == (turing.states.length - 1)) defineSuccess(word, count);
        }
        /* If the alphabet is invalid enter here */
    } else defineFail(word);
}



// for checking if input string is binary or not .if input is not a binary input then it returns false .used in above for checking if string is binary or not.
function validateWord(word) {
    let valueReturn = false;
    for (const i in word) {
        if (word.charAt(i) != 0 && word.charAt(i) != 1) valueReturn = false;
        else valueReturn = true;
    }
    return valueReturn;
}
