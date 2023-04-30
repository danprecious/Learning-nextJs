const SingleEvent = ({data}) =>{

    return(
        <div>
            {
                data.map((e) => {
                    return(
                        <div key={e.id}>
                            <h1>{e.title}</h1>
                            <p>{e.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleEvent;


export async function getStaticPaths() {
    const {allEvents} = await import ('/data/data.json');
    const allPaths = allEvents.map((ev) =>{
        return{
            params: {
                cat: ev.city,
                id: ev.id 
            }
        }
    })
    console.log(allPaths);

    return{
        paths: allPaths,
        fallback: false,
    }

}

export async function getStaticProps(context) {
    console.log(context);
    const {allEvents} = await import ('/data/data.json');
    const id = context?.params.id;
    console.log(id);
    const event = allEvents.filter((ev) => (ev.id === id))
    console.log(event);
    return{
        props: {
            data: event,
        }
    }
}