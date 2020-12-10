const React = require('react');
const { NELProvider } = require('@nel-ui/react');
const { generateId } = require('./jss');

// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
exports.onInitialClientRender = () => {
  const ssStyles = window.document.getElementById('server-side-jss');
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};
// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }, options) => {
  const theme = options.theme || {};
  return (
    <NELProvider generateId={generateId} theme={theme}>
      {element}
    </NELProvider>
  );
};
