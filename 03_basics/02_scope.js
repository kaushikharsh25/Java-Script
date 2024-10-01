function one(){
    const username = "harry"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

if(true){
    const name = "harsh"
    if(name==="harsh"){
        const website = "youtube"
        console.log(name+website);
    }
}

// +++++++++++++++++++++++++ interesting ++++++++++++++++


// addone(5); // but this can work even if we define the function later on

function addone(num){
    return num + 1
}
addone(5);

// these are called as expression


// addtwo(5)   // the main diff is that this exp can not be run before we initialise the function

const addtwo = function(num){
    return num+2
}
// addtwo(5)