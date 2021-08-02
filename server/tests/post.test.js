const request = require("supertest");
const app = require("../app");
const { assert } = require("chai");
describe("POST /event", function () {
  let data = {
    firstName: "Name",
    lastName: "lastName",
    email: "name@lastname.com",
    eventDate: "2020-01-01T00:00",
  };
  it("respond with 201 created", function (done) {
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when firstName is undefined", function (done) {
    data.firstName = undefined;
    let isUndefined = function (res) {
      assert.equal(
        res.body.errors.firstName.msg,
        "First name field must exist."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isUndefined)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when firstName is empty", function (done) {
    data.firstName = "";
    let isEmpty = function (res) {
      assert.equal(res.body.errors.firstName.msg, "First name can't be empty.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isEmpty)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when firstName is not alphabetic", function (done) {
    data.firstName = "123nflads";
    let isNotAlphabetic = function (res) {
      assert.equal(
        res.body.errors.firstName.msg,
        "First name must be alphabetic."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isNotAlphabetic)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when firstName less than 2 characters", function (done) {
    data.firstName = "s";
    let isTooShort = function (res) {
      assert.equal(
        res.body.errors.firstName.msg,
        "First name must have more than 2 characters."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isTooShort)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when lastName is undefined", function (done) {
    data.lastName = undefined;
    let isUndefined = function (res) {
      assert.equal(res.body.errors.lastName.msg, "Last name field must exist.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isUndefined)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when lastName is empty", function (done) {
    data.lastName = "";
    let isEmpty = function (res) {
      assert.equal(res.body.errors.lastName.msg, "Last name can't be empty.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isEmpty)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when lastName is not alphabetic", function (done) {
    data.lastName = "123nflads";
    let isNotAlphabetic = function (res) {
      assert.equal(
        res.body.errors.lastName.msg,
        "Last name must be alphabetic."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isNotAlphabetic)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when lastName less than 2 characters", function (done) {
    data.lastName = "s";
    let isTooShort = function (res) {
      assert.equal(
        res.body.errors.lastName.msg,
        "Last name must have more than 2 characters."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isTooShort)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when email is undefined", function (done) {
    data.email = undefined;
    let isUndefined = function (res) {
      assert.equal(res.body.errors.email.msg, "Email field must exist.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isUndefined)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when email is empty", function (done) {
    data.email = "";
    let isEmpty = function (res) {
      assert.equal(res.body.errors.email.msg, "Email can't be empty.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isEmpty)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when email is empty", function (done) {
    data.email = "fdsan@.com";
    let isIncorrect = function (res) {
      assert.equal(res.body.errors.email.msg, "Given email is not correct.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isIncorrect)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when eventDate is undefined", function (done) {
    data.eventDate = undefined;
    let isUndefined = function (res) {
      assert.equal(
        res.body.errors.eventDate.msg,
        "EventDate field must exist."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isUndefined)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when eventDate is empty", function (done) {
    data.eventDate = "";
    let isEmpty = function (res) {
      assert.equal(res.body.errors.eventDate.msg, "EventDate can't be empty.");
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isEmpty)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400 when eventDate is not correct", function (done) {
    data.eventDate = "01-01-2020";
    let isIncorrect = function (res) {
      assert.equal(
        res.body.errors.eventDate.msg,
        "EventDate should be in ISO8601 standard."
      );
    };
    request(app)
      .post("/event")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect(isIncorrect)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
