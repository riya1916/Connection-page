import React from 'react'
import "./Notification.css"
import SearchConn from"./SearchConn";

function notification() {
    const searchConns = [
        {
            name:"Pranjay",
            designation:"Student",
            address:"Delhi"
        },
        {
            name:"Swapnil",
            designation:"Student",
            address:"New Delhi"
        },
        {
            name:"Mahak",
            designation:"Student",
            address:"Haryana"
        },
        {
            name:"Aman",
            designation:"Student",
            address:"New Delhi"
        },
        {
            name:"Riya",
            designation:"Student",
            address:"Uttar Pradesh"
        },
        {
            name:"Tushar",
            designation:"Student",
            address:"New Delhi",
        }
    ]

return (
<div className='notify'>
    <div className='search_input'>
        <form className='searchform'>
        <div className='newgroup'>
        <h2 >New Group</h2>
        <input type="text" placeholder='Search new Group'></input>
        <div className='groupbox'>
         <h2>Group Name</h2>
         <button className='accept'>Accept</button>
         <button className='deny'>Deny</button>
        </div>
        </div>
        <div className='newConn'>
        <h2>New connection</h2>
        <input type="text" placeholder='Search new Connection'></input>
        </div>

        

        </form>
        <div className='newUser'>
            {searchConns.map((searchConndata)=>(
                <SearchConn name={searchConndata.name} designation={searchConndata.designation} address={searchConndata.address} />
                
        ))} 
        </div>
        
    </div>
</div>

)
}


export default notification