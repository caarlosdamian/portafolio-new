import { BlogModel } from '../models/blog.model';

const blogArticles = [
  {
    title: 'Introduction to JavaScript',
    content:
      'JavaScript is a versatile programming language used for both client-side and server-side development. In this article, we will explore the basics of JavaScript, including variables, functions, and loops.',
  },
  {
    title: 'Understanding Asynchronous Programming in JavaScript',
    content:
      "Asynchronous programming allows JavaScript to handle long-running operations without blocking the main thread. We'll dive into promises, async/await, and how to use them effectively in your code.",
  },
  {
    title: '10 Tips to Improve Your React.js App Performance',
    content:
      "In this article, we'll share 10 actionable tips to boost the performance of your React.js applications, from lazy loading components to optimizing state management.",
  },
];

export const seedBlogs = async () => {

  try {
    blogArticles.forEach(async (element) => {
      await BlogModel.create({ ...element, userId: user?._id });
    });
  } catch (error) {}
};
