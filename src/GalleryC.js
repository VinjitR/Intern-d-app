import React, { Component } from 'react';
import styled from 'styled-components';
import {HeaderC} from './HeaderC';
import {FooterC} from './FooterC';

const Container = styled.div`
background:#cccccc;
.gallery {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	padding: 34px;
}
.gallery-tile {
	min-width: 100px;
	max-width: 18vw;
	margin: 0.25em;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		transition: transform 300ms ease-in-out, filter 300ms ease-in-out;
	}
	.picture-info {
		& > * {
			margin: 0.5rem 1.25rem;
		}
		h2 {
			@include header-font(2.5rem);
		}
		position: absolute;
		z-index: 1;
		color: $white;
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		opacity: 0;
		transition: opacity 300ms ease-in-out, filter 300ms ease-in-out;
	}
	&:hover {
		img {
			transform: scale(1.1);
			filter: brightness(80%);
		}
		.picture-info {
			opacity: 1;
		}
	}
}
.imageview-wrapper {
	margin-right: auto; /* 1 */
  margin-left:  auto;
	width: 100%;
	height: 100vh;
	display: auto;
	justify-content: auto;
	align-items: auto;
}
.imageview {
	display: flex;
	justify-content: center;
	scale:auto;
}
.imageview > * {
	margin: 3em;
}
.imageview-image {
	width: auto;
	height: 25em;
	box-shadow: 0 20px 40px -5px $transblack;
}
.imageview-info {
	max-width: auto;
	text-align: left;
	position: relative;
	button {
		@include header-font(1.5rem);
		color: $red;
		cursor: pointer;
		border: 3px;
		background: none;
		outline: none;
		margin: 0;
		padding: 0;
		position: absolute;
		top: -2em;
		right: -1em;
		&:hover {
			animation: swell 300ms ease-in-out;
		}
	}
	h2 {
		@include header-font(2.5rem);
		margin-top: 0;
	}
	h3 {
		@include header-font(1.5rem);
	}
	ul {
		list-style: none;
	}
}

.fadeIn {
	animation: fade 300ms ease-in-out forwards;
}

@keyframes fade {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes swell {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.3);
	}
	100% {
		transform: scale(1);
	}
}
`;

var controller = new AbortController();

class GalleryC extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			activeID: 0,
            imageView: false,
		}
	}
	componentWillMount() {
		this._loadData('https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rpg-2-data.json')
	}
	componentWillUnmount() {
			controller.abort();
		}
		// Fetch data, then clone it to state using destructuring
        // XHR Fallback
       
	_loadData(url) {
		fetch(url, {
				method: 'GET'
			},{
                signal: controller.signal
              })
			.then(response => response.json())
			.then(json => this.setState({
				data: [...json.gallery]
			}))
			.catch((err) => {
				console.log(err.message)
				try {
					const xhr = new XMLHttpRequest()
					xhr.open('GET', url)
					xhr.responseType = 'json'

					xhr.onload = () => {
						let json = xhr.response
						this.setState({
							data: [...json.gallery]
						})
					}

					xhr.onerror = () => {
						throw new Error('XMLHttpRequest Failed...')
					}

					xhr.send()
				} catch (e) {
					console.log(e.message)
				}
			})
	}
	_openImageView(id) {
		this.setState({
			activeID: id,
			imageView: true
		});
	}
	_closeImageView() {
		this.setState({
			imageView: false
		})
	}
	render() {
		return (
            <Container fluid="true">
            <HeaderC/>
			<div className="wrapper">
				{
					this.state.imageView ? 
					<ImageView {...this.state.data[this.state.activeID]}
						_closeImageView={this._closeImageView.bind(this)} />
						:
					<Gallery data={this.state.data}
						_openImageView={this._openImageView.bind(this)} />
				}
			</div>
            <FooterC/>
            </Container>
		)
	}
}

class ImageView extends React.Component {
	render() {
		return (
			<div className="imageview-wrapper fadeIn">
				<div className="imageview">
					<Image CSSClass="imageview-image"
						src={this.props.src}
						alt={this.props.name} />
					<div className="imageview-info expand">
						<button className="imageview-close" onClick={this.props._closeImageView}>x</button>
						<h2>{this.props.name}</h2>
						<p>{this.props.desc}</p>
						<h3>Tags</h3>
						<ul>
							{this.props.tags.map(tag => <li>{tag}</li>)}
						</ul>
					</div>
			</div>
		</div>
		)
	}
}

class Gallery extends React.Component {
	render() {
		return (
			<div className="gallery fadeIn">
			{
				this.props.data.map( data => 
					<Tile key={data.id}
						id={data.id}
						src={data.src}				
						name={data.name}
						desc={data.desc}
						_openImageView={this.props._openImageView} />
				)
			}
	</div>
		)
	}
}

class Tile extends React.Component {
	_handleClick() {
		this.props._openImageView(this.props.id)
	}
	render() {
		return (
			<div className="gallery-tile" onClick={this._handleClick.bind(this)}>
			<div className="picture-info">
				<h2>{this.props.name}</h2>
				{/*<p>{this.props.desc}</p>*/}
			</div>
			<Image
				CSSClass="tile-image"
				src={this.props.src} 
				alt={this.props.name} />
		</div>
		)
	}
}

const Image = (props) => (
	<img
		className={props.CSSClass}
		src={props.src} 
		alt={props.name} />
)

export default GalleryC;