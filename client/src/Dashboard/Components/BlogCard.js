import React, { Component } from 'react';

import { useHistory, generatePath, useRouteMatch } from 'react-router-dom';

import * as ROUTES from '../../Constants/routes';

const BlogCard = (props) => {

    let history = useHistory();

    const { url } = useRouteMatch();

    const cardID = props.cardId;
    const title = props.title;
    const subtitle = props.subtitle;
    const article = props.article;
    const image = props.image;
    const date = props.date;
    const author = props.author;
    const authorImage = props.authorImage;

    const redirectDetailed = () => {

      localStorage.setItem("title", title);
      localStorage.setItem("subtitle", subtitle);
      localStorage.setItem("article", article);
      localStorage.setItem("blogId", cardID);

      localStorage.setItem("blogImage", image);
      localStorage.setItem("blogDate", date);
      localStorage.setItem("author", author);
      localStorage.setItem("authorImage", authorImage);

      history.push(ROUTES.BLOG_DETAILED + '/' + title);
    }

    return(
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a onClick={redirectDetailed} class="w-full block h-full">
                <img 
                    alt="blog photo" 
                    src={props.image}
                    class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {props.title}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                        {props.subtitle}
                    </p>
                    <div class="flex items-center mt-4">
                        <a class="block relative">
                            <img alt="profil" src={props.authorImage} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </a>
                        <div class="flex flex-col justify-between ml-4 text-sm">
                            <p class="text-gray-800 dark:text-white">
                                {props.author}
                            </p>
                            <p class="text-gray-400 dark:text-gray-300">
                                {props.date}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BlogCard;