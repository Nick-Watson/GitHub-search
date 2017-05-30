import {expect} from 'chai';
import searchReducer from '../src/reducer/search.reducer.js';
import repoReducer from '../src/reducer/repo.reducer.js';
import * as actions from '../src/actions/actions';

describe('updateText', () => {
    const str = 'react';
    const action = actions.updateTextInput(str);
    const initialState = {
        textInput: '',
        results: [],
        loading: false,
        error: null
    };

    it('updates textInput in the state', () => {
        const actual = searchReducer(initialState, action);
        const expected = {
            textInput: 'react',
            results: [],
            loading: false,
            error: null
        };

        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = searchReducer(initialState, action);
        expect(newState).to.not.equal(initialState);
    }); 
});

describe('fetchRepos', () => {
    const repos = {items: [{name: 'foo'}, {name: 'bar'}]};
    const action = actions.fetchReposSuccess(repos);
    const initialState = {
        textInput: '',
        results: [],
        loading: false,
        error: null
    };

    it('updates results in the state', () => {
        const actual = searchReducer(initialState, action);
        const expected = {
            textInput: '',
            results: [{name: 'foo'}, {name: 'bar'}],
            loading: false,
            error: null
        };

        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = searchReducer(initialState, action);
        expect(newState).to.not.equal(initialState);
    }); 
});

describe('fetchReadMe', () => {
    const readMe = {content: 'SGVsbG8='};
    const action = actions.fetchReadMeSuccess(readMe);
    const initialState = {
        readMe: '',
        loading: false,
        error: null
    };

    it('updates readMe in the state', () => {
        const actual = repoReducer(initialState, action);
        const expected = {
            readMe: 'Hello',
            loading: false,
            error: null
        };

        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = repoReducer(initialState, action);
        expect(newState).to.not.equal(initialState);
    }); 
});