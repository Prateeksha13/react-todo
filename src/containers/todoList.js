import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TodoListItem from '../components/todoListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItemData: []
        }
    }

    handleTaskCompletion = value => () => {
        let todoItemData = this.state.todoItemData;
        todoItemData.find((object, i) => {
            if (object.id === value.id) {
                todoItemData[i].checked = !value.checked;
            }
            return 0;
        })
        this.setState({ todoItemData: todoItemData });
    }

    todoList = () => {
        return this.props.todoItems.map((todo, index) => {
            return (
                <TodoListItem
                    key={index}
                    todoTitle={todo.title}
                    completed={todo.completed}
                    onCheck={this.handleTaskCompletion}
                />
            )
        })
    }

    render() {
        return (
            <List>
                {this.todoList()}
                <ListItem button
                    onClick={!this.props.disableAddButton ? this.handleDialogOpen : null}
                    disabled={this.props.disableAddButton}
                >
                    <ListItemIcon><AddIcon /></ListItemIcon>
                    <ListItemText primary="New To-Do" />
                </ListItem>
            </List>
        )
    }
}

export default TodoList;