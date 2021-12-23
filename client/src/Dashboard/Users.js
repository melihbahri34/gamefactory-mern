import React, { Component, useEffect, useState } from 'react';

// components
import UserCard from './Components/UserCard';

// get, post data & json
import axios from 'axios';

export default class Users extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/users-data/')
        .then(response => {
          this.setState({ users: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render() {
        const listItems = this.state.users.map((d) => <UserCard name={d.name} role={d.title} currentPosition={d.currentPosition}>
        </UserCard>);

        return (     
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">      
                <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:px-6 border-b w-full">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            User database
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Details and informations about users.
                        </p>
                    </div>
                    <ul class="flex flex-col divide divide-y w-full">
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    }
}