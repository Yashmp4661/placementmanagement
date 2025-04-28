import React ,{useState,useEffect} from "react";
import api from "./Api";
import "./ViewAll.css";
function ViewAll(){
    const[posts,setposts]=useState([0])//creating state variable posts
    useEffect(()=>{
        document.title="all certificates "
        api.get('')
        .then(res=>{
            console.log(res)
            setposts(res.data)

        })
        .catch(err=>{
            console.log(err)
        })
        
    },[])
    return(
        <div className="view-page">
        <div className="table-container">
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CERTIFICATE NAME</th>
                    <th>CERTIFICATE YEAR</th>
                    <th>CERTIFICATE DESCRIPTION</th>
                    
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td >
                            {post.name}
                        </td>
                        <td>
                            {post.year}
                        </td>
                        <td>
                           {post.descripton}
                        </td>
                       
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
    )
}
export default ViewAll;