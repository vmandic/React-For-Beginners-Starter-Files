import React, { Component } from 'react'

export default class AddFishForm extends Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imgRef = React.createRef();

	createFish = e => {
		e.preventDefault();

		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value) ,
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			img: this.imgRef.value.value,
		};
	}

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input type="text" name="name" placeholder="Name" ref={this.nameRef} />
				<input type="text" name="price" placeholder="Price" ref={this.priceRef} />
				<select name="status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" placeholder="Desc" ref={this.statusRef} />
				<input type="text" name="img" placeholder="Image" ref={this.imgRef} />
				<button type="submit" name="submit">+ Add Fish</button>
			</form >
		);
	}
}
