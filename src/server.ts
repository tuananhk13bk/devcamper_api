import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err}`);
  server.close(() => process.exit(1));
});

export default server;
