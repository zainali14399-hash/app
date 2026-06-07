import app from "./app.js";
import env from "./config/env.js";

const port = env.port;

app.listen(port,function(){
    console.log(`server is running at http://localhost:${port}`);
});
