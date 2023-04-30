import {Link} from 'next/link';

const EventCategories = ({eventData}) =>{

    return(
        <div>
            {
                eventData.map(ev => {
                    return(
                        <div key={ev.id}>
                            <h1>{ev.title}</h1>
                            <a href={`${ev.city}/${ev.id}`}>click to event</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EventCategories;



export async function getStaticPaths() {

    const {events} = await import ('/data/data.json');
    const allPaths = events.map(ev =>{
        return {
            params: {
                cat: ev.id.toString(),
            }
        }
    })
    // console.log(allPaths);
    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    console.log(context);
    const {allEvents} = await import ('/data/data.json');
    const id = context?.params.cat;
    const eventData = allEvents.filter(ev => ev.city === id)
    // console.log(eventData);
    return{
        props: {eventData},
    }
}   