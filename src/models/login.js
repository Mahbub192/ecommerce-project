import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});
const Login = mongoose.model("Login", loginSchema)

export default Login;