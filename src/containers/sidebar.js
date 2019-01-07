import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import AddCategoryDialog from '../components/addCategoryDialog';
import SidebarCategory from '../components/sidebarCategory';

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

    categoriesList = () => {
        return <List>
            {Object.keys(this.props.categoriesData).map((categoryName) => {
                return (
                    <div key={categoryName}>
                        <SidebarCategory
                            categoryIcon={this.props.categoriesData[categoryName].icon}
                            categoryName={categoryName}
                            taskCount={this.props.categoriesData[categoryName].todoItems.length}
                            handleCategorySelection={this.props.handleCategorySelection}
                        />
                        <Divider />
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
                        <div className={classes.toolbar} />
                        {this.categoriesList()}
                        <ListItem button onClick={this.props.addCategory}>
                            <ListItemIcon><AddIcon /></ListItemIcon>
                            <ListItemText primary="New List" />
                        </ListItem>
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
                        <div className={classes.toolbar} />
                        {this.categoriesList()}
                        <ListItem button
                            onClick={!this.props.disableAddButton ? this.handleDialogOpen : null}
                            disabled={this.props.disableAddButton}
                        >
                            <ListItemIcon><AddIcon /></ListItemIcon>
                            <ListItemText primary="New Category" />
                        </ListItem>
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