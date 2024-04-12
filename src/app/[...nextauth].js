import NextAuth from "next-auth";
import { authConfig } from "./authConfig";

export default NextAuth({
  ...authConfig,
  // other configurations...
});
