import React from 'react';
import Sunny from '@material-ui/icons/WbSunny';
import Star from '@material-ui/icons/Star';
import Personal from '@material-ui/icons/Person';

export default {
    'My Day': {
        todoItems: [
            {
                title: 'Drop e-mail to clients',
                completed: false,
            }
        ],
        icon: <Sunny />
    }
    ,
    'Important': {
        todoItems: [
            {
                title: 'Buy medicines',
                completed: false,
            }
        ],
        icon: <Star />
    },
    'Personal': {
        todoItems: [
            {
                title: 'Make lunch',
                completed: false,
            }
        ],
        icon: <Personal />
    }
}