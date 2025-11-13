const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const url = process.env.MONGODB_ID;
if (!url) {
  console.warn("MangoDB id is not found");
}
mongoose
  .connect(url)
  .then(() => {
    console.log("Registration DB is connected!!!");
  })
  .catch((error) => {
    console.log(error);
  });

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
});

RegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

RegisterSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Register = mongoose.model("RegisterData", RegisterSchema);

module.exports = Register;
