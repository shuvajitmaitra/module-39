export default function Post({post}){
    const {title, userId,id} = post;
    return (
        <div className="box">
            <h3>Title: {title} </h3>
            <p>User Id: {userId}</p>
            <p>Post Id: {id}</p>
        </div>
    )
}