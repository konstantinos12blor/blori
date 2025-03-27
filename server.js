const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Σύνδεση με MongoDB (ή MySQL αν προτιμάς)
mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// Εγγραφή
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({ message: "Ο χρήστης υπάρχει ήδη!" });
    }

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "Επιτυχής εγγραφή!" });
});

// Σύνδεση
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.json({ message: "Λάθος email ή κωδικός!" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.json({ message: "Λάθος email ή κωδικός!" });
    }

    res.json({ message: "Επιτυχής σύνδεση!", success: true });
});

// Εκκίνηση του server
app.listen(3000, () => console.log("Server running on port 3000"));
