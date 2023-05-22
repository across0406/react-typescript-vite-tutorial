import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import HelloWorld from './legacy-step-by-step/hello-world.tsx';
import EmbeddingExpressions from './legacy-step-by-step/embedding-expressions.tsx';
import SpecifyingAttributes from './legacy-step-by-step/specifying-attributes.tsx';
import Welcome from './legacy-step-by-step/function-and-class-componenets.tsx';
import Comment from './legacy-step-by-step/comment.tsx';
import './index.css';
import Name from './types/name.ts';
import Url from './types/url.ts';
import Author from './types/author.ts';

const name = new Name('Nobusige', 'Sanada');
const linkUrl = new Url('https://ko.wikipedia.org/wiki/%EC%82%AC%EB%82%98%EB%8B%A4_%EB%85%B8%EB%B6%80%EC%8B%9C%EA%B2%8C');
const imgSrcUrl = new Url('https://upload.wikimedia.org/wikipedia/commons/b/b3/Sanada_Yukimura.jpg');

const names = [
  name, 
  new Name('Soonsin', 'Lee'), 
  new Name('Xin', 'Li'), 
];

const comment = {
  date: new Date(), 
  text: 'I hope you enjoy learning React!', 
  author: new Author('http://placekitten.com/g/64/64', 'Hello Kitty')
};

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <HelloWorld /> */}
//     {/* <EmbeddingExpressions name={name}/> */}
//     {/* <SpecifyingAttributes link={linkUrl} imgSrc={imgSrcUrl}/> */}
//   </React.StrictMode>,
// );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rendering an Element into the DOM
// const element = <h1>Hello World!</h1>;
// root.render(element);

// Updating the Rendered Element
// function tick() {
//   const element = (
//     <div>
//       <h1>It is {new Date().toLocaleTimeString()}.</h1>
//     </div>
//   );
// 
//   root.render(element);
// }
// 
// setInterval(tick, 1000);

// Rendering a Component
// const element = <Welcome name={name} />;
// root.render(element);

// Composing Components
// const welcomeList = [];
// for (let i = 0; i < names.length; i++) {
//   welcomeList.push(<Welcome name={names[i]} />);
// }
// root.render(<>{welcomeList}</>);

// Before extracting components
root.render(<Comment date={comment.date} text={comment.text} author={comment.author}/>);

// All React component must act like pure functions with respect to their props.
