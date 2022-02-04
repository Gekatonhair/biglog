import React from 'react';
import {productMenuItems} from 'сonstants';

import Fences from 'src/static/images/svgs/fences.svg';
import Kitch from 'src/static/images/svgs/kitch.svg';
import Ladder from 'src/static/images/svgs/ladder.svg';
import Decor from 'src/static/images/svgs/decor.svg';
import Table from 'src/static/images/svgs/tables.svg';

/**
 *
 * @param key
 * @param size
 */
export const getSvgByKey = (key: keyof (typeof productMenuItems), size: string = '2.5em'): JSX.Element => {
    switch (key) {
        case 'fences':
            return <Fences height={size} width={size}/>;
        case 'tables':
            return <Table height={size} width={size}/>;
        case 'kitchen':
            return <Kitch height={size} width={size}/>;
        case 'ladder':
            return <Ladder height={size} width={size}/>;
        case 'decor':
            return <Decor height={size} width={size}/>;
        default:
            return <></>;
    }
};
