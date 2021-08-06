// create function that will be used as a hook
// replace hyphens and slashes with spaces and capitalize the first letter
const useDesluggify = () => {
  function deSluggify(str) {
    // convert to string
    str = String(str);
    str.replace(/-|\//g, ' ').charAt(0).toUpperCase() + str.slice(1);
  }
  return deSluggify;
}
export default useDesluggify;