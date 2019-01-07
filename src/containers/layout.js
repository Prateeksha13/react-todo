import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import cloneDeep from 'lodash/cloneDeep';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CategoryIcon from '@material-ui/icons/ViewList';
import { withStyles } from '@material-ui/core/styles';

import Sidebar from './sidebar';
import TodoList from './todoList';
import data from '../data';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1
    },
});

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            todoItemsData: data,
            selectedCategory: 'My Day'
        }
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleCategorySelection = categoryName => {
        this.setState({selectedCategory: categoryName});
    }

    addCategory = newCategory => {
        let todoItemsData = cloneDeep(this.state.todoItemsData);
        todoItemsData[newCategory] = {
            todoItems: [],
            icon: <CategoryIcon />
        }
        this.setState({todoItemsData: todoItemsData});
    }

    render() {
        const { classes } = this.props;
        return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        {this.state.selectedCategory}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar
                mobileOpen={this.state.mobileOpen}
                handleDrawerToggle={this.handleDrawerToggle}
                categoriesData={this.state.todoItemsData}
                handleCategorySelection={this.handleCategorySelection}
                addCategory={this.addCategory}
                disableAddButton={Object.keys(this.state.todoItemsData).length >= 8 ? true : false} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <TodoList todoItems={this.state.todoItemsData[this.state.selectedCategory].todoItems} />
            </main>
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Layout);