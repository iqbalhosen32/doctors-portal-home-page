import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import BlogPost from './../BlogPost/BlogPost';

const blogData = [
    {
        name: 'Winson Herry',
        img: '',
        date: '01 Jan 2021',
        title: 'Check at least a doctor in a year for your teeth'
    },
    {
        name: 'Winson Herry',
        img: people1,
        date: '01 Jan 2021',
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
        name: 'Winson Herry',
        img: people2,
        date: '01 Jan 2021',
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    }
]

const Blog = () => {
    return (
        <section>
            <div className="text-center">
                <h6 className="mt-5 mb-3" style={{ color: '#1CC7C1' }}>OUR BLOG</h6>
                <h2 style={{ color: '#3D4059' }}>From Our Blog News</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;