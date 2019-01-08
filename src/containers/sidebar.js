import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/core/styles';

import AddCategoryDialog from '../components/addCategoryDialog';
import SidebarCategory from '../components/sidebarCategory';
import * as customTheme from '../theme';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    accentText: {
        color: customTheme.accentColor
    },
    addTodoButton: {
        padding: '10px 20px'
    },
    divider: {
        backgroundColor: customTheme.borderColor
    },
    userRoot: {
        padding: '15px 20px'
    },
    nameRoot: {
        marginTop: 10
    },
    listRoot: {
        paddingTop: 0
    },
    appName: {
        padding: '10px 25px',
        color: customTheme.secondaryTextColor,
        letterSpacing: 0.4,
        fontSize: customTheme.smallFont
    }
});

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategoryName: '',
            openDialog: false,
            error: false
        }
    }

    computeTaskCount = (todoItems) => {
        let count = 0;
        todoItems.map((todo) => {
            if(!todo.completed) {
                count++;
            }
        });
        return count;
    }

    categoriesList = () => {
        const { classes } = this.props;
        return <List classes={{'root': classes.listRoot}}>
            {Object.keys(this.props.categoriesData).map((categoryName) => {
                return (
                    <div key={categoryName}>
                        <SidebarCategory
                            categoryIcon={this.props.categoriesData[categoryName].icon}
                            categoryName={categoryName}
                            taskCount={this.computeTaskCount(this.props.categoriesData[categoryName].todoItems)}
                            handleCategorySelection={this.props.handleCategorySelection}
                            selected={this.props.selectedCategory === categoryName ? true : false}
                        />
                        <Divider classes={{'root': classes.divider}} />
                    </div>
                )
            })}
        </List>
    }

    handleDialogOpen = () => {
        this.setState({ openDialog: true });
    };
    
    handleDialogClose = () => {
        this.setState({ openDialog: false });
    };

    addCategory = () => {
        if(this.state.newCategoryName.trim()) {
            this.props.addCategory(this.state.newCategoryName)
            this.setState({newCategoryName: ''});
            this.handleDialogClose();
        }
        else {
            this.setState({error: true})
        }
    }

    handleCategoryFieldChange = event => {
        this.setState({newCategoryName: event.target.value});
    }

    drawerHtml = () => {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.appName}>MY TODO APP</div>
                <ListItem classes={{'root': classes.userRoot}}>
                    <ListItemAvatar>
                    <Avatar alt="PT" src="/my-avatar.png" />
                    </ListItemAvatar>
                    <ListItemText
                        classes={{'root': classes.nameRoot}}
                        primary="Prateeksha"
                    />
                </ListItem>
                <Divider classes={{'root': classes.divider}} />
                {this.categoriesList()}
                <ListItem button
                    onClick={!this.props.disableAddButton ? this.handleDialogOpen : null}
                    disabled={this.props.disableAddButton}
                    classes={{'root': classes.addTodoButton}}
                >
                    <ListItemIcon><AddIcon nativeColor={customTheme.accentColor} /></ListItemIcon>
                    <ListItemText classes={{'primary': classes.accentText}} primary="New Category" />
                </ListItem>
            </div>
        )
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.props.mobileOpen}
                        onClose={this.props.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                       {this.drawerHtml()}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {this.drawerHtml()}
                    </Drawer>
                </Hidden>
                <AddCategoryDialog
                    open={this.state.openDialog}
                    handleClose={this.handleDialogClose}
                    addCategory={this.addCategory}
                    textFieldValue={this.state.newCategoryName}
                    handleCategoryFieldChange={this.handleCategoryFieldChange}
                    error={this.state.error} />
            </nav>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar);