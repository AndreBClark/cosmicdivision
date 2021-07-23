function useDeslugify(str) {
  return str.replace(/[-\s]+/g, '-').toLowerCase();
}

export default useDeslugify;