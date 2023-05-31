let textbook = document.getElementById("text");
textbook.addEventListener('input',function(){
    var txt = this.value;
    document.getElementById("c").innerHTML =txt.length;

    txt=txt.trim();
    let words = txt.split(" ");
    let cleanlist = words.filter(function(elm){
        return elm!="";
    })
    document.getElementById("w").innerHTML = cleanlist.length;
});