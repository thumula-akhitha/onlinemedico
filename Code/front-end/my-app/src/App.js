import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Section from './Components/Section'
import {DataProvider} from './Components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
             
            <Section />
                              
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
