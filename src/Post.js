const Post = ({name,email,username,key,phone}) => {
    return ( 
        <div key={key} className="card text-dark bg-light mb-3" style={{width: "25rem"}}>
         <div className="card-header">{name}</div>
         <div className="card-body">
           <h5 className="card-title">User name : {username}</h5>
           <h5 className="card-title">Email : {email}</h5>
           <h5 className="card-title">Phone : {phone}</h5>
         </div>
       </div>
     );
}
 
export default Post;