var text="hai hello hai hello"

//print word count
var words=text.split(" ")
word_count={}
for(let word of words){
    if(word in word_count){
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);
