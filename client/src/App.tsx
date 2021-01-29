import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// * =====================
// *   IMPORT_CONTAINERS
// * =====================
import HeaderContainer from './containers/systems/header/HeaderContainer';
import LandingPageContainer from './containers/pages/landing_page/LandingPageContainer';
import TemplatePageContainer from './containers/pages/template_page/TemplatePageContainer';
import WritePageContainer from './containers/pages/write_page/WritePageContainer';
import MypageContainer from './containers/pages/my_page/MypageContainer';
import AskPageContainer from './containers/pages/ask_page/AskPageContainer';
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <Route path="/template" component={TemplatePageContainer} />
          <Route path={['/write', '/edit/:']} component={WritePageContainer} />
          <Route path="/mypage" component={MypageContainer} />
          <Route path="/ask" component={AskPageContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
