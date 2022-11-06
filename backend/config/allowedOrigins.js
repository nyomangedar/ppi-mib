const allowedOrigins =
	// ["http://localhost:3000"];
	process.env.NODE_ENV === "development"
		? ["http://localhost:3000"]
		: ["http://68.183.32.204"];
// ["http://167.99.198.188/"];

module.exports = allowedOrigins;
