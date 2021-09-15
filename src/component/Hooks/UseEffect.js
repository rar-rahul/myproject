import React, { useEffect,useState } from 'react';


function UseEffect(){
    const[state,setState] = useState(10);

    useEffect(()=>{
console.log("hiii baby");
    },[]);


return(
    <>
<div className="button">
    <p className="text-center">{state}</p>
    <button className="btn btn-success btn-sm pr-2" onClick={()=>setState(state + 1)}>INC</button>

</div>
    </>
);

};

export default UseEffect;