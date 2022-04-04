import React from 'react';

const Blogs = () => {
    return (
        <div className='text-justify text-lg mt-5'>
            <div className='shadow-lg p-3 m-3 '>
                <h1> What is Context API?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='shadow-lg p-3 m-3 '>
                <h1> What are Semantic Tags in HTML?</h1>
                <p>Semantic HTML tags allow you to add meaning to your markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads your content it doesn’t understand the context and meaning. Semantic HTML tags let you serve structured content to your users, which is especially important for on-page SEO and accessibility.

                    Although semantic tags existed in earlier HTML versions, the HTML5 specifications added several new semantic elements to the syntax—both on the block and inline levels. In this article, we’ll look into how HTML semantics work and also give you some tips about how to get the most out of the feature.</p>
            </div>

        </div>
    );
};

export default Blogs;