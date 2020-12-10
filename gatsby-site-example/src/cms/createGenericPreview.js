import React from 'react';

const defaultDataCreator = ({ entry }) => entry.getIn(['data']).toJS();

const createGenericPreview = (previewKey, dataCreator = defaultDataCreator) => (
  props
) => {
  const latestData = React.useRef();
  latestData.current = dataCreator(props);

  const sendData = () => {
    const frame = document.querySelector('#nc-root iframe');
    if (!frame) return;

    const previewFrame = frame.contentDocument.querySelector('#cmsPreviewIframe');
    if (!previewFrame || !previewFrame.contentWindow) return;

    previewFrame.contentWindow.postMessage(
      { type: 'PREVIEW_DATA', previewKey, data: latestData.current },
      process.env.GATSBY_SITE_URL
    );
  };

  React.useEffect(() => {
    sendData();
  });

  React.useEffect(() => {
    function receiveMessage(event) {
      if (event.data && event.data.type === 'PREVIEW_INITIAL_LOAD') sendData();
    }

    window.addEventListener('message', receiveMessage, false);

    return () => window.removeEventListener('message', receiveMessage, false);
  }, []);

  const iframeURL = `${window.location.protocol}//${window.location.host}/admin/preview/`;

  return (
    <>
      <style>
        {`
      body, html {
        margin: 0;
      }

      iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
      }`}
      </style>
      <iframe src={iframeURL} id="cmsPreviewIframe" title="CMS Preview" />
    </>
  );
};

export default createGenericPreview;
