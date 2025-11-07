function clickNode(folder, key, name) {
  var existScript = document.getElementById('mk');
  var svg = document.getElementById('mindmap');
  if (existScript) {
    existScript.remove();
    while (svg.lastChild) {
      svg.removeChild(svg.lastChild);
    }
  }

  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', './assets/markmap-data/' + folder + '/' + key + '.js');
  script.setAttribute('id', 'mk');
  document.body.appendChild(script);
  document.title = (name ? name + ' | ' : '') + 'KISS-MM';
}
