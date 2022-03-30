document.getElementById("liftoffButton").addEventListener("click", clickFunction);

function clickFunction()
{
    document.getElementById("statusReport").innerText="Houston, we have lift off!";
}

document.getElementById("abortMission").addEventListener("mousemove", mouseHover);
document.getElementById("abortMission").addEventListener("mouseout", mouseOut);

function mouseHover()
{
  document.getElementById("abortMission").style.backgroundColor = 'red';
  
}
function mouseOut()
{
    document.getElementById("abortMission").style.backgroundColor = "";
}

document.getElementById("abortMission").addEventListener("click", abortClick);

function abortClick()
{
    var txt;

    if (confirm("Are you sure you want to abort the mission?"))
    {
        txt = "Mission Aborted! Space shuttle returning home.";
    }
    else
    {
        txt = "The shuttle is on the ground.";
    }

    document.getElementById("statusReport").innerHTML = txt;
    
}

document.getElementById("showPicture").addEventListener("click", imageClick);

function imageClick()
{
    document.getElementById("image").style.display = "block";
    document.getElementById("statusReport").style.display = "none";
}

const spanNameChange = document.getElementById("name");
const spanHomeChange = document.getElementById("home");
spanNameChange.textContent = "Neil Armstrong";
spanHomeChange.textContent = "Planet Earth";

let listIterator = document.getElementsByTagName("li");

for(i = 0; i<listIterator.length; i++)
{
    listIterator[i].classList.add('red-item');
}

document.getElementById("check").addEventListener("change", checkFunction);

function checkFunction()
{
    var checkResult = document.querySelector("label");

    if(this.checked)
    {
        checkResult.style.textDecorationLine = 'line-through';

    }
    else
    {
        checkResult.style.textDecorationLine = "";
    }
    
}    
