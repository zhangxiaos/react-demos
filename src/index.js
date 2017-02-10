import $ from 'jquery';
import React from 'react';
import {
	render
} from 'react-dom';
import NewsList from './components/NewsList.js';
import './css/common.css';

render(
	<NewsList />,
	document.getElementById('content')
);