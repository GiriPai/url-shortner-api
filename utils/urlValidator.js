const isValidUrl = (urlString) => {
  if (!urlString) return false;
  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return false;
  }
  return true;
};

module.exports = { isValidUrl };
