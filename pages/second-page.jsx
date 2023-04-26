function SecondPage(props) {
    const {title} = props;
    return (
    <div>
        <h1>{title}</h1>
    </div>
    )
}

export default SecondPage;

export function getServerSideProps(){
    return{
        props: {
            title: 'Second Page',
        }
    }
}