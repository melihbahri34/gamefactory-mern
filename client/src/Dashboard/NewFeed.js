import React, { useEffect, useState } from 'react';

// jwt for security
import jwt from 'jsonwebtoken';

// routing
import { useHistory } from 'react-router-dom';

const NewFeed = () => {
	const history = useHistory()
	const [feed, setFeed] = useState('')
	const [tempFeed, setTempFeed] = useState('')

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')
			}
		}
	}, [])

   	async function postFeed(event) {
   		event.preventDefault()
   
   		const req = await fetch('http://localhost:2002/api/feed-data', {
   			method: 'POST',
   			headers: {
   				'Content-Type': 'application/json',
   			},
   			body: JSON.stringify({
   				feed: tempFeed,
   			}),
   		})
   
   		const data = await req.json()

   		if (data.status === 'ok') {
   			setFeed(tempFeed)
   			setTempFeed('')
   		} else {
   			alert(data.error)
   		}
   	}

    return (
        <div class="pt-16 mx-auto">
            <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                 You are sharing new feed
              </div>
  
              <div class="mt-8">
                  <form onSubmit={postFeed} autoComplete="off">
  
                      <div class="flex flex-col mb-2">
                          <div class="flex relative ">
                             <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                 <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                     </path>
                                 </svg>
                             </span>
                             <input 
  						        value={tempFeed} onChange={(e) => setTempFeed(e.target.value)} type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Feed"/>
  						</div>
                      </div>
  
  					<div class="flex w-full">
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
    
export default NewFeed;