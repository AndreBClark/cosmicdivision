const useDesluggify = () => {
  const deSluggify = slug => slug.split('/').join('').toUpperCase();
  return deSluggify;
}
export default useDesluggify;