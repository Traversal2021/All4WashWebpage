const learn_more_button_1=document.getElementById("learn1")
const learn_more_button_2=document.getElementById("learn2")
const learn_more_button_3=document.getElementById("learn3")
const learn_more_button_4=document.getElementById("learn4")
const learn_more_button_5=document.getElementById("learn5")
const learn_more_button_6=document.getElementById("learn6")

const personal_introduction_1=document.getElementById("introduction1")
const personal_introduction_2=document.getElementById("introduction2")
const personal_introduction_3=document.getElementById("introduction3")
const personal_introduction_4=document.getElementById("introduction4")
const personal_introduction_5=document.getElementById("introduction5")
const personal_introduction_6=document.getElementById("introduction6")

learn_more_button_1.addEventListener("click",  function() {
        if (personal_introduction_1.style.display == "none"){
            console.log("display none")
            personal_introduction_1.style.display="block";
            personal_introduction_2.style.display="none";
            personal_introduction_3.style.display="none";
            personal_introduction_4.style.display="none";
            personal_introduction_5.style.display="none";
            personal_introduction_6.style.display="none";
        }
        else{
            personal_introduction_1.style.display="none";
        }
    }
);

learn_more_button_2.addEventListener("click", function() {
        if(personal_introduction_2.style.display == "none"){
            console.log("display none")
            personal_introduction_2.style.display="block";
            personal_introduction_1.style.display="none";
            personal_introduction_3.style.display="none";
            personal_introduction_4.style.display="none";
            personal_introduction_5.style.display="none";
            personal_introduction_6.style.display="none";
        }
        else{
            personal_introduction_2.style.display="none";
        }
    }
)
learn_more_button_3.addEventListener("click", function() {
        if(personal_introduction_3.style.display == "none"){
            console.log("display none")
            personal_introduction_3.style.display="block";
            personal_introduction_1.style.display="none";
            personal_introduction_2.style.display="none";
            personal_introduction_4.style.display="none";
            personal_introduction_5.style.display="none";
            personal_introduction_6.style.display="none";
        }
        else{
            personal_introduction_3.style.display="none";
        }
    }
)
learn_more_button_4.addEventListener("click", function() {
        if(personal_introduction_4.style.display == "none"){
            console.log("display none")
            personal_introduction_4.style.display="block";
            personal_introduction_1.style.display="none";
            personal_introduction_2.style.display="none";
            personal_introduction_3.style.display="none";
            personal_introduction_5.style.display="none";
            personal_introduction_6.style.display="none";
        }
        else{
            personal_introduction_4.style.display="none";
        }
    }
)
learn_more_button_5.addEventListener("click", function() {
        if(personal_introduction_5.style.display == "none"){
            console.log("display none")
            personal_introduction_5.style.display="block";
            personal_introduction_1.style.display="none";
            personal_introduction_2.style.display="none";
            personal_introduction_3.style.display="none";
            personal_introduction_4.style.display="none";
            personal_introduction_6.style.display="none";
        }
        else{
            personal_introduction_5.style.display="none";
        }
    }
)
learn_more_button_6.addEventListener("click", function() {
        if(personal_introduction_6.style.display == "none"){
            console.log("display none")
            personal_introduction_6.style.display="block";
            personal_introduction_1.style.display="none";
            personal_introduction_2.style.display="none";
            personal_introduction_3.style.display="none";
            personal_introduction_4.style.display="none";
            personal_introduction_5.style.display="none";
        }
        else{
            personal_introduction_6.style.display="none";
        }
    }
)
