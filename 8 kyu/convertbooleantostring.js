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

/*
function booleanToString(b){
  let words = [b.toString()[0], b.toString()[1], b.toString[2], b.toString[3], b.toString()[4]];
  if(words[0] == 't')
      for(let i in words)
        while(words[0] = "t")
          while(words[1] = "r")
            while(words[2] = "u")
              while(words[3] = "e")
                return words.splice(0, 20, "t", "r", "u", "e").join("");
  if(words[0] == 'f')
      for(let i in words)
        while(words[0] = "f")
          while(words[1] = "a")
            while(words[2] = "l")
              while(words[3] = "s")
                while(words[4] = "e")
                return words.splice(0, 20, "f", "a", "s", "s", "e").join("");
  if(words[0] == 'd')
      for(let i in words)
        while(words[0] = "d")
          while(words[1] = "u")
            while(words[2] = "d")
              while(words[3] = "e")
                return words.splice(0, 20, "d", "u", "d", "e").join("");
} 
*/