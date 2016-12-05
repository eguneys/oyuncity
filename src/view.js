import m from 'mithril';
import util from './util';

var tileTag = 'tile';

function renderTile(key, classes) {
  var attrs = {
    key: 's' + key,
    class: 'tile ' + classes,
    style: {}
  };
  
  return {
    tag: 'div',
    attrs: attrs
  };
}

const tileClasses = {
  0: 'tileX',
  1: 'tileY',
  2: 'tileZ',
  3: 'tileW'
};

const tileCoords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six'
};

function renderTiles(ctrl) {
  var dom = [];

  for (var j = 0; j < 4; j++)
    for (var i = 0; i<6; i++) {
      var key = j + '.' + i;
      var klass = [
        tileClasses[j],
        tileCoords[i + 1]
      ].join(' ');
      var tile = renderTile(key, klass);
      dom.push(tile);
    }
  
  return dom;
}

function renderContent(ctrl) {
  var d = ctrl.data;

  var children = renderTiles(ctrl);

  return children;
}

function renderBoard(ctrl) {
  var d = ctrl.data;

  return {
    tag: 'div',
    attrs: {
      class: 'cg_board isometric',
      config: function(el, isUpdate, context) {
        if (isUpdate) return;
        d.render = function() {
          m.render(el, renderContent(ctrl));
        };
        d.renderRAF = function() {
          util.requestAnimationFrame(d.render);
        };
        d.bounds = util.memo(el.getBoundingClientRect.bind(el));
        d.element = el;
        d.render();
      }
    },
    children: []
  };
}

module.exports = function(ctrl) {

  return {
    tag: 'div',
    attrs: {
      config: function (el, isUpdate) {
        if (isUpdate) {
          
        }
      },
      class: [
        'cg_board_wrap'
      ].join(' ')
    },
    children: [renderBoard(ctrl)]
  };
};
