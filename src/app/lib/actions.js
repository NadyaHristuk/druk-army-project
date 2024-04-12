"use server";

import { revalidatePath } from "next/cache";
import { Product, User, NewsArticle } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addNewsArticle = async (formData) => {
  const { title, description, imageUrl, author, date, views } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newArticle = new NewsArticle({
      title,
      description,
      imageUrl,
      author,
      date,
      views,
    });

    await newArticle.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create news article!");
  }

  // Assume revalidatePath and redirect are client-side or custom server-side functions
  revalidatePath("/dashboard/news");
  redirect("/dashboard/news");
};

export const updateNewsArticle = async (formData) => {
  const { id, title, description, imageUrl, author, date, views } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = { title, description, imageUrl, author, date, views };

    // Clean up fields that are not updated
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await NewsArticle.findByIdAndUpdate(id, updateFields, { new: true });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update news article!");
  }

  revalidatePath("/dashboard/news");
  redirect("/dashboard/news");
};

export const deleteNewsArticle = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await NewsArticle.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete news article!");
  }

  revalidatePath("/dashboard/news");
};

// _________________________
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
