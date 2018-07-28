import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import { default as sampleFishes } from "../sample-fishes";
import Fish from "./Fish";

export default class App extends React.Component {

	state = {
		fishes: {},
		order: {}
	};

	addFish = fish => {
		console.log("Adding a fish...");
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({ fishes });
	}

	loadSampleFishes = () => {
		console.log("loading sample fishes...");
		this.setState({ fishes: sampleFishes });
	}

	addToOrder = key => {
		console.log("Adding to order: " + key);
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(f =>
							<Fish
								key={f}
								index={f}
								addToOrder={this.addToOrder}
								data={this.state.fishes[f]}
							/>)}
					</ul>
				</div>
				<Order
					addToOrder={this.addToOrder}
					fishes={this.state.fishes}
					order={this.state.order}
				/>
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}