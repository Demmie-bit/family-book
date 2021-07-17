var names = ["Bikash Paul - Dad ","Anjana paul - Mom", " Anwesha Paul - me/ Big sister", "Aaryav Paul - Little brother"];
console.log(names);
var img = ["dad-memes-funny-03-720x691.jpg","mothers-day-memes-2020-1.jpg", "birthday-quotes-for-sister-funny-1_result.jpg", "when-you-slap-your-little-brother-and-he-starts-to-36561290.png"];
console.log(names);
var i = 0;
function update(){
    var number = 3
    if(i > number){
        i = 0
    }
    var update_img = img[i];
    var update_Name = names[i];
    document.getElementById("img").src = update_img;
    document.getElementById("names").innerHTML = update_Name;
    i++;
};