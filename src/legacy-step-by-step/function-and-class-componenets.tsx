import React from 'react';
import Name from '../types/name';

type NameProps = {
    name: Name;
};

// Function
function Welcome(props: NameProps) {
    return <h1>Hello, {props.name.formatName()}</h1>;
}

// Class
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {(this.props as NameProps).name.formatName()}</h1>;
//     }
// }

export default Welcome;