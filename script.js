var mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", function () {
    alert("button clicked")
});
document.getElementById('toggleButton').onclick = function(){
   toggleColor()};
    function toggleColor (){
        let color= document.body.style.background;
        if (color==='blue'){
            document.body.style.background='red';
            
        }else{
            document.body.style.background = 'blue';
        }
        }
    