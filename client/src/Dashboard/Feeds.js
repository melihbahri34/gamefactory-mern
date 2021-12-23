import React, { Component, useEffect, useState } from 'react';

// components
import UserCard from './Components/UserCard';
import FeedCard from './Components/FeedCard';

// get, post data & json
import axios from 'axios';

export default class Feeds extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            feeds: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/feed-data/')
        .then(response => {
          this.setState({ feeds: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render() {
        const listItems = this.state.feeds.map((d) => <FeedCard name={d.feed}>
        </FeedCard>);

        return (     
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">      
                <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 shadow">
                    <div class="px-4 py-5 sm:px-6 border-b w-full">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Feed database
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Feeds from users.
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