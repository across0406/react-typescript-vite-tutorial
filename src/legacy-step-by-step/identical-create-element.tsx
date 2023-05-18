import '../App.css';
import Url from '../types/url';

type IdenticalCreateElementProps = {
  link: Url;
  imgSrc: Url;
};

function IdenticalCreateElement(identicalCreateElementProps?: IdenticalCreateElementProps) {
  let anchorLink = undefined;
  let imgSrc = undefined;

  if (identicalCreateElementProps && identicalCreateElementProps.link) {
    anchorLink = identicalCreateElementProps.link.formatUrl();
  } else {
    anchorLink = 'https://dictionary.cambridge.org/ko/%EC%82%AC%EC%A0%84/%EC%98%81%EC%96%B4/stranger';
  }

  if (identicalCreateElementProps && identicalCreateElementProps.imgSrc) {
    imgSrc = identicalCreateElementProps.imgSrc.formatUrl();
  } else {
    imgSrc = 'https://pbs.twimg.com/profile_images/956698671751446528/J3ZUMcpq_400x400.jpg';
  }

  return (
    <>
      <h1>Hello </h1>
      <a href={anchorLink}>Link</a>
      <img src={imgSrc} />
    </>
  );
}

// export default SpecifyingAttributes;
