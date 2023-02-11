function action(x)
{
    document.getElementById("window").innerHTML += x;
}

function remove()
{
    document.getElementById("window").innerHTML = '';
}
function answer()
{
    var string = nerdamer(document.getElementById("window").innerHTML).evaluate();
    document.getElementById("window").innerHTML = string.text();
}
    
