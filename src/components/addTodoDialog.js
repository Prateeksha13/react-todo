import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

class AddTodoDialog extends React.Component {
    categoryItems = () => {
        return this.props.categoryList.map((categoryName) => {
            return <MenuItem key={categoryName} value={categoryName}>{categoryName}</MenuItem>
        })
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add To-Do</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Have a lot to do? Note down your task and I will remember for you.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="description"
                        label="To-Do Description"
                        type="text"
                        fullWidth
                        error={this.props.error}
                        helperText={this.props.error ? 'Please enter a valid to-do' : ''}
                        value={this.props.textFieldValue}
                        onChange={(e) => this.props.handleFieldChange('todoDescription', e)}
                        onKeyDown={(e) => {return (e.keyCode === 13 ? this.props.addTodo : null)}}
                    />
                    <Select
                        value={this.props.selectedCategory}
                        onChange={(e) => this.props.handleFieldChange('selectedCategory', e)}
                        inputProps={{
                            name: 'Category',
                        }}
                    >
                        {this.categoryItems()}
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.props.addTodo} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default AddTodoDialog;