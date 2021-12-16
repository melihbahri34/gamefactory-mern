import React from 'react';

import { useHistory } from 'react-router-dom';

import * as ROUTES from '../Constants/routes';

// redux
import { useSelector } from 'react-redux';
import {
  selectName
} from '../reducers/authSlice';

const NavbarApp = () => {
    let history = useHistory();

    const redirectLogin = () => {
      history.push(ROUTES.LOGIN)
    }

    const redirectRegister = () => {
      history.push(ROUTES.REGISTER)
    }

    // const name = useSelector(selectName);
    const name = localStorage.getItem('name');

    return (  
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container px-6 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-semibold text-gray-700">
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">GameFactory</a>
                        </div> 
                        <div class="flex md:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 md:flex md:items-center md:justify-between">
                        <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <a href={ROUTES.PRICING} class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Pricing</a>
                            <a href={ROUTES.ACCOUNT} class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Dashboard</a>
                        </div>
                        <div class="flex items-center mt-4 md:mt-0">

                            <div>{name ? 
                                <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
                                    <a href={ROUTES.ACCOUNT} type="button" disabled="" class="py-2 px-4  bg-green-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                        Account
                                    </a>
                                </ul> 
                                : 
                                <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
                                    <a href={ROUTES.LOGIN} type="button" disabled="" class="py-2 px-4  bg-gray-800 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                        Login
                                    </a>
                                    <a href={ROUTES.REGISTER} type="button" disabled="" class="py-2 px-4  bg-green-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                        Register
                                    </a>
                                </ul>
                            }</div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}
  
export default NavbarApp;

/*
                            <div>{user ? 
                                <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
                                    <a href={ROUTES.ACCOUNT} type="button" disabled="" class="py-2 px-4  bg-green-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                        Account
                                    </a>
                                </ul> 
                                : 
                                <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
                                    <a href={ROUTES.LOGIN} type="button" disabled="" class="py-2 px-4  bg-gray-800 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                        Login
                                    </a>
                                    <a href={ROUTES.REGISTER} type="button" disabled="" class="py-2 px-4  bg-green-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                        Register
                                    </a>
                                </ul>
                            }</div>
                            */