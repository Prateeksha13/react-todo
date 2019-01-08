import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import * as customTheme from '../theme';

const styles = {
    primary: {
        color: `${customTheme.accentColor} !important`
    },
    secondary: {
        color: `${customTheme.secondaryTextColor} !important`
    },
    wrapper: {
        marginTop: 20,
        width: '100%'
    },
    underline: {
        '&:after': {
            borderColor: customTheme.accentColor
        }
    }
}

const AddCategoryDialog = (props) => {
    const { classes } = props;
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Have a task in mind that fits no category? Help me organize more!
                </DialogContentText>
                <TextField
                    autoFocus
                    id="name"
                    label="Category Name"
                    type="text"
                    fullWidth
                    className={classes.wrapper}
                    InputProps={{classes: {'underline': classes.underline}}}
                    InputLabelProps={{classes: {'shrink': classes.secondary}}}
                    error={props.error}
                    helperText={props.error ? 'This is not a valid category name or the category already exists' : ''}
                    value={props.textFieldValue}
                    onChange={props.handleCategoryFieldChange}
                    onKeyDown={(e) => {return (e.keyCode === 13 ? props.addCategory() : null)}}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button onClick={props.addCategory} classes={{'label': classes.primary}}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(AddCategoryDialog);