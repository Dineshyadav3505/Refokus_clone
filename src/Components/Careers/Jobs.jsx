import React from 'react';
import Job from './Job';

const Jobs = () => {

    let data=[
        {name:'Operations',   postion:'Senior Project Manager',           way:'Remote - EU or USA (pref EST)',     time:"full-time" },
        {name:'Design',       postion:'Designer (Web & Brand)',           way:'Remote - EU or USA (pref EST)',     time:"full-time" },
        {name:'Development',  postion:'Creative Developer',               way:'Remote - EU or USA (pref EST)',     time:"full-time" },
        {name:'Development',  postion:'Webflow Developer',                way:'Remote - EU or USA (pref EST)',     time:"full-time" },
        {name:'Growth',       postion:'Content & Community Marketing',    way:'Remote - EU or USA (pref EST)',     time:"Part-time | 15 to 20 hrs/week(flexible schedule)" },
    ]
  return (
    <div className='mt-16'>
        {data.map((data, index)=>(
            <Job data={data}/>
        ))}

        
      
    </div>
  );
}

export default Jobs;
