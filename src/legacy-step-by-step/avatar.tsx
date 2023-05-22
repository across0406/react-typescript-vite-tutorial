import '../App.css';
import Author from "../types/author";

type AuthorProp = {
    user: Author, 
}

function Avatar(props: AuthorProp) {
    return (
        <div>
            <img className="Avatar" 
                 src={props.user.avatarUrl()} 
                 alt={props.user.name()} />
            <h1>It is extracted avatar component!</h1>
        </div>        
    );
}

export default Avatar;