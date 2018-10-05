import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux'
import store from './redux/store';

// Font Icons
import './assets/plugin/font-awesome/css/fontawesome-all.min.css';
import './assets/plugin/themify-icons/themify-icons.css';

// Plugins css
import './assets/plugin/bootstrap/css/bootstrap.min.css';
import './assets/plugin/owl-carousel/css/owl.carousel.min.css';

// css imports
import './assets/css/styles.css';
import './assets/css/color/default.css';
import './index.css';

// js imports
// import './assets/plugin/bootstrap/js/popper.min.js';
// import './assets/plugin/bootstrap/js/bootstrap.min.js';
// import './assets/plugin/owl-carousel/js/owl.carousel.min.js';
// import './assets/plugin/magnific/jquery.magnific-popup.min.js';
// import './assets/js/custom.js';

// Other imports
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();