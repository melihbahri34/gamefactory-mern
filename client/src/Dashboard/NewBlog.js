import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

const NewBlog = () => {
	const history = useHistory();

	const [blogTitle, setBlogTitle] = useState('');
	const [tempBlogTitle, setTempBlogTitle] = useState('');

	const [blogSubtitle, setBlogSubtitle] = useState('');
	const [tempBlogSubtitle, setTempBlogSubtitle] = useState('');

	const [blogArticle, setBlogArticle] = useState('');
	const [tempBlogArticle, setTempBlogArticle] = useState('');

	// const [blogImage, setBlogImage] = useState('');
	// const [tempBlogImage, setTempBlogImage] = useState('');

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')
			} else {
				// populateQuote()
			}
		}
	}, [])

   	async function postBlog(event) {
   		event.preventDefault();
   
		const current = new Date();

		const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
		const blogAuthor = localStorage.getItem("name");

		const blogImage = "https://www.tailwind-kit.com/images/blog/1.jpg";
		const blogAuthorProfile = "https://media-exp1.licdn.com/dms/image/C4D03AQEoQX3JEaGaiA/profile-displayphoto-shrink_800_800/0/1638460106201?e=1644451200&v=beta&t=pqCAzPEdFLK6ZFBYNqNZ0THIEYtxvvhAJ8wRGEIVogc";

   		const req = await fetch('http://localhost:1337/api/blog-data', {
   			method: 'POST',
   			headers: {
   				'Content-Type': 'application/json',
   			},
   			body: JSON.stringify({
   				blogTitle: tempBlogTitle,
				blogSubtitle: tempBlogSubtitle,
				blogArticle: tempBlogArticle,
				blogImage: blogImage,
				blogDate: date,
				blogAuthor: blogAuthor,
				blogAuthorProfile: blogAuthorProfile,
   			}),
   		})
   
   		const data = await req.json()

   		if (data.status === 'ok') {
   			setBlogTitle(tempBlogTitle);
   			setTempBlogTitle('');

			setBlogSubtitle(tempBlogSubtitle);
   			setTempBlogSubtitle('');

			setBlogArticle(tempBlogArticle);
			setTempBlogArticle('');
   		} else {
   			alert(data.error)
   		}
   	}

    return (
        <div class="pt-16 mx-auto w-4/6 h-4/6">
            <div class="w-full p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                 You are sharing new blog
              </div>
  
              <div class="mt-8">
                  <form onSubmit={postBlog} autoComplete="off">
  
                    <div class="flex flex-col mb-2">
                        <div class="flex relative pt-6">
                           <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                               <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                   </path>
                               </svg>
                           </span>
                           <input 
						        value={tempBlogTitle} onChange={(e) => setTempBlogTitle(e.target.value)} type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Blog Title"/>
						</div>

						<div class="flex relative pt-6">
                           <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                               <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                   </path>
                               </svg>
                           </span>
                           <input 
						        value={tempBlogSubtitle} onChange={(e) => setTempBlogSubtitle(e.target.value)} type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Blog Subtitle"/>
						</div>

						<div class="flex relative pt-6">
                           <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                               <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                   </path>
                               </svg>
                           </span>
                           <textarea 
						        value={tempBlogArticle} onChange={(e) => setTempBlogArticle(e.target.value)} type="text" class="resize-none rounded-r-lg flex-1 appearance-none border border-gray-300 w-full h-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Blog Article"/>
						</div>
                    </div>
  
  					<div class="flex w-full pt-6">
  					    <div class="flex w-full">
     						    <input type="submit" value="Share" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              </input>
  						</div>
                      </div>
                  </form>
              </div>
  		    </div>
        </div>
    )
}
    
export default NewBlog;