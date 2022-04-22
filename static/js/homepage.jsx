'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h2>This is a great site for viewing trading cards</h2>
      <p>Information about the author you can find <a href="/about">here</a>.</p>
      <p><a href="/cards">Click here</a> to view the trading cards.</p>
      <img src="/static/img/balloonicorn.jpg"/>       
      </React.Fragment>
    );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
