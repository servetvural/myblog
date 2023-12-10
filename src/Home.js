
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // [
    //     { title: 'My new website', body:'lorem ipsum...', author: 'mario',id:1},
    //     { title: 'Welcome Party', body: 'lorem ipsum...', author:'yoshi', id:2},
    //     {title:'Web dev top tips', body: 'lorem ipsum..', author:'mario', id:3}
    // ]
 
    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    
    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> is Loading......</div>}
            {blogs && <BlogList blogs ={blogs} title={"All Blogs"}  />}
            {/* <BlogList blogs ={blogs} title={"All Blogs"}  handleDelete={handleDelete}/>
            <BlogList blogs ={blogs.filter((blog)=> blog.author === 'mario')} title={"Mario's Blogs"} handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;


// /blogs   GET
// /blogs/{id}     GET
// /blogs      POST
// /blogs/{id}     DELETE