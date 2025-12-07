// external modules
import colors from "colors";

// internal modules
import { app } from "configs/routes";
import { App } from "configs/application";

const PORT = App.port || 8080;

app.listen(PORT, () => {
  console.log(`Server Running On ${colors.cyan(`http://localhost:${PORT}`)}`);
});
