console.log('this is calculator')
let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button')
screenValue = ''

function isNumber(n) {
    return ((!isNaN(parseFloat(n))) && (!isNaN(n - 0)))
}

document.addEventListener('keypress', (e) => {
    //     if(!(isNumber(e.key))){
        //      let screen = document.getElementById('screen')
        //      screen.value="";
        
        //  }
        
        if ((isNumber(e.key))||(e.key === 'Enter')) {
         
            
        if (e.key === 'Enter') {

            // let submit1 = document.getElementById('submit')
            // submit1.addEventListener('click', () => {
            console.log('thdi id clikck')
            let screen = document.getElementById('screen')

             input += screen.value;
            screen.value = eval(input)
            // })
        }
 }

 else if(!(isNumber(e.key))){
    let screen = document.getElementById('screen')

     screen.value="";
    screen.value.substr(0,length-1)
   screen.value.reset();
 }

})



for (key of buttons) {
    key.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText)

        if (buttonText == '*') {
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'AC') {
            screenValue = ""
            screen.value = screenValue

        }


        else if (buttonText == '=') {
            screen.value = eval(screenValue)

        }
        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })


}

// for (item of buttons) {
    //     item.addEventListener('click', (e) => {
        //         buttonText = e.target.innerText;
        //         console.log('Button text is ', buttonText);
        //         if (buttonText == 'X') {
            //             buttonText = '*';
            //             screenValue += buttonText;
            //             screen.value = screenValue;
            //         }
            //         else if (buttonText == 'C') {
                //             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }


// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'AC') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     })
// }
