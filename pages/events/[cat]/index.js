import {Link} from 'next/link';

const EventCategories = () =>{

    return(
        <div>
            <h1>Events in London</h1>
            <a href="events/1/">Go to single event</a>
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
    console.log(allPaths);
    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {events} = await import ('/data/data.json');
    console.log(context);
    return{
        props: {},
    }
}