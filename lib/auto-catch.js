module.exports = function autoCatch (handlers) {
  if (typeof handlers === 'function') {
    return (req, res, next) => Promise.resolve(handlers(req, res, next)).catch(next)
  }

  return Object.keys(handlers).reduce((autoHandlers, key) => {
    const handler = handlers[key]
    autoHandlers[key] = (req, res, next) =>
      Promise.resolve(handler(req, res, next)).catch(next)
    return autoHandlers
  }, {})
}
