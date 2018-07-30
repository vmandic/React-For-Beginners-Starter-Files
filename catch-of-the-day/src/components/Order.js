import React, { Component } from 'react'
import { formatPrice } from "../helpers";

export default class Order extends Component {
	renderOrder = k => {
		const fish = this.props.fishes[k];
		const count = this.props.order[k];

		if (!fish) return null;
		else if (fish.status == "available") {
			return (
				<li key={k}>
					{count} lbs {fish.name} &nbsp;
					{formatPrice(count * fish.price)}
				</li>
			);
		}
		else {
			return <li key={k}>Sorry {fish && fish.name ? fish.name : "fish"} not available!</li>;
		}

	}

	render() {

		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, r) => {
			const fish = this.props.fishes[r];
			const count = this.props.order[r];
			const isAvailable = fish && fish.status === "available";

			return isAvailable
				? prevTotal + (count * fish.price)
				: prevTotal;

		}, 0);

		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">
					{orderIds.map(this.renderOrder)}
				</ul>
				<div className="total">
					Total:&nbsp;
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		)
	}
}
