const _debug = false;

module.exports = {
  apiBase: _debug ? process.env.REACT_APP_API_BASE_DEBUG : process.env.REACT_APP_API_BASE
};