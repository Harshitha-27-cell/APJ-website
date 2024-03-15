import React from 'react';
import { EventDetails ,UpcomingEvent,EventsDetails } from '../constants';

const EventCard = () => {
    return (
        <>
        <div className="Event Heading">Events</div>
         <div className="Plat Content">The event is to make students familiar with coding competitions and inspire them to embrace their brainstorming ability by solving problems. The students will get exposure to industry-related problems and compete to realize their true potential which would also enrich their skills. Our aim through this event is to spread more awareness among students about the importance of solving problems.</div>
        <div className='EventCon'>
         
          {
            EventDetails.map((items)=>(
                <div class="card" key={items.name}>
                <img src={items.Img} alt=""/>
                <div class="card__content">
                    <p class="card__title">{items.name}</p>
                    <p class="card__description">{items.content}</p>
                </div>
            </div>
            ))
          }
        </div>
        <div className="EventCon">
        {
            EventsDetails.map((items)=>(
                <div class="card" key={items.name}>
                <img src={items.Img} alt=""/>
                <div class="card__content">
                    <p class="card__title">{items.name}</p>
                    <p class="card__description">{items.content}</p>
                </div>
            </div>
            ))
          }
        </div>
        <div className="Event Heading">Upcoming Event</div>
        <div className='EventCon'>
        {
           UpcomingEvent.map((items)=>(
               <div class="card" key={items.name}>
               <img src={items.Img} alt="" />
               <div class="card__content">
                   <p class="card__title">{items.name}</p>
                   <p class="card__description">{items.content}</p>
               </div>
           </div>
           ))
        }
       </div>
        </>
    )
}

export default EventCard
