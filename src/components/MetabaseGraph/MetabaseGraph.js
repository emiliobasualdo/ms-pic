import React  from 'react';

const MetabaseGraph = ({title, graphId, width, height}) => {
    const baseUrl = "https://p7ab2jkb9b.execute-api.sa-east-1.amazonaws.com/dev/metabase/public/question/"
    const src = baseUrl + graphId
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
