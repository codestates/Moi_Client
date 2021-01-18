import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// * =====================
// *   IMPORT_CONTAINERS
// * =====================
import HeaderContainer from './containers/systems/header/HeaderContainer';
import LandingPageContainer from './containers/pages/landing_page/LandingPageContainer';
import TemplatePageContainer from './containers/pages/template_page/TemplatePageContainer';
import WritePageContainer from './containers/pages/write_page/WritePageContainer';
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <Route path="/template" component={TemplatePageContainer} />
          <Route path="/write" component={WritePageContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
