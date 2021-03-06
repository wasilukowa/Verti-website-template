import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContentLeftSidebar from './MainContentLeftSidebar';
import MainContentRightSidebar from './MainContentRightSidebar';
import MainContentNoSidebar from './MainContentNoSidebar';
import MainContentWelcomeScreen from './MainContentWelcomeScreen';

const MainContentContainer = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <MainContentWelcomeScreen />
                </Route>
                <Route exact path='/left-sidebar'>
                    <MainContentLeftSidebar />
                </Route>
                <Route exact path='/right-sidebar'>
                    <MainContentRightSidebar />
                </Route>
                <Route exact path='/no-sidebar'>
                    <MainContentNoSidebar />
                </Route>
            </Switch>
        </>
    )
}

export default MainContentContainer;