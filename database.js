const { MongoClient, Decimal128 } = require("mongodb");
const uri =
  "mongodb+srv://pmas9211:123@cluster0.fwjpk1t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const primero = async () => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection.find({ bathrooms: { $gte: 2 } }).toArray();
  return result;
};

const segundo = async () => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection
    .find({ price: { $lte: 300 } })
    .sort({ price: -1 })
    .limit(500)
    .toArray();
  return result;
};

const tercero = async () => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection.find({ house_rules: /No smoking/ }).toArray();
  return result;
};
const cuarto = async () => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection
    .find({
      last_review: {
        $gte: new Date("2017-02-01"),
        $lt: new Date("2018-12-23"),
      },
    })
    .toArray();
  return result;
};

const quinto = async () => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection
    .find({
      $or: [
        { cancellation_policy: "moderate" },
        { cancellation_policy: "flexible" },
      ],
    })
    .toArray();
  return result;
};

const sexto = async () => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection
    .find({ $and: [{ bedrooms: 6 }, { beds: 6 }] })
    .toArray();
  return result;
};

const filtrarPrecio = async (valor) => {
  const database = client.db("sample_airbnb");
  const collection = await database.collection("listingsAndReviews");
  const result = await collection
    .find({ price: { $eq: new Decimal128(valor) } })
    .toArray();
  return result;
};

module.exports = {
  primero,
  segundo,
  tercero,
  cuarto,
  quinto,
  sexto,
  filtrarPrecio,
};
