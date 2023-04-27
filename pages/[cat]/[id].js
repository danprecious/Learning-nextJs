const DynamicPage = () =>{
    return(
        <div>
            <h1>Dynamic Page 1</h1>
        </div>
    )
}

export default DynamicPage;


export async function getStaticProps(context){
    const { data } = await import('/data/data.json');
    console.log(data);
    console.log(context)

    return{
      props: {
        data: data,
    }
  }
 }

 export async function getStaticPaths(){
    const {data} = await import('/data/data.json');
    // const allPaths = data.map(ev => {
    //   return{
    //     params: {
    //       cat: ev.title,
    //   }
    // }
    // });

    console.log(allPaths);
    return{ 
        paths: [{
            params: {
                cat: 'london'
            }
        },
           { params: {
                cat: 'london'
            }
           }
    ]
 }
}