import React from 'react';
import '../css/NewsItem.css';
import URL from 'url';
import ImageGrayArrow from '../images/grayarrow.png';
import Moment from 'moment';

export default class NewsItem extends React.Component {
	getDomain() {
		return URL.parse(this.props.item.url).hostname;
	}

	getTitle() {
		return (
		<div className="news-item-title">
			<a className="news-item-title-link" href={this.props.item.url ? this.props.item.url : `https://news.ycombinator.com/item?id=${this.props.item.id}`}>{this.props.item.title}</a>
			{
				this.props.item.url && <span className="news-item-domain"><a href={`https://news.ycombinator.com/from?site=${this.getDomain()}`}>({this.getDomain()})</a></span>
			}
		</div>
		);
	}

	getCommentLink() {
		var commentText = 'discuss';

		if (this.props.item.kids && this.props.item.kids.length) {
			commentText = this.props.item.kids.length + ' comment';
		}

		return (
		<a href={`https://news.ycombinator.com/item?id=${this.props.item.id}`}>{commentText}</a>
		);
	}

	getSubText() {
		return (
		<div className="news-item-subtext">
			{this.props.item.score} points by 
			<a href={`https://news.ycombinator.com/user?id=${this.props.item.by}`}>{this.props.item.by}</a>
			{Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
		</div>
		);
	}

	getRank() {
		return (
		<div className="news-item-rank">
			{this.props.rank}.
		</div>
		);
	}

	getVote() {
		return (
		<div className="news-item-vote">
			<a href={`https://news.ycombinator.com/vote?for=${this.props.item.id}&dir=up&goto=news`}>
				<img src={ImageGrayArrow} width="10" />
			</a>
		</div>
		);
	}

	render() {
		return (
		<div className="news-item">
			{this.getRank()}
			{this.getVote()}
			<div className="news-item-text">
				{this.getTitle()}
				{this.getSubText()}
			</div>
		</div>
	);
	}
}