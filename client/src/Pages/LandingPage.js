import React, { Component } from 'react';

import FooterApp from '../Components/FooterApp';

export default class LandingPage extends Component {
    render() {
        return (  
            <div>

               <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
                   <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                       <div class="flex-shrink-0">
                           <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                               <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                   </path>
                               </svg>
                           </div>
                       </div>
                       <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                           Website Design
                       </h3>
                       <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                           Encompassing today’s website design technology to integrated and build solutions relevant to your business.
                       </p>
                   </div>
                   <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                       <div class="flex-shrink-0">
                           <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                               <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                   </path>
                               </svg>
                           </div>
                       </div>
                       <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                           Branding
                       </h3>
                       <p class="text-md text-gray-500 dark:text-gray-300 py-4">
                           Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
                       </p>
                   </div>
                   <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                       <div class="flex-shrink-0">
                           <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                               <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                   </path>
                               </svg>
                           </div>
                       </div>
                       <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                           SEO Marketing
                       </h3>
                       <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                           Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
                       </p>
                   </div>
               </div>

                <div class="bg-white dark:bg-gray-800 ">
                    <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span class="block">
                                Want to be millionaire ?
                            </span>
                            <span class="block text-indigo-500">
                                It&#x27;s today or never.
                            </span>
                        </h2>
                        <div class="lg:mt-0 lg:flex-shrink-0">
                            <div class=" inline-flex rounded-md shadow">
                                <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-32">
                  <FooterApp/>
                </div>
            </div>
        )
    }
}