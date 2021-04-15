
import { router } from "./pizzas";
import supertest from "supertest";
import express from "express";
import { database } from "../database";
describe('api/', () => {
   beforeAll(async () => {
      await database.migrate.latest();
   })
   afterAll(async () => {
      await database.destroy();
   });

   describe('Post/ insert pizza', () => {
      
     
    
      it('should create a new pizza', async () => {
          
         const request = supertest(express().use(express.json()).use(router))
         const result = await request.post("/pizzas").send({
               name: 'pizzaTest',
               price : '15'
            })
         
         expect(result.status).toEqual(200)
         expect(result.body).toMatchObject({name:'pizzaTest', price:'15'});
         
      })
   
   
   
   
   })
   
   describe('Get/ get all of pizzas', () => {
   
      it('should return a list of pizza', async () => {
          
         const request = supertest(express().use(router))
         const results = await request.get("/pizzas");
         expect(results.body.length).toBeGreaterThan(1);
         
      })
   
   })
   
   
 }
)

