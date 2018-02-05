const _initialState = {
  global: {
    userInfo: {
      domain: 'express',
      username: 'dev'
    },
    versionInfo: {
      company: 'Sky Graphics & Data Solutions',
      copyright: 'Copyright © 2017',
      date: '01 January 2017',
      description: '',
      product: 'Sports All-Stars Stats',
      title: 'Sports All-Stars Stats',
      version: '0.1.0'
    }
  },
  fixtures: {
  },
  teams: {
    models: [],
    loading: false,
    error: false
  }
};

const initialState = process.env.NODE_ENV === 'production' ? window.__INITIAL_STATE__ : _initialState;

export default initialState;