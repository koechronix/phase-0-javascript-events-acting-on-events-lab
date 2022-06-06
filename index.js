// Your code here
function moveDodgerLeft(){
    const rightNumbers =dodger.style.right.replace("px", "");
    const right=parseInt(rightNumbers,10)
    if (right <0)
    if (right <0 && left >360 ){
        dodger.style.right = `${left - 1}px`;
    }
        
    }








function moveDodgerRight(){
    const leftNumbers =dodger.style.left.replace("px", "");
    const left= parseInt(leftNumbers,10);
    if (left > 0){
    if (left > 0 && left < 360 ){
        dodger.style.left = `${left + 1}px`;
    };
    }

}

