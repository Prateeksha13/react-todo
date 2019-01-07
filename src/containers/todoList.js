import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import TodoListItem from '../components/todoListItem';
import AddTodoDialog from '../components/addTodoDialog';
import * as customTheme from '../theme';

const styles = {
    addTodoButton: {
        padding: '24px 45px'
    },
    accentText: {
        color: customTheme.accentColor
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItemData: [],
            openDialog: false,
            error: false,
            todoDescription: '',
            selectedCategory: this.props.currentCategory
        }
    }

    handleDialogOpen = () => {
        this.setState({ openDialog: true });
    };
    
    handleDialogClose = () => {
        this.setState({ openDialog: false });
    };

    handleFieldChange = (name, event) => {
        this.setState({[name]: event.target.value});
    }

    todoList = () => {
        return this.props.todoItems.map((todo, index) => {
            return (
                <TodoListItem
                    key={index}
                    value={index}
                    todoTitle={todo.title}
                    completed={todo.completed}
                    handleTaskCompletion={this.props.handleTaskCompletion}
                    deleteTodo={this.props.deleteTodo}
                />
            )
        })
    }

    addTodo = () => {
        this.props.addTodo(this.state.todoDescription, this.state.selectedCategory);
        this.handleDialogClose();
    }

    render() {
        const { classes } = this.props;
        return (
            <List>
                {this.todoList()}
                <ListItem button
                    onClick={!this.props.disableAddButton ? this.handleDialogOpen : null}
                    disabled={this.props.disableAddButton}
                    classes={{'root': classes.addTodoButton}}
                >
                    <ListItemIcon><AddIcon nativeColor={customTheme.accentColor} /></ListItemIcon>
                    <ListItemText classes={{'primary': classes.accentText}} primary="New To-Do" />
                </ListItem>
                <AddTodoDialog
                    open={this.state.openDialog}
                    selectedCategory={this.state.selectedCategory}
                    textFieldValue={this.state.todoDescription}
                    handleFieldChange={this.handleFieldChange}
                    categoryList={this.props.categoryList}
                    handleClose={this.handleDialogClose}
                    addTodo={this.addTodo} />
            </List>
        )
    }
}

export default withStyles(styles)(TodoList);