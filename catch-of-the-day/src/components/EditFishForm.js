import React, { Component } from 'react'

export default class EditFishForm extends Component {

	handleChange = (event) => {
		// take a copy of the current fish
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};

		this.props.updateFish(this.props.index, updatedFish);
	}


	render() {
		return (
			<div className="fish-edit">
				<input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
				<input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
				<select name="status" onChange={this.handleChange} value={this.props.fish.status}>
					<option onChange={this.handleChange} value="available">
						Fresh!
					</option>
					<option onChange={this.handleChange} value="unavailable">
						Sold Out!
					</option>
				</select>
				<textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
				<input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
				<button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</div>
		)
	}
}
