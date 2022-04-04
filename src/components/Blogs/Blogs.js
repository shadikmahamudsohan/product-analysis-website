import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-primary mb-5 text-decoration-underline'>Answering the questions</h1>
            <div className='mb-5'>
                <h2>1. What is context API.</h2>
                <p className='fs-5'>
                    <span className='fw-bolder'>Answer: </span>
                    Context API is a way to pass data to any child or grandchild of a parent component. If you want to pass any parent's data to it's grandchild you can't pass it strate from the parent component. You have to pass the data to it's child component and then form the child component you have to again pass the data to it's child component. Context API helps to pass data to any component under the parent element. It use context in the child element you have to use useContext hook and you will need to pass the context what you made in the parent.
                </p>
            </div>
            <div className='mb-5'>
                <h2>2. What is semantic tag.</h2>
                <p className='fs-5'>
                    <span className='fw-bolder'>Answer: </span>
                    Semantic tag is HTML tags which container it's own meaning. For example div tag doesn't contain any meaning in the website. If you use div it is hard to tell what that tag is used for. In HTML5 there are new semantic tags like header, nav, section, article etc. that introduces meaning of that tag. Also the header, paragraph, blockquote etc. are semantic tags because each of them contain it's own meaning. But tags like b or I doesn't have any meaning so it is not called semantic tag.
                </p>
            </div>
        </div>
    );
};

export default Blogs;