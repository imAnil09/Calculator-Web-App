let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = Number('');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('You clicked', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            (screenValue == "" ? 'Enter the any value' : screen.value = eval(screenValue))
        }
        // else if (buttonText == '=') {
        //     screen.value = eval(screenValue);
        // }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}