import ReactLoader from 'react-loader-spinner';

function Loader(): JSX.Element {
  return (
    <div className="property__name">
      <ReactLoader type="ThreeDots" color="#4B83C2" height={130} width={130} />
    </div>
  );
}

export default Loader;
