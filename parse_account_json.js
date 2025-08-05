const fs = require("fs");

const inputData = fs.readFileSync("accounts_validate.json", "utf8");

try {
  const data = JSON.parse(inputData);
  console.log(data.length);

  const output = data.map((item) => ({
    user: item.user.username,
    pass: item.user.password,
    auth: item.steamguard.shared_secret,
  }));

  // Output the result as a JSON string
  console.log(JSON.stringify(output, null, 2));
  fs.writeFileSync(
    "accounts_validate_output.json",
    JSON.stringify(output, null, 2)
  );
} catch (error) {
  console.error("Error parsing JSON:", error.message);
  process.exit(1);
}
