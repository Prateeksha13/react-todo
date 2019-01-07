import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CheckCircleOutline from '@material-ui/icons/RadioButtonUnchecked';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CloseIcon from '@material-ui/icons/Close';

const TodoListItem = ({todoTitle, onCheck}) => {
    return (
        <ListItem>
            <Checkbox
                value='checked'
                checked={true}
                checkedIcon={<CheckCircle />}
                icon={<CheckCircleOutline />}
                onChange={onCheck(null)}
                // classes={{
                //     root: classes.root,
                //     checked: classes.checked,
                // }}
            />
            <ListItemText primary={todoTitle} />
            <ListItemSecondaryAction>
                <CloseIcon />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem;