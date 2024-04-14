import { Job } from "../models/";
import { connectToDB } from "../../utils/connectToDB";

export const fetchAllJobs = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Job.find({ title: { $regex: regex } }).count();
    const jobs = await Job.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, jobs };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch jobs!");
  }
};

export const fetchJob = async (id) => {
  try {
    connectToDB();
    const job = await Job.findById(id);
    return job;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch job!");
  }
};
