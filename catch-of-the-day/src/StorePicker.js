import React from 'react';
import { getFunName } from './helpers';


export default class StorePicker extends React.Component {
	// constructor() {
	// 	super();
	// }

	myInput = React.createRef();

	goToStore = (event) => {
		event.preventDefault();
		const storeName = this.myInput.value.value;
		// routing is in props due to component rendered by React Router
		this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					ref={this.myInput}
					type="text"
					placeholder="Store Name"
					required
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store =></button>
			</form>
		)
	}
}