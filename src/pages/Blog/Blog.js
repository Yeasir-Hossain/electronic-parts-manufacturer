import React from 'react';

const Blog = () => {
    return (
        <div className='text-justify px-12'>
            <h1 className='text-3xl'>Question and Answers</h1>
            <div className='my-5'>
                <p className="text-2xl">1 How will you improve the performance of a React Application?</p>
                <p className="text-xl">i.Prevent re renders. <br /> ii.using dynamic import. <br /> iii.Optimize images. <br /> iv.Efficient rollup production </p>
            </div>
            <div className='my-5'>
                <p className="text-2xl">2 What are the different ways to manage a state in a React application?</p>
                <p className="text-xl">i. useState <br /> ii. useReducer <br />iii. useQuery <br /> iv. swr</p>
            </div>
            <div className='my-5'>
                <p className="text-2xl">3 How does prototypical inheritance work?</p>
                <p className="text-xl"> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. By this one method can inherit or use properties of other method</p>
                </div>
            <div className='my-5'>
                <p className="text-2xl">4 Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</p>
                <p className="text-xl">To track the state of the function in a component.We can easily set the the valu at any time from the UI</p>
            </div>
            <div className='my-5'>
                <p className="text-2xl">5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                <p className="text-xl"> product.find("name")</p>
            </div>
            <div className='my-5'>
                <p className="text-2xl">6 What is a unit test? Why should write unit tests?</p>
                <p className="text-xl">Testing the methods and funtions for a given input is unit testing. <br />We should write unit tests for verifying the output of a function or component for a given input.Checking that the component renders correctly for the specified props. Verifying the code runs as exprected</p>
            </div>

        </div>
    );
};

export default Blog;