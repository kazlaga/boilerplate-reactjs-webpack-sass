import React    from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);