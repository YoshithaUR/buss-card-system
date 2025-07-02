import app from "./src/app.js";
import 'dotenv/config'
import sequelize from "./src/config/database.connection.config.js";

(async () => {
    try {
        await sequelize.authenticate();
        console.log("---- DATABASE CONNECTION SUCCESSFUL ----")

        await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
        console.log("---- DATABASE SYNC SUCCESSFUL ----")

        app.listen(process.env.PORT, () => { console.log(`server running on http://localhost:${process.env.PORT}`) })

    } catch (err) {
        console.log("---- DATABASE CONNECTION FAIL ----")
        console.error("Message:", err.message);
        console.error("Code:", err.original?.code);
        process.exit(1);
    }
})();