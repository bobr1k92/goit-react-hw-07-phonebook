import { ProgressBar } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

export default function Loader() {
  return (
    <Loading>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#51E5FF"
        barColor="#0b5089"
      />
    </Loading>
  );
}
