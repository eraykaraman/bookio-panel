import express from "express";
import { Sequelize } from "sequelize";
import cors from "cors";

const app = express();
app.use(cors());

const sequelize = new Sequelize("test", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(8800, () => {
  console.log("Connected to backend!");
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", async (req, res) => {
  const [results, metadata] = await sequelize.query("SELECT * FROM books");
  if (results) {
    return res.json(results);
  } else {
    return res.send("something went wrong");
  }
});

app.post("/books", async (req, res) => {
  await sequelize.query(
    "INSERT INTO books (title, description, img, price ) VALUES ((?), (?), (?), (?))",
    {
      replacements: [
        req.body.title,
        req.body.description,
        req.body.img,
        req.body.price,
      ],
      type: Sequelize.QueryTypes.INSERT,
    }
  );
  return res.send("book created");
});

app.delete("/books/:id", async (req, res) => {
  const id = req.params.id;
  await sequelize.query("DELETE FROM books  WHERE id = (?)", {
    replacements: [id],
    type: Sequelize.QueryTypes.DELETE,
  });
  return res.send("book deleted");
});

app.put("/books/:id", async (req, res) => {
  const id = req.params.id;
  await sequelize.query(
    "UPDATE books SET title = ?, description = ?, img= ?, price= ?  WHERE id = ?",
    {
      replacements: [
        req.body.title,
        req.body.description,
        req.body.img,
        req.body.price,
        id,
      ],
      type: Sequelize.QueryTypes.UPDATE,
    }
  );

  return res.send("book updated");
});
