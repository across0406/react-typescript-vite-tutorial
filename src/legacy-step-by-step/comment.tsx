import React from 'react';
import '../App.css';
import Author from '../types/author';
import Avatar from './avatar';
import UserInfo from './user-info';

type CommentProps = {
    author: Author, 
    text: string, 
    date: Date
};

function formatDate(date: Date): string {
    return date.toLocaleDateString();
}

function Comment(props: CommentProps) {
    // Not extracting
    // return (
    //     <div className="Comment">
    //         <div className="UserInfo">
    //             // <img className="Avatar" 
    //             //      src={props.author.avatarUrl()} 
    //             //      alt={props.author.name()}
    //             // />
    //             <Avatar author={props.author} />
    //             <div className="UserInfo-name">
    //                 {props.author.name()}
    //             </div>
    //             <div className="Comment-text">
    //                 {props.text}
    //             </div>
    //             <div className="Comment-date">
    //                 {formatDate(props.date)}
    //             </div>
    //         </div>
    //     </div>
    // );

    // Extracting Avatar only
    // return (
    //     <div className="Comment">
    //         <div className="UserInfo">
    //             <Avatar user={props.author} />
    //             <div className="UserInfo-name">
    //                 {props.author.name()}
    //             </div>
    //             <div className="Comment-text">
    //                 {props.text}
    //             </div>
    //             <div className="Comment-date">
    //                 {formatDate(props.date)}
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo user={props.author} />
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
}

export default Comment;