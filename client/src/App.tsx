import React from 'react';
// * =====================
// *   IMPORT_CONTAINERS
// * =====================
import HeaderContainer from './containers/systems/header/HeaderContainer';
import LandingPageContainer from './containers/pages/landing_page/LandingPageContainer';
const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <LandingPageContainer />
    </div>
  );
};

export default App;
