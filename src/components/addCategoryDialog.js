import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const AddCategoryDialog = (props) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Have a task in mind that fits no category? Create one now.
                </DialogContentText>
                <TextField
                    autoFocus
                    id="name"
                    label="Category Name"
                    type="text"
                    fullWidth
                    error={props.error}
                    helperText={props.error ? 'Please enter a valid category name' : ''}
                    value={props.textFieldValue}
                    onChange={props.handleCategoryFieldChange}
                    onKeyDown={(e) => {return (e.keyCode === 13 ? props.addCategory() : null)}}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.addCategory} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCategoryDialog;