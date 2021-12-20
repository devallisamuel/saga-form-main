const Home = ({form}) => {
    return <> {form.map((val,index) => <h1 key = {index}>{val.name}</h1>)}</>
}
export default Home;