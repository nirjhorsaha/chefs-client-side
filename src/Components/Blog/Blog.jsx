import React from 'react';
import './Blog.css'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto mt-8 text-oscuro mb-8">
                <div className="flex flex-col justify-center w-full ">
                    <div ref={ref}>
                        <section className="text-gray-700">
                            <div className="container mx-auto">
                                <div className="text-center mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-orange-400">
                                        Frequently Asked Question
                                    </h1>
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-start">
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                Differences between uncontrolled and controlled components.
                                            </summary>

                                            <span className="px-4 py-2">
                                                <li>
                                                    Controlled components are predictable because the state of the form elements is handled by the component. Where uncontrolled components are not predictable because, during the lifecycle of a component, the form elements can lose their reference and may be changed/affected by other sources.
                                                </li>
                                                <li>
                                                    A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
                                                    A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML
                                                </li>
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                How to validate React props using PropTypes?
                                            </summary>

                                            <span className="px-4 py-2">
                                                React Props are an important mechanism in our application, since they read-only and immutable, the React props validation becomes a big issue because props used to transfer data from one component to another component. React Props validation can be described as a program that can assist developers in avoiding any future bugs or issues. It’s a great tool to enforce the correct use of your components. React components have unique properties called propType. PropTypes help you identify bugs by validating data types of the values transmitted through props. However, it isn’t necessary to create components that use propTypes. If you do use propTypes in the components you make, this will help you to prevent unexpected bugs. <br />
                                                To validate React props using PropTypes, you need to import the PropTypes library from the "prop-types" package. Then you can define the propTypes as static properties of your React component class.
                                            </span>
                                        </details>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                Difference between nodejs and express js.
                                            </summary>

                                            <span className="px-4 py-2">
                                                Node.js is a runtime environment that allows you to run JavaScript code on the server-side, outside of the browser. It provides a set of APIs and libraries that allow you to build server-side applications, network applications, and command-line tools using JavaScript. Node.js uses the V8 JavaScript engine from Google Chrome to execute JavaScript code outside of the browser. <br />
                                                Express.js, on the other hand, is a popular web application framework for Node.js. It provides a set of features and tools that simplify the process of building web applications and APIs with Node.js. Express.js provides a set of middleware functions that you can use to add functionality to your application, such as handling HTTP requests and responses, parsing request bodies, and managing sessions. Express.js also provides routing capabilities, allowing you to define routes for your application and map them to specific handlers.
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is a custom hook, and why will you create a custom hook?
                                            </summary>

                                            <span className="px-4 py-2">
                                                A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. <br />
                                                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                                            </span>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Pdf targetRef={ref} filename="blog.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='btn btn-wide justify-center mx-auto btn-outline'>Generate PDF</button>}
                    </Pdf>
                </div>
            </div>
        </div>
    );
};

export default Blog;