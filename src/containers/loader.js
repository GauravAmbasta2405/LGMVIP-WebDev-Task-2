import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderComp = () => {
  return (
    //used to display the loader when the api is fetching data
    <div className="app">
      <Loader type={{overflowY: 'scroll'}} />
    </div>
  );
};
export default LoaderComp;
