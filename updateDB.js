import fs from "fs";
import fetch from "node-fetch";

const filePath = "D:/برنامه نویسی/داشبورد 2/Server/db.json"; // مسیر دقیق فایل

fetch("https://api2-1-6jck.onrender.com/usersLogIN")
  .then((response) => response.json())
  .then((data) => {
    fs.writeFileSync(filePath, JSON.stringify({ usersLogIN: data }, null, 2));
    console.log("db.json updated successfully!");
  })
  .catch((error) => console.error("Error fetching data:", error));
