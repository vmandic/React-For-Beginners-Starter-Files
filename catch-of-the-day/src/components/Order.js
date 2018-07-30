import React, { Component } from 'react'
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Order extends Component {
	renderOrder = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];

		const transitionOpts = {
			classNames: "order",
			key,
			timeout: { enter: 500, exit: 500 }
		};

		if (!fish) return null;
		else if (fish.status === "available") {
			return (
				<CSSTransition {...transitionOpts}>
					<li key={key}>
						<TransitionGroup component="span" className="count">
							<CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
								<span>{count}</span>
							</CSSTransition>
						</TransitionGroup>
						lbs {fish.name} &nbsp;
						{formatPrice(count * fish.price)}
						<button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
					</li>
				</CSSTransition>
			);
		}
		else {
			return <li key={key}>Sorry {fish && fish.name ? fish.name : "fish"} not available!</li>;
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
				<TransitionGroup component="ul" className="order">
					{orderIds.map(this.renderOrder)}
				</TransitionGroup>
				<div className="total">
					Total:&nbsp;
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		)
	}
}
