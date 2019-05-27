// @flow
import React from 'react';
import styles from './Footer.css';
import { Link } from 'react-router-dom'
import {Button} from '@blueprintjs/core';
import routes from '../constants/routes';

type Props = {
  page: string
}

const Footer = (props: Props) => {
  const actionButtonText = props.page === 'spectrum' ? 'Analyse' : 'Go to Spectrum';
  const url = props.page === 'spectrum' ? routes.ANALYSE : routes.HOME;

  return (
    <div className={styles.container}>
      <div className={styles.footerLeft}>
        <Button>
          <Link to={url}>
            {actionButtonText}
          </Link>
        </Button>
      </div>
      <div className={styles.footerRight}>
        <Button>Export</Button>
        <Button>Close</Button>
      </div>
    </div>
  );
};

export default Footer;
