/* Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given. */
// 1-й вариант через возврат строки и условие
function booleanToString(b){
    //your code here
    if(b) {
        return "true";
    } else {
        return "false";
    }
  }

/* 2-й вариант через конкатенацию с пустой строкой 
function booleanToString(b) {
    return b + "";
} */

// 3 вариант через встроенный метод toString

function booleanToString {
    return b.toSring();
}