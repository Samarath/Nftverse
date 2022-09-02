import { useEffect, useState } from 'react';
import './Cards.css';


const Cards = () => {
    const [userdata, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://api.facthunt.in/fostergem/v1/post/list/public')
        .then(data => data.json())
        .then(data => setUserData(data))
    }, [])

    

    const showCards = () => {
        const realdata = [];   

        if(userdata.content !== undefined){


            userdata.content.forEach(item => {
                const sliced = item.title.indexOf(':'); 
                const titled = item.title.slice(sliced+2);
                realdata.push([titled, item.coverImageUrl]) 
        
            })
            // setSavedData(realdata);
        }

        const renderCards =  realdata.map((item, i) => {
            return (
                <div key={i}>
                    <img src={item[1]} alt='userimage'/> 
                    <p>{item[0]}</p>
           
                </div>
            )
        })

        return renderCards;

    } 

    return (
       <div className='card_bg'>
            <div className='extra'>
                <div>
                  <p>Discover</p>  
                </div>
                <div className='plus'>
                  <p>+</p>  
                </div>
                
            </div>
            <div className='cards'>
                {showCards()}
            </div>
       </div> 
        
        
    )
}

export default Cards;