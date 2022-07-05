import React from 'react';
import "./Search.css";
import SearchConn from"./SearchConn";

function Search() {
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
<div className='Search'>
    <div className='search_input'>
        <form className='searchform'>
        <h2 >Search Connection</h2>
        <input type="text" placeholder='Search new connection here'></input>
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

export default Search
