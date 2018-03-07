import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';

Store.subscribe(() => console.log(Store.getState()));

const Wrapped = (
    <Provider store={Store}>
        <Routing />
    </Provider>
);

ReactDOM.render(Wrapped, document.getElementById('root'));
registerServiceWorker();
