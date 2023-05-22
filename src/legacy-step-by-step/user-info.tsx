import '../App.css';
import Avatar from './avatar';
import Author from "../types/author";

type UserInfoProp = {
    user: Author, 
}

function UserInfo(props: UserInfoProp) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name()}
            </div>
            <h1>It is extracted UserInfo component!</h1>
        </div>        
    );
}

export default UserInfo;