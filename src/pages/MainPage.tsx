import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import ModeTestPage from './ModeTestPage';
import ModeListPage from './ModeListPage';

const MainPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={ModeListPage} />
      <Route
        path={`${match.url}/category/:id`}
        component={ModeTestPage}
        routerDirection="forward"
      />
    </IonRouterOutlet>
  );
};

export default MainPage;
