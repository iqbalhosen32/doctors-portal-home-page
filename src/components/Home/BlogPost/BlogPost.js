import React from 'react';

const BlogPost = ({ blog }) => {
    return (
        <div style={{width: '330px', margin: '20px', padding: '10px'}} className="col-md-4 mt-5 pt-5 shadow p-3 mb-5 bg-white rounded">
            <div className="d-flex">
                <div>
                    <img style={{ width: '50px' }} src={blog.img} alt=""></img>
                </div>
                <div>
                    <h6>{blog.name}</h6>
                    <small>{blog.date}</small>
                </div>
            </div>
            <div className="mt-4 mb-4">
                <h6 className>{blog.title}</h6>
                <p className="text-secondary">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;