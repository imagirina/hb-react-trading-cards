'use strict';

function About() {
  return (
    <React.Fragment>
      <h2>About the author</h2>
      <h3>Imagirina</h3>
      <a href="/">Back to the main page</a>
    </React.Fragment>
  );
}

ReactDOM.render(<About />, document.querySelector('#about'));