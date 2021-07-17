var names = ["Bikash Paul - Dad ","Anjana paul - Mom", " Anwesha Paul - me/ Big sister", "Aaryav Paul - Little brother"];
console.log(names);
var img = ["https://i.ytimg.com/vi/s_I4tqUMwY0/maxresdefault.jpg","https://i.ytimg.com/vi/s_I4tqUMwY0/maxresdefault.jpg", " https://i.ytimg.com/vi/s_I4tqUMwY0/maxresdefault.jpg", "https://i.ytimg.com/vi/s_I4tqUMwY0/maxresdefault.jpg"];
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