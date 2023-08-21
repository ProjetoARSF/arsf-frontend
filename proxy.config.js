const proxy = [
    {
      context: '/arsf',
      target: 'http://localhost:8080',
      pathRewrite: {'arsf' : ''}
    }
  ];
  module.exports = proxy;