import React from 'react';
import List from '@material-ui/core/List';

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

    render() {
        return (
            <List>
                <TodoListItem onCheck={this.handleTaskCompletion} />
            </List>
        )
    }
}

export default TodoList;