import * as React from 'react';
import styles from './Loading.module.scss'
import loadingIcon  from './images/loading.svg';

interface IProps {
  loading: boolean,
  type?: string,
  marginTop?: string,
  table?:boolean
}

const Loading: React.FC<IProps> = ({
  loading, type, marginTop, table,
}) => {


  return <div>
    {loading ? type === 'inline'
      ? (
        <div className={styles.inlineLoading} style={table ? {top: 55} : {}}>
          <img src={loadingIcon.src} style={{marginTop}}/>
        </div>
      ) : (
        <div className={styles.fullPageLoading}>
          <img src={loadingIcon.src} style={{marginTop}}/>
        </div>
      ): null}
  </div>
};

export default Loading;
