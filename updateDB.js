fetch("https://api2-1-6jck.onrender.com/usersLogIN")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data from API:", data);

    // ذخیره داده‌ها در `db.json`
    const fs = require("fs");
    fs.writeFileSync("db.json", JSON.stringify({ usersLogIN: data }, null, 2));
    console.log("db.json updated successfully!");
  })
  .catch((error) => console.error("Error fetching data:", error));
