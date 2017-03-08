import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var HomePage = React.createClass({
	render:function(){
		return(
			<div className='home-page'>
				<Banner />
				<WebsiteBody />
			</div>
		)
	}
})

var Banner = React.createClass({
	render:function(){
		return(
			<div id='image-container'>
				<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" alt="houston_skyline" />
				<img className="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" alt="ironyard logo" />
			</div>
		)
	}
})

var WebsiteBody = React.createClass({
	render:function(){
		return(
			<div className="website_body">	
				<div className="textcolumn left">
					<p><strong>THE IRON YARD | HOUSTON</strong></p>
					<p>Happenings and updates from The Iron Yard in Houston, Tx.</p>
					<div className="line"></div>
					<p>SEARCH</p>
					<input type="text" name="search" placeholder="Search Keywords" />
				</div>
				<div className="textcolumn right">
					<p>September 22 Starts a New Class of Iron Yard Houston Students</p>
					<p><i><font color="grey" size="2">By Brian Dorton, Campus Director at The Iron Yard Houston</font></i></p>
					<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
					<p>After pursuing his studies at the Lycée Charlemagne and the Lycée Napoléon, he took up law, but a visit to Italy and Sicily (1822–23) made him an enthusiastic archaeologist. In 1825 he was named sub-inspector of fine arts and a few months later married Amelia Syvoct, niece and adopted daughter of the celebrated Mme Récamier. </p>
				</div>
			</div>
		)
	}
})

const app = function() {
	ReactDOM.render(<HomePage />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
