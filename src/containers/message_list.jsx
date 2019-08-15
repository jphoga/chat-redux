import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';

class MessageList extends Component {

	render() {
		return (
			<div className="channel-container">
		        <div className="channel-title">    	
		        </div>
		        <div className="channel-content">    	
					<ul className="list">
						{this.props.messages.map((message) => {
							return (
								<Message key={message.created_at} message={message} />
							)
						})}
					</ul>
		        </div>
		     </div>
		)
	}
}



function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);