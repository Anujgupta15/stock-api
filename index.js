import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  // "mongodb://localhost:27017/myLoginRegisterDB",
  "mongodb+srv://Anuj12345:12345@cluster0.rdxkssv.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

const basicSchema = new mongoose.Schema({
  Date: String,
  Open: String,
  High: String,
  Low: String,
  Close: String,
  Adj_Close: String,
  Volume: String,
});

const Nse = new mongoose.model("Nse", basicSchema);

const Ashokley = new mongoose.model("Ashokley", basicSchema);
const Bse = new mongoose.model("Bse", basicSchema);
const Cipla = new mongoose.model("Cipla", basicSchema);
const Eichermot = new mongoose.model("Eichermot", basicSchema);
const Reliance = new mongoose.model("Reliance", basicSchema);
const Tatasteel = new mongoose.model("Tatasteel", basicSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});
var result = [];
const getDocument = async () => {
  result = await Nse.find();
  console.log("hi");
  // console.log(result);
};
getDocument();
////////////////////////////
var ashk = [];
const getDocument1 = async () => {
  ashk = await Ashokley.find();
  console.log("hi");
  // console.log(ashk);
};
getDocument1();
////////////////////////////
var bseek = [];
const getDocument2 = async () => {
  bseek = await Bse.find();
  console.log("hi");
  // console.log(ashk);
};
getDocument2();

//////////////////////

var ciplak = [];
const getDocument3 = async () => {
  ciplak = await Cipla.find();
  console.log("hi");
  // console.log(ashk);
};
getDocument3();
///////////////////////

// var ciplak = [];
// const getDocument4 = async () => {
//   ciplak = await Cipla.find();
//   console.log("hi");
//   // console.log(ashk);
// };
// getDocument4();
/////////////////////
var eichermotk = [];
const getDocument5 = async () => {
  eichermotk = await Eichermot.find();
  console.log("hi");
  // console.log(ashk);
};
getDocument5();
///////////////////////

var reliancesk = [];
const getDocument6 = async () => {
  reliancesk = await Reliance.find();
  console.log("hi");
  // console.log(ashk);
};
getDocument6();
/////////////////

var tatasteelk = [];
const getDocument7 = async () => {
  tatasteelk = await Tatasteel.find();
  console.log("hi");
  // console.log(ashk);
};
getDocument7();

app.get("/NSE", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(result);
});

app.get("/ASHOKLEY", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(ashk);
});

app.get("/BSE", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(bseek);
});

app.get("/CIPLA", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(ciplak);
});
app.get("/EICHERMOT", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(eichermotk);
});

app.get("/RELIANCE", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(reliancesk);
});

app.get("/TATASTEEL", (req, res) => {
  console.log("in backend");
  // console.log(result);
  res.send(tatasteelk);
});

app.listen(process.env.PORT || 9002, () => {
  console.log("BE started at port 9002");
});
