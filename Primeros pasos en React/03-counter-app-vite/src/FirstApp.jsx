import PropTypes from "prop-types";

export var FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);
  // if (!title) {
  //   throw new Error("El title no existe");
  // }
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "Aldo Vera",
  subTitle: "No hay subtítulo",
  title: "No hay titulo",
};
