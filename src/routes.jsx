import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Pagamento from './pages/Pagamento';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/pagamento' component={Pagamento} />
    </BrowserRouter>
  );
}
