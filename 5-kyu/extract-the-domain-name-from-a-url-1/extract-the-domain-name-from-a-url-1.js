function domainName(url) {
  let [protocol, path] = url.split('//');
  if (!path) path = protocol;
  const [domain] = path.split('/');
  const domainName = domain.replace('www.', '');
  const [name, ext] = domainName.split('.');
  
  return name;
}