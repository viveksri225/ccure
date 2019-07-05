import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './pages/navbar';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import Actif from './pages/ActifNaturels/Properties/actif';
import Description from './pages/ActifNaturels/coenzyme/description';
import Proprietes from './pages/ActifNaturels/coenzyme/proprietes';
import Usages from './pages/ActifNaturels/coenzyme/usages';
import Precautions from './pages/ActifNaturels/coenzyme/precautions';
import EffetsSecondaires from './pages/ActifNaturels/coenzyme/effets-secondaires';
import Interactions from './pages/ActifNaturels/coenzyme/interactions';
 


import '../assets/styles/App.css';


 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="bg">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/accueil" component={Accueil} />
            <Route exact path="/actif" component={Actif} />
            <Route exact path="/actif/description" component={Description} />
            <Route exact path="/actif/proprietes" component={Proprietes} />
            <Route exact path="/actif/usages" component={Usages} />
            <Route exact path="/actif/precautions" component={Precautions} />
            <Route exact path="/actif/effets-secondaires" component={EffetsSecondaires} />
            <Route exact path="/actif/interactions" component={Interactions} />
             </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
