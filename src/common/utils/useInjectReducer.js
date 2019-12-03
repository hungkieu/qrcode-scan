import { useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import injectReducer from './injectReducer';

export default ({ key, reducer }) => {
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    injectReducer(context.store, key, reducer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
