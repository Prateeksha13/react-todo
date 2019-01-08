import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withStyles } from '@material-ui/core/styles';

import * as customTheme from '../theme';

const styles = {
    container: {
        padding: 20
    },
    actionRoot: {
        right: 20,
        height: 22,
        width: 22,
        backgroundColor: customTheme.highlightColor,
        textAlign: 'center',
        borderRadius: '50%',
        paddingTop: 2,
        fontSize: customTheme.smallFont
    },
    selected: {
        padding: 20,
        borderLeft: '5px solid',
        borderLeftColor: customTheme.accentColor
    }
}

const SidebarCategory = (props) => {
    const { classes } = props;
    return (
        <ListItem button
            classes={{'root': props.selected ? classes.selected : classes.container}}
            onClick={() => props.handleCategorySelection(props.categoryName)}>
            <ListItemIcon>{props.categoryIcon}</ListItemIcon>
            <ListItemText primary={props.categoryName} />
            <ListItemSecondaryAction classes={{'root': classes.actionRoot}}>{props.taskCount}</ListItemSecondaryAction>
        </ListItem>
    )
}

export default withStyles(styles)(SidebarCategory);