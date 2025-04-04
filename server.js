require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = "data.json";

function readData() {
    if (!fs.existsSync(DATA_FILE)) {
        return { users: [] };
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post("/register", async (req, res) => {
    const { name, email, password, phone } = req.body;
    let data = readData();

    if (data.users.some(user => user.email === email)) {
        return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    data.users.push({ id: data.users.length + 1, name, email, password: hashedPassword, phone });
    writeData(data);

    res.json({ message: "Registration successful!" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let data = readData();

    const user = data.users.find(user => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid credentials." });
    }

    res.json({ message: "Login successful!", user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
