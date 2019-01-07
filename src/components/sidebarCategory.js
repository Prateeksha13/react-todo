import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const SidebarCategory = ({categoryIcon, categoryName, taskCount, handleCategorySelection}) => {
    return (
        <ListItem button onClick={() => handleCategorySelection(categoryName)}>
            <ListItemIcon>{categoryIcon}</ListItemIcon>
            <ListItemText primary={categoryName} />
            <ListItemSecondaryAction>{taskCount}</ListItemSecondaryAction>
        </ListItem>
    )
}

export default SidebarCategory;