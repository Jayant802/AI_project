// // create an express server and check if it 's working 


// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors"; // cross origin resources sharing(brower blocks )


// // 1) we are impoting express module which we installed using npm i


// import userRoutes from "./routes/auth-route.js"

// //2) call/invoke the function
// let app = express(); //object = {listen}

// app.use(
//  cors({
//     origin: "https://localhost:5173",
//  }),    
// ); // http://localhost:9001/api/

// //4) declare routes --> app.http_method('endpoint',callback)

// app.get("/", (req, res )=>{   //req, res --> object 
//    // res.send("welcome");
//     // res.json({
//     //     sucess:true, 
//     //     message:"okey", 
//     //     data:{ userName: "abc"},
//     // });


//     res.status(500).json({
//         // 500 internal srver error 
//         sucess:false, 
//         message:"error occurred", 
//         err:{name: "some error"},
//     }); 

// });

// app.get("/about", (req, res )=>{   //req, res --> object
//     res.status(122).json({message: "hi"});
// });



// //3) assign a port number to our server
// app.listen(9001, ()=>{
//     console.log("server started.......");
// }); 
// //app.listen(port_number, callback)


// //? to check if the server is running , in cmd(git bash), goto backend folder and type "npm nodemon index index.js"

// //open browser --> localhost:PORT_NUMBER and press enter


// //https://nodejs.org/en/ (/)=> this is base url

// //https://nodejs.org/en/blog => blog is one endpoint

// //https://nodejs.org/en/dowload => download is one endpoint

// //https://nodejs.org/en/contact us => contact us is one endpoint



// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";

// // DB
// import { connectDB } from "./config/database-config.js";

// // routes
// import userRoutes from "./routes/auth-route.js";
// import dashboardRoutes from "./routes/dashboard-route.js";
// import sessionRoutes from "./routes/session-route.js";
// app.use("/api/session", sessionRoutes);

// const app = express();

// // connect DB
// connectDB();

// // middleware
// app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

// // routes
// app.use("/api/auth", userRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// // test
// app.get("/", (req, res) => {
//   res.json({ message: "Server running 🚀" });
// });

// // start server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT} 🔥`);
// });



// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";

// // DB
// import { connectDB } from "./config/database-config.js";

// // routes
// import userRoutes from "./routes/auth-route.js";
// import sessionRoutes from "./routes/session-route.js";
// // (optional) agar dashboard-route use nahi kar rahe ho to hata do
// // import dashboardRoutes from "./routes/dashboard-route.js";

// const app = express();

// // ✅ connect DB
// connectDB();

// // ✅ middleware
// app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

// // ✅ routes
// app.use("/api/auth", userRoutes);
// app.use("/api/session", sessionRoutes);
// // app.use("/api/dashboard", dashboardRoutes); // optional

// // ✅ test route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Server running 🚀",
//   });
// });

// // ✅ start server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT} 🔥`);
// });

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

// DB
import { connectDB } from "./config/database-config.js";

// routes
import userRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-route.js";

const app = express();

// ✅ DB connect
connectDB();

// ✅ middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// ✅ routes
app.use("/api/auth", userRoutes);
app.use("/api/session", sessionRoutes);
app.use("/api/ai", aiRoutes);

// ✅ test
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server running 🚀",
  });
});

// ✅ start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🔥`);
});