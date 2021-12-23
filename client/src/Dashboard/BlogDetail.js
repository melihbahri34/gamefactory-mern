import React, { Component } from 'react';

function BlogDetail(props) {
    const title = localStorage.getItem("title");
    const subtitle = localStorage.getItem("subtitle");
    const article = localStorage.getItem("article");

    const blogImage = localStorage.getItem("blogImage");
    const blogDate = localStorage.getItem("blogDate");
    const author = localStorage.getItem("author");
    const authorImage = localStorage.getItem("authorImage");

    return(
        <div class="bg-white">
            <div class="flex items-center px-12 -mx-2 pt-6">
                <img class="object-cover mx-2 rounded-full h-9 w-9" src={authorImage} alt="avatar"/>
                <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{author}</h4>
            </div>

            <div class="w-full bg-white p-12">
                <div class="header flex items-end justify-between mb-12">
                    <div class="title">
                        <p class="text-4xl font-bold text-gray-800 mb-4">
                            {title}
                        </p>
                        <p class="text-2xl font-light text-gray-400">
                            {subtitle}
                        </p>

                        <div dangerouslySetInnerHTML={{ __html: article }} />

                        <img class="pt-6" src={blogImage}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;