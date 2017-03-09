// import { createStore } from 'redux';
import * as React from 'react';
import { render } from 'react-dom';

import PixiPanel from './pixi_panel';
// import { Provider } from 'react-redux';
// TODO: Check @types/react-intl if they fix the problem of 2.1.1
// import { IntlProvider } from 'react-intl';

// on_loaded(() => {
// TODO: Maybe use 'react-intl-redux' to switch locale and message on request?
// load_locale_data((locale, msg) => {
render(
  // <Provider store={createStore}>
    // <IntlProvider
      // locale={locale}
      // messages={msg}
  // >
  <div>
    <PixiPanel on_load={(app) => {
      (window as any).app = app;
    }} />
  </div>
        // </IntlProvider>
  // </Provider>
  ,
  document.getElementById('root'));
  // })

// });

// initiate_load();
