const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
	devServer: {
    allowedHosts: "all",
		headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
    },
  },
});