const simbiont = () => ({
  name: "Venom",
  user: "Tom Hardy",
});

// const getResult = async () => {
//   return 4 + 4;
// };
// const getResult = () => {
//   return 4 + 4;
// };
// const getResult = (a, b) => {
//   return a + b;
// };

// const newMessage = {
//   message: "Hola Mundo",
//   title: "Fernando",
// };

export const FirstApp = () => {
  // const getResult = (a, b) => {
  //   return a + b;
  // };
  return (
    <>
      {/* <h1>{getResult(1, 2)}</h1> */}
      <h1>Aldo</h1>
      <code>{JSON.stringify(simbiont())}</code>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
};
// export const FirstApp = () => {
//   return (
//     <>
//       <h1>{newMessage.message}</h1>
//       <p>Soy un subtitulo</p>
//     </>
//   );
// };
