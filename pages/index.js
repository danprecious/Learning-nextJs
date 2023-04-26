import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

 export default function Homepage ({data}) {


    return(
      <div>
      
        {data.map((ev) =>{
            return(
              <div>
                <h1>{ev.title}</h1>
              </div>
            )
        })}
      
      </div>
      
    )
 }

 export async function getServerSideProps(){
    const { data } = await import('/data/data.json');
    console.log(data);

    return{
      props: {
        data: data,
    }
  }
 }