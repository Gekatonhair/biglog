import React, {FC} from 'react';
import {Link} from 'gatsby';
import * as styles from './style.module.scss';


interface IProps {
    title: string;
}

const Breadcrumb: FC<IProps> = ({title}) => (
    <div className={styles.breadcrumb}>
        <Link to="/" className={styles.logo}>
            Главная
        </Link>
        <p>{` / ${title}`}</p>
    </div>
);

export default Breadcrumb;
