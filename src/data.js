import React from 'react';
import Sunny from '@material-ui/icons/WbSunny';
import Star from '@material-ui/icons/Star';
import Personal from '@material-ui/icons/Person';

export default {
    'My Day': {
        todoItems: [
            {
                id: 0,
                title: 'Drop Email to clients',
                completed: false,
            }
        ],
        icon: <Sunny />
    }
    ,
    'Important': {
        todoItems: [
            {
                id: 0,
                title: 'Buy medicines',
                completed: false,
            }
        ],
        icon: <Star />
    },
    'Personal': {
        todoItems: [
            {
                id: 0,
                title: 'Make lunch',
                completed: false,
            }
        ],
        icon: <Personal />
    }
}