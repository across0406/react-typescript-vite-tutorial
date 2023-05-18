import '../App.css';
import Name from '../types/name';

type NameProps = {
  name: Name;
};

function EmbeddingExpressions(nameProps?: NameProps) {
  let expressions = undefined;

  if (nameProps && nameProps.name) {
    expressions = nameProps.name.formatName();
  } else {
    expressions = 'Stranger';
  }
  return (
    <>
      <h1>Hello, {expressions}</h1>
    </>
  );
}

export default EmbeddingExpressions;
