import React, { Component, useEffect, useState } from 'react';

// components
import BlogCard from './Components/BlogCard';

// get, post data & json
import axios from 'axios';

export default class Blogs extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            blogs: [],
            render: false,
        };
    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 1000)

        axios.get('http://localhost:1337/blogs/')
			.then((res) => {
				this.setState({ blogs: res.data })
			})
			.catch((err) => {
				console.log(err);
			});
    }

    render() {
        const listItems = this.state.blogs.map((d) => <BlogCard title={d.blogTitle} subtitle={d.blogSubtitle} article={d.blogArticle} image={`http://localhost:1337/images/${d.blogImage}`} date={d.blogDate} author={d.blogAuthor} authorImage={d.blogAuthorProfile}>
        </BlogCard>);

        return (     
            <div class="w-full bg-white p-12">
                <div class="header flex items-end justify-between mb-12">
                    <div class="title">
                        <p class="text-4xl font-bold text-gray-800 mb-4">
                            Lastest articles
                        </p>
                        <p class="text-2xl font-light text-gray-400">
                            All article are verified by 2 experts and valdiate by the CTO
                        </p>
                    </div>
                    <div class="text-end">
                        <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    {this.state.render ? 
                        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                            {listItems}    
                        </div>
                        : 
                        <button type="button" class="" disabled>
                          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                          </svg>
                          Loading...
                        </button>
                    }
                </div>
            </div>
        )
    }
}