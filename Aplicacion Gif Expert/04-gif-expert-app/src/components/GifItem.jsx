// export const GifItem = (props) => {
//   // console.log(props);
//   return <div>GifItem</div>;
// };

// export const GifItem = ({ image }) => {
//   // console.log(image);
//   return <div>GifItem</div>;
// };
export const GifItem = ({ title, url, id }) => {
  // console.log(title, url, id);
  // console.log(image);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
