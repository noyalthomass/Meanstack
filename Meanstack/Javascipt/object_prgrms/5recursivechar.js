var pattern="CABBDDF"
var word_count={}

for(let char of pattern){
    if(char in word_count){
        console.log(char,"is first recursive charecter");
        break;
    }
    else{
        word_count[char]=1
    }
}