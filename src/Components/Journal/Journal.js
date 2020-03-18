import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import NoteList from '../Notes/NoteList';
import NotePreview from '../Notes/NotePreview';

export default class Journal extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/posts'>
                    <NoteList />
                </Route>
                <Route path='/posts/:slug' component={NotePreview} />
            </Switch>
        )
    }
}
