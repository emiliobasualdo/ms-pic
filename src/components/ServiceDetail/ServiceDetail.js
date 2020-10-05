import React from 'react';
import {Table2} from "../index";


const ServiceDetail = ({title, items, headings}) => {

    return (
        <>
            <Table2
                title={title}
                headings={headings}
                items={items}
                buttonName="Ver"
                firstHeadingOnlyOnce={true}
            />
        </>
    )
}

export default ServiceDetail;
