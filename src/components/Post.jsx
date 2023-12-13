function Post({ id, title, completed, click }) {
    return (
        <div className="post">
            <p className="completed">{completed ? 'Completed' : ''}</p>
            <h3>ID: {id}</h3>
            <p>Title: {title}</p>
            <button className="close" onClick={click}>Remove</button>
        </div>
    )
}

export default Post