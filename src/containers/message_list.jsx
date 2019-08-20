import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {

	componentWillMount() {
		this.fetchMessages();
	}

	componentDidMount() {
	    this.refresher = setInterval(this.fetchMessages, 5000);
	}

	componentDidUpdate() {
	    //this.list.scrollTop = this.list.scrollHeight;
	}

	componentWillUnmount() {
	    //clearInterval(this.refresher);
	}

	fetchMessages = () => {
	    this.props.fetchMessages(this.props.selectedChannel);
	  }

	render() {
		return (
			<div className="channel-container">
		        <div className="channel-title">
		        	<span>Channel #{this.props.selectedChannel}</span>    	
		        </div>
		        <div className="channel-content">    	
					<ul className="list">
						{this.props.messages.map((message) => {
							return (
								<Message key={message.id} message={message} />
							)
						})}
					</ul>
		        </div>
		        <MessageForm />
		    </div>
		)
	}
}



function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);