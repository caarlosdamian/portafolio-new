"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedBlogs = void 0;
const blogArticles = [
    {
        title: 'Introduction to JavaScript',
        content: 'JavaScript is a versatile programming language used for both client-side and server-side development. In this article, we will explore the basics of JavaScript, including variables, functions, and loops.',
    },
    {
        title: 'Understanding Asynchronous Programming in JavaScript',
        content: "Asynchronous programming allows JavaScript to handle long-running operations without blocking the main thread. We'll dive into promises, async/await, and how to use them effectively in your code.",
    },
    {
        title: '10 Tips to Improve Your React.js App Performance',
        content: "In this article, we'll share 10 actionable tips to boost the performance of your React.js applications, from lazy loading components to optimizing state management.",
    },
];
const seedBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        blogArticles.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
            // await BlogModel.create({ ...element, userId: user?._id });
        }));
    }
    catch (error) { }
});
exports.seedBlogs = seedBlogs;
