import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header'
import Section from './Components/Section'
import {DataProvider} from './Components/Context'
import Footer from './Components/Footer'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            <Footer/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
