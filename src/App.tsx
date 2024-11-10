import "./App.css";

import { Slider } from "./components/Slider/Slider";

const categories = [
	{ id: 1, name: "Fresh Produce", description: "Fruits and vegetables", color: "#4CAF50" },
	{
		id: 2,
		name: "Pantry",
		description: "Staples like grains, oils, and canned goods",
		color: "#FF9800",
	},
	{
		id: 3,
		name: "Baking",
		description: "Ingredients for baking like flour and sugar",
		color: "#9C27B0",
	},
	{ id: 4, name: "Dairy", description: "Milk, cheese, yogurt, and more", color: "#3F51B5" },
	{ id: 5, name: "Snacks", description: "Chips, nuts, and other snacks", color: "#FF5722" },
	{ id: 6, name: "Condiments", description: "Sauces, spreads, and seasonings", color: "#795548" },
	{ id: 7, name: "Beverages", description: "Juices, teas, and other drinks", color: "#03A9F4" },
	{ id: 8, name: "Grains", description: "Rice, pasta, and other grains", color: "#FFC107" },
	{ id: 9, name: "Frozen", description: "Frozen meals and desserts", color: "#009688" },
	{
		id: 10,
		name: "Herbs & Spices",
		description: "Seasonings to enhance flavor",
		color: "#8BC34A",
	},
	{ id: 11, name: "Meat", description: "Fresh and frozen meat options", color: "#F44336" },
	{ id: 12, name: "Seafood", description: "Fresh fish and shellfish", color: "#607D8B" },
	{ id: 13, name: "Vegan", description: "Plant-based food options", color: "#00BCD4" },
	{
		id: 14,
		name: "Organic",
		description: "Organic fruits, vegetables, and more",
		color: "#CDDC39",
	},
	{ id: 15, name: "Gluten-Free", description: "Gluten-free alternatives", color: "#FFEB3B" },
	{ id: 16, name: "Low-Carb", description: "Low-carb food options", color: "#E91E63" },
	{ id: 17, name: "Keto", description: "High-fat, low-carb foods", color: "#673AB7" },
	{ id: 18, name: "Paleo", description: "Paleo diet-friendly foods", color: "#009688" },
	{ id: 19, name: "Low-Sugar", description: "Foods with reduced sugar", color: "#FF5722" },
	{ id: 20, name: "Non-GMO", description: "Non-GMO certified products", color: "#607D8B" },
];

const productCards = [
	{
		id: 1,
		name: "Apple",
		description: "Fresh, juicy apples",
		image: "https://picsum.photos/seed/apple/400/300",
	},
	{
		id: 2,
		name: "Banana",
		description: "Ripe bananas for smoothies",
		image: "https://picsum.photos/seed/banana/400/300",
	},
	{
		id: 3,
		name: "Carrot",
		description: "Crunchy carrots for salads",
		image: "https://picsum.photos/seed/carrot/400/300",
	},
	{
		id: 4,
		name: "Almonds",
		description: "Raw almonds for snacking",
		image: "https://picsum.photos/seed/almonds/400/300",
	},
	{
		id: 5,
		name: "Tomato",
		description: "Vine-ripened tomatoes",
		image: "https://picsum.photos/seed/tomato/400/300",
	},
	{
		id: 6,
		name: "Potato",
		description: "Perfect for roasting",
		image: "https://picsum.photos/seed/potato/400/300",
	},
	{
		id: 7,
		name: "Cucumber",
		description: "Cool cucumbers",
		image: "https://picsum.photos/seed/cucumber/400/300",
	},
	{
		id: 8,
		name: "Pasta",
		description: "Italian pasta",
		image: "https://picsum.photos/seed/pasta/400/300",
	},
	{
		id: 9,
		name: "Olive Oil",
		description: "Extra virgin olive oil",
		image: "https://picsum.photos/seed/olive-oil/400/300",
	},
	{
		id: 10,
		name: "Baking Powder",
		description: "For perfect cakes",
		image: "https://picsum.photos/seed/baking-powder/400/300",
	},
	{
		id: 11,
		name: "Milk",
		description: "Fresh dairy milk",
		image: "https://picsum.photos/seed/milk/400/300",
	},
	{
		id: 12,
		name: "Bread",
		description: "Whole grain bread",
		image: "https://picsum.photos/seed/bread/400/300",
	},
	{
		id: 13,
		name: "Yogurt",
		description: "Greek yogurt",
		image: "https://picsum.photos/seed/yogurt/400/300",
	},
	{
		id: 14,
		name: "Honey",
		description: "Natural honey",
		image: "https://picsum.photos/seed/honey/400/300",
	},
	{
		id: 15,
		name: "Rice",
		description: "Basmati rice",
		image: "https://picsum.photos/seed/rice/400/300",
	},
	{
		id: 16,
		name: "Peanut Butter",
		description: "Creamy spread",
		image: "https://picsum.photos/seed/peanut-butter/400/300",
	},
	{
		id: 17,
		name: "Spinach",
		description: "Organic spinach",
		image: "https://picsum.photos/seed/spinach/400/300",
	},
	{
		id: 18,
		name: "Garlic",
		description: "Fresh garlic bulbs",
		image: "https://picsum.photos/seed/garlic/400/300",
	},
	{
		id: 19,
		name: "Flour",
		description: "All-purpose flour",
		image: "https://picsum.photos/seed/flour/400/300",
	},
	{
		id: 20,
		name: "Eggs",
		description: "Free-range eggs",
		image: "https://picsum.photos/seed/eggs/400/300",
	},
];

function App() {
	return (
		<>
			<div>
				<div style={{}}>
					<Slider
						orientation="horizontal"
						mode="freedom"
						items={productCards}
						renderItem={({ item }) => {
							return (
								<div className="product">
									<img className="product-image" src={item.image} alt="" />
									<div className="">{item.name}</div>
									<div className="">{item.description}</div>
								</div>
							);
						}}
					/>
				</div>
				<br />
				<div
					style={{
						height: 400,
						marginTop: 100,
					}}
				>
					<Slider
						mode="items"
						orientation="vertical"
						itemsPerView={4}
						minWidth={120}
						minHeight={50}
						items={categories}
						renderItem={({ item }) => {
							return (
								<div
									className="chip"
									style={{
										background: item.color,
									}}
								>
									<div className="">{item.name}</div>
								</div>
							);
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
