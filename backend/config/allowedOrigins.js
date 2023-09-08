const allowedOrigins =
    // ["http://localhost:3000"];
    process.env.NODE_ENV === "development"
        ? ["http://localhost:3000", "http://localhost:3500"]
        : [
              "http://ppi-mib.co.uk",
              "https://ppi-mib.co.uk",
              "https://www.ppi-mib.co.uk",
              "http://localhost:3500",
              "http://localhost:3000",
          ];
// ["http://167.99.198.188/"];

module.exports = allowedOrigins;
