/**
 *
 * @param {*} color
 * @returns
 */
export const getBg = (color) => {
  return {
    backgroundColor: `rgba(${color || "255,1,1"}, ${Math.random()})`,
    marginBottom: 10,
    marginTop: 10,
    width: 200,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
};
