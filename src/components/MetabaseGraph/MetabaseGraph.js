import React  from 'react';

const MetabaseGraph = ({title, graphId, width, height, dashboard, showNativeTitle}) => {
    const baseUrl = "https://p7ab2jkb9b.execute-api.sa-east-1.amazonaws.com/dev/metabase/public/"
    const type = dashboard? "dashboard/" : "question/"
    const options = "#bordered=true&titled="+ !!showNativeTitle;
    const src = baseUrl + type + graphId + options
    console.log(src)
    return (
      <iframe
        title={title}
        src={src}
        frameBorder="0"
        width={width}
        height={height}
        allowTransparency
      ></iframe>
    )
}

export default MetabaseGraph;
