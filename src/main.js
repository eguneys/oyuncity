import ctrl from './ctrl';
import view from './view';
import m from 'mithril';


function init(element, config = {}) {

  var controller = new ctrl(config);

  m.render(element, view(controller));

  return controller;
}

module.exports = init;
