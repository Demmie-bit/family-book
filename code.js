var i = 0;
function update(){
    i++;
    var number = 5
    if(i > number){
        i = 0
    }
    var update_img = images[i];
    var update_Name = names[i];
    document.getElementById("names").src = update_img;
    document.getElementById("images").innerHTML = update_Name;
};