const { execSync } = require("child_process");
const readline = require("readline");

// Create an interface to ask for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your commit message: ", (message) => {
  if (!message.trim()) {
    console.log("Commit message cannot be empty.");
    process.exit(1);
  }

  try {
    // Stage all changes
    execSync("git add .", { stdio: "inherit" });

    // Commit with the user-provided message
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });

    console.log("✔ Changes committed successfully!");
  } catch (error) {
    console.error("❌ Error committing changes:", error.message);
  }

  rl.close();
});
