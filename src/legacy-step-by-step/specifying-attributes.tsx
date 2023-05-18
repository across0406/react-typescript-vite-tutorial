import React from 'react';
import '../App.css';
import Url from '../types/url';

type SpecifyingAttributesProps = {
  link: Url;
  imgSrc: Url;
};

function SpecifyingAttributes(specifyingAttributesProps?: SpecifyingAttributesProps) {
  let anchorLink = undefined;
  let imgSrc = undefined;

  if (specifyingAttributesProps && specifyingAttributesProps.link) {
    anchorLink = specifyingAttributesProps.link.formatUrl();
  } else {
    anchorLink = 'https://dictionary.cambridge.org/ko/%EC%82%AC%EC%A0%84/%EC%98%81%EC%96%B4/stranger';
  }

  if (specifyingAttributesProps && specifyingAttributesProps.imgSrc) {
    imgSrc = specifyingAttributesProps.imgSrc.formatUrl();
  } else {
    imgSrc = 'https://pbs.twimg.com/profile_images/956698671751446528/J3ZUMcpq_400x400.jpg';
  }

  // First creation element method
  // return (
  //   <>
  //     <h1>Hello </h1>
  //     <a href={anchorLink}>Link</a>
  //     <img src={imgSrc} />
  //   </>
  // );

  // Second creation element method
  const anchorElement = React.createElement(
    'a', 
    {href: anchorLink}, 
    'Link'
  );

  const imgElement = React.createElement(
    'img', 
    {src: imgSrc}
  );
  
  const divElement = React.createElement(
    'div', 
    {
      id: 'main-dev', 
      children: [
        anchorElement, 
        imgElement
      ]
    }
  );

  return divElement;
}

export default SpecifyingAttributes;
