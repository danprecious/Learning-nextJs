import Link from 'next/link';
import '../../src/app/globals.css'

const EventsPage = ({data}) =>{
    return(
        <div>
            <h1>Welcome to the Events page</h1><br />
            
            {
                data.map((ev) =>{
                    return(
                        <div key={ev.id}>
                            <Link href={`events/${ev.id}`}><h1>Events in {ev.title}</h1></Link>
                        </div>
                        )
                    })
                }
        </div>
    )
}

export default EventsPage;


export async function getServerSideProps() {

    const {events} = await import('/data/data.json');
    console.log(events);

    return{
        props: {
            data: events,
        }
    }
}
