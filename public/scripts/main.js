import $ from 'jquery';
import Backbone from 'backbone';
import {globalErrorHandler, sync} from './sync';

$.ajaxSetup({
	error: globalErrorHandler,
	headers: { 
        Accept : 'application/json, text/javascript'
    }
});
Backbone.sync = sync;

import React from 'react';
import ReactDOM from 'react-dom';
import BlogPostList from './components/BlogPostList.js';

ReactDOM.render(<BlogPostList />, document.querySelector('main'));