// Alphabets
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const acode = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];

// Numbers
const beta = ['1','2','3','4','5','6','7','8','9','0'];
const bcode = ['.----','..---','...--','....-','.....','-....','--...','---..','----.','-----'];

// Special Characters
const delta = ['&',"'",'@',')','(',':',',','=','!','.','-','+','"','?','/'];
const dcode = ['.-...','.----.','.--.-.','-.--.-','-.--.','---...','--..--','-...-','-.-.--','.-.-.-','-....-','.-.-.','.-..-.','..--..','-..-.'];

var input = '';
var output = '';

document.getElementById("button").addEventListener("click", () => {
    let r1 = document.getElementById("morse");
    let r2 = document.getElementById("text");
  
    if (!r1.checked && !r2.checked){
        alert('Enter a valid option!');
    } else {
        input = document.getElementById("textInput").value;
        input = input.toLowerCase();

        if (r1.value === '1' && r1.checked)
            document.getElementById('textOutput').innerHTML = text_morse();
        if (r2.value === '2' && r2.checked)
            document.getElementById('textOutput').innerHTML = morse_text();
        input = '';
        output = '';
    }
});

// This function converts english text to morse code
function text_morse(){
    console.log('The given english text shall be converted into Morse Code.');
    let temp='';
    for (let i = 0; i<input.length; i++){
        temp = input.charAt(i) + '';
        //Checking if the character is an alphabet
        for (let j = 0; j<alpha.length; j++){
            if (temp===alpha[j]){
                output = output + acode[j] + '\u0020';
                console.log(acode[j]);
            }
        }
        //Checking if the character is a number
        for (let j = 0; j<beta.length; j++){
            if (temp===beta[j]){
                output = output + bcode[j] + '\u0020';
                console.log(bcode[j]);
            }
        }
        //Checking for special character
        for (let j = 0; j<delta.length; j++){
            if (temp===delta[j]){
                output = output + dcode[j] + '\u0020';
                console.log(dcode[j]);
            }
        }
        // Procedure for whitespace
        if (temp==='\u0020')
            output+=' / ';
    }
    return output;
}

// This function converts morse code to english text
function morse_text(){
    console.log('The given english morse shall be converted into English.');
    var temp='';
    input+='\u0020';
    for (let x = 0; x<input.length; x++){
        if (input.charAt(x)!=='\u0020')
            temp+=input.charAt(x);
        else{
            //Checking if the character is an alphabet
            for (let j = 0; j<acode.length; j++){
                if (temp===acode[j]){
                    output+=alpha[j];
                    console.log(alpha[j]);
                }
            }
            //Checking if the character is a number
            for (let j = 0; j<bcode.length; j++){
                if (temp===bcode[j]){
                    output+=beta[j];
                    console.log(beta[j]);
                }
            }
            //Checking for Special Character
            for (let j = 0; j<dcode.length; j++){
                if (temp===dcode[j]){
                    output+=delta[j];
                    console.log(delta[j]);
                }
            }
            //Procedure for Whitespace
            if (temp==='/')
                output+='\u0020';
            temp='';
        }
    }
    return output;
}