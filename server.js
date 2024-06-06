import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Login_cred",
    password: "1234",
    port: 5432,
  });
  db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// routing
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/courses", (req, res) => {
    res.render("courses.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/instructor", (req, res) => {
    res.render("instructor.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email);
    console.log(password);
  
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedPassword = user.password;
  
        if (password === storedPassword) {
          res.render("single.ejs");
        } else {
          res.send("Incorrect Password");
        }
      } else {
        res.send("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  });

app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

app.post("/signup",async(req,res) =>{
    const email = req.body.username;
    const password = req.body.password;
  
    try {
      const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
  
      if (checkResult.rows.length > 0) {
        res.send("Email already exists. Try logging in.");
      } else {
        const result = await db.query(
          "INSERT INTO users (email, password) VALUES ($1, $2)",
          [email, password]
        );
        console.log(result);
        res.render("secrets.ejs");
      }
    } catch (err) {
      console.log(err);
    }
})

app.get("/single", (req, res) => {
    res.render("single.ejs");
});

app.get("/team", (req, res) => {
    res.render("team.ejs");
});

app.get("/testimonial", (req, res) => {
    res.render("testimonial.ejs");
});

//listen - server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
