const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server Test!", () => {
  it("welcomes user to the home page", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.status).to.equals("success");
        // expect(res.body.message).to.equals("Welcome To Testing API");
        // done();
        });
   })})