import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Plans from '../pages/Plans';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Plans} />
    </Switch>
  );
};

export default Routes;
