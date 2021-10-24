import Loader from 'react-loader-spinner';
export default function Loading(): JSX.Element {
  return (
    <div className="property__name">
      <Loader type="ThreeDots" color="#4B83C2" height={130} width={130} />
    </div>
  );
}
