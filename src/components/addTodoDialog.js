import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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

class AddTodoDialog extends React.Component {
    categoryItems = () => {
        return this.props.categoryList.map((categoryName) => {
            return <MenuItem key={categoryName} value={categoryName}>{categoryName}</MenuItem>
        })
    }

    render() {
        const { classes } = this.props;
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
                        className={classes.wrapper}
                        InputProps={{classes: {'underline': classes.underline}}}
                        InputLabelProps={{classes: {'shrink': classes.secondary}}}
                        error={this.props.error}
                        helperText={this.props.error ? 'Please enter a valid to-do' : ''}
                        value={this.props.textFieldValue}
                        onChange={(e) => this.props.handleFieldChange('todoDescription', e)}
                        onKeyDown={(e) => {return (e.keyCode === 13 ? this.props.addTodo() : null)}}
                    />
                    <FormControl className={classes.wrapper}>
                        <InputLabel shrink htmlFor="category-label-placeholder"
                            classes={{'shrink': classes.secondary}}>
                            Category
                        </InputLabel>
                        <Select
                            fullWidth
                            className={classes.underline}
                            value={this.props.selectedCategory}
                            onChange={(e) => this.props.handleFieldChange('selectedCategory', e)}
                            inputProps={{
                                name: 'Category'
                            }}
                        >
                            {this.categoryItems()}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={this.props.addTodo} classes={{'label': classes.primary}}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AddTodoDialog);