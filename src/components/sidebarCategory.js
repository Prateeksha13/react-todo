import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const SidebarCategory = (props) => {
    return (
        <ListItem button onClick={() => props.handleCategorySelection(props.categoryName)}>
            <ListItemIcon>{props.categoryIcon}</ListItemIcon>
            <ListItemText primary={props.categoryName} />
            <ListItemSecondaryAction>{props.taskCount}</ListItemSecondaryAction>
        </ListItem>
    )
}

export default SidebarCategory;