const whitelist = [
    "https://www.yoursite.com",
    "http://127.0.0.1:5500",
    "http://localhost:3500",
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      // Check if the request origin is in the whitelist allow
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        //Allow the origin
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
  };

  module.exports = corsOptions;