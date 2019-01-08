import React from 'react';
import Sunny from '@material-ui/icons/WbSunny';
import Star from '@material-ui/icons/Star';
import Personal from '@material-ui/icons/Person';
import { yellow, amber, teal } from '@material-ui/core/colors';

export default {
    'My Day': {
        todoItems: [
            {
                title: 'Drop e-mail to clients',
                completed: false,
            }
        ],
        icon: <Sunny nativeColor={amber[300]} />
    }
    ,
    'Important': {
        todoItems: [
            {
                title: 'Buy medicines',
                completed: false,
            }
        ],
        icon: <Star nativeColor={yellow[600]} />
    },
    'Personal': {
        todoItems: [
            {
                title: 'Make lunch',
                completed: false,
            }
        ],
        icon: <Personal nativeColor={teal[500]} />
    }
}