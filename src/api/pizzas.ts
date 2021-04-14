import { Router } from "express";
import { PizzaModel } from "../database";

export const router = Router();


router.get("/", (req, resp) => {
  resp.send("Hello Pizzas miammmm !")
})




// Get all
router.get("/pizzas", async (req, res) => {
  const pizzas = await PizzaModel.query();
  res.json(pizzas);
});

// insert pizza
router.post("/pizzas", async (req, res) => {
  const { name, price } = req.body;
  const pizza = await PizzaModel.query()
    .insert({
      name,
      price
    })
    .returning("*");
  res.json(pizza);
});

// update a pizza

router.put("/pizzas/:id", async (req, res) => {
  const { name, price } = req.body;
  const pizza = await PizzaModel.query().findById(req.params.id).patch({
      name,
      price
    }).returning("*");;
    res.json(pizza);
}) 

// Get a pizza by id
router.get("/pizzas/:id", async (req, res) => {
  
  const pizza = await PizzaModel.query()
    .findById(req.params.id);
  res.json(pizza);
} )

// delete a pizza
router.delete("/pizzas/:id", async (req, res) => {

  const pizza = await PizzaModel.query()
    .deleteById(req.params.id);
    res.send("Successfuly deleted pizza");
})



  