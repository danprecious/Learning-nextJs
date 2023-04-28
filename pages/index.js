import Link from 'next/link';
import '../src/app/globals.css'

const HomePage = ({data}) =>{
    return(
        <div>
           {
            data.map(ev => {
                return(
                    <div key={ev.id}>
                        <h1>{ev.title}</h1>
                        <p>{ev.description}</p>
                        <Link href='/events/'>Click</Link>
                    </div>
                )
            })
           }
        </div>
    )
}

export default HomePage;


export async function getServerSideProps() {

    const {events} = await import('/data/data.json');
    console.log(events);

    return{
        props: {
            data: events,
        }
    }
}