import React from 'react';
import imageLogo from '../images/y.png';
import '../css/NewsHeader.css';

export default class NewsHeader extends React.Component {
	getLogo() {
		return (
			<div className="news-header-logo">
			<a href="https://news.ycombinator.com/"><img src={imageLogo} /></a>
		</div>
		);
	}

	getTitle() {
		return (
			<div className="news-header-title">
			<a className="news-header-text-link" href="https://news.ycombinator.com/">Hacker News</a>
		</div>
		);
	}

	getNav() {
		var navLinks = [{
			name: 'new',
			url: 'newest'
		}, {
			name: 'comments',
			url: 'newcomments'
		}, {
			name: 'show',
			url: 'show'
		}, {
			name: 'ask',
			url: 'ask'
		}, {
			name: 'jobs',
			url: 'jobs'
		}, {
			name: 'submit',
			url: 'submit'
		}];

		return (
			<nav className="news-header-nav">
					{
						navLinks.map((item, index) => {
							return (
								<a className="news-header-navlink news-header-text-link" 
								   key={index}
								   href={`https://news.ycombinator.com/${item.url}`}>{item.name}</a>
								);
						})
					}
			</nav>
		);
	}

	getLogin() {
		return (
			<div className="news-header-login">
				<a className="news-header-text-link" href="https://news.ycombinator.com/login?goto=news">login</a>
		</div>
		);
	}

	render() {
		return (
			<div className="news-header">
			{this.getLogo()}
			{this.getTitle()}
			{this.getNav()}
			{this.getLogin()}
		</div>
		);
	}
}