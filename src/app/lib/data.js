import { Product, User, NewsArticle } from "./models";
import { connectToDB } from "./utils";

export const fetchNewsArticle = async (id) => {
  try {
    connectToDB();
    const newsArticle = await NewsArticle.findById(id);
    return newsArticle;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news article!");
  }
};

export const fetchNewsArticles = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await NewsArticle.find({ title: { $regex: regex } }).count();
    const news = await NewsArticle.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, news };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news!");
  }
};

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};
