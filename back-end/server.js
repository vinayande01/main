const dotenv = require("dotenv");
// Load env variables before requiring app so models (which read process.env)
// see the variables when they run during module initialization.
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
