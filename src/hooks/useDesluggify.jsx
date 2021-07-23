// create function that will be used as a hook
// replace hyphens and slashes with spaces and capitalize 
const useDesluggify = () => {
  function deSluggify(slug) {
    // convert to string
    const string = String(slug);
    // remove hyphens and remove slashes
    const clean = string.replace(/-|\//g, ' ');
    // convert to title case
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  }
  return deSluggify;
}
export default useDesluggify;