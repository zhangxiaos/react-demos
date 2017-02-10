import $ from 'jquery';
import React from 'react';
import {
	render
} from 'react-dom';
import NewsList from './components/NewsList.js';
import './css/common.css';

function get(url) {
	return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json').then(stories => {
	return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(items => {
	render(<NewsList items={items} />, document.getElementById('content'));
}).catch(function(err) {
	console.log('error occur', err);
});