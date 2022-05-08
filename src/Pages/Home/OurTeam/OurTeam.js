// import React, { useEffect, useState } from 'react';

// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import Team from '../Team/Team';

    
// // const [teams, setTeams] = useState([]);
// // useEffect(() => {
// //   axios.get("ourTeam.json").then((res) => setTeams(res.data));
// // }, []);
// const [teams, setTeams] =useState([])

// useEffect(()=>{
// fetch('')
// },[])

// const OurTeam = () => {
//     return (
//         <div id="experts" className='container'>
//             <h2 className='text-primary text-center mt-5'>Our Experts</h2>
//             <div className="row">
             
//             </div>


//         </div>
//     );
// };

// export default OurTeam;

import React, { useEffect, useState } from 'react';

const [teams, setTeams] = useState([])
useEffect( () =>{
    

    fetch('ourTeam.json')
    .then(res=> res.json())
    .then(data => setTeams(data));

}, []);

const OurTeam = () => {
    return (
        <div>
            
        </div>
    );
};

export default OurTeam;