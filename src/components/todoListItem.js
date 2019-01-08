import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CheckCircleOutline from '@material-ui/icons/RadioButtonUnchecked';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import * as customTheme from '../theme';

const styles = {
    container: {
        borderBottom: '1px solid',
        borderBottomColor: customTheme.borderColor,
        margin: '0 20px'
    },
    closeIcon: {
        cursor: 'pointer'
    }
}

const TodoListItem = (props) => {
    const { classes } = props;
    return (
        <ListItem classes={{'container': classes.container}}>
            <Checkbox
                value='checked'
                checked={props.completed}
                checkedIcon={<CheckCircle nativeColor={customTheme.affirmationColor} />}
                icon={<CheckCircleOutline nativeColor={customTheme.lightTextColor} />}
                onChange={props.handleTaskCompletion(props.value)}
            />
            <ListItemText
                primary={props.completed ? <strike>{props.todoTitle}</strike> : props.todoTitle}
                secondary={props.currentCategory} />
            <ListItemSecondaryAction>
                <CloseIcon onClick={props.deleteTodo} className={classes.closeIcon} nativeColor={customTheme.lightTextColor} />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default withStyles(styles)(TodoListItem);