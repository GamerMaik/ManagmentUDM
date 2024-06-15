
import "./AreaTop.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file


// eslint-disable-next-line react/prop-types
const AreaTop = ({nombre}) => {

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <h2 className="area-top-title">{nombre}</h2>
      </div>
    </section>
  );
};

export default AreaTop;
