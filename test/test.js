const Product = require('../src/models/Product.model')
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const delay = require('delay');
chai.should();

chai.use(chaiHttp);


describe('Test', function() {
    it('should resolve', async function() {
      await delay(1000)
    })
})

describe("Products", () => {
    beforeEach((done) => {
      Product.deleteMany({}, (err) => {
        done();
      });
    });
    describe("/GET product", () => {
      it("it should GET all the products", (done) => {
        chai
          .request(app)
          .get("/api/products")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("array");
            res.body.data.length.should.be.eql(0);
            done();
          });
      });
    });
    describe("/POST product", () => {
        it("it should new POST a product", (done) => {
          let product = {
            name: "Product Name",
            price: "200"
         };
          chai
            .request(app)
            .post("/api/products")
            .send(product)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a("object");
              res.body.status.should.be.eql("success");
              done();
            });
        });
    });
    describe("/GET/:id product", () => {
        it("it should GET a product by the id", (done) => {
          let product = new Product({
            name: "Product Name",
            price: "200"
            });
          product.save((err, product) => {
            chai
              .request(app)
              .get("/api/products/" + product.id)
              .send(product)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a("object");
                res.body.status.should.be.eql("success");
                done();
              });
          });
        });
    });
    describe("/PUT/:id product", () => {
        it("it should UPDATE a product given the id", (done) => {
          let product = new Product({
            name: "Product Name",
            price: "300"
          });
          product.save((err, product) => {
            console.log(product.id);
            chai
              .request(app)
              .put("/api/products/" + product.id)
              .send({
                name: "New Product Name",
                price: "300"
              })
              .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a("object");
                res.body.status.should.be.eql("success");
                done();
              });
          });
        });
    });
    describe("/DELETE/:id product", () => {
        it("it should DELETE a product given the id", (done) => {
          let product = new Product({
            name: "Product Name",
            price: "200"
        });
          product.save((err, product) => {
            chai
              .request(app)
              .delete("/api/products/" + product.id)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a("object");
                res.body.status.should.be.eql("success");
                done();
              });
          });
        });
      });
});