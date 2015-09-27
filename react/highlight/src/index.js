import React from 'react';
import Highlight from 'react-highlight';

class App extends React.Component {
  render() {
    return (
      <div>
        <Highlight className="hljs html">
          {dedent`
            <div class="pagination">
              <a href="#" class="action">Previous</a>
              <div class="pages">
                <a href="#" class="page">1</a>
                <a href="#" class="page">2</a>
                <a href="#" class="page">3</a>
                <a href="#" class="page">4</a>
              </div>
              <a href="#" class="action">Next</a>
            </div>
          `}
        </Highlight>
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('mount')
);