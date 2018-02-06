const _initialState = {
  global: {
    userInfo: {
      domain: 'express',
      username: 'dev'
    },
    versionInfo: {
      company: 'Michael Grounds',
      copyright: 'Copyright © 2018',
      date: '01 January 2018',
      description: '',
      product: 'React Redux Template',
      title: 'React Redux Template',
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