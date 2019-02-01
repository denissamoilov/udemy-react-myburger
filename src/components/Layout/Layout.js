import React, { Component } from 'react';

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        const sideDrawerState = this.state.showSideDrawer;

        this.setState({ showSideDrawer: !sideDrawerState });
    }

    render () {
        return (
            <>
                <Toolbar open={this.sideDrawerClosedHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
    
}

export default Layout;