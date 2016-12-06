module.exports = function(cfg) {
  this.data = {
    houses: {
      x2: { rank: 'flat', color: 'yellow' },
      x6: { rank: 'flat', color: 'yellow' },
      y2: { rank: 'flat', color: 'yellow' },
      y6: { rank: 'flat', color: 'yellow' },
      z2: { rank: 'flat', color: 'yellow' },
      z6: { rank: 'flat', color: 'yellow' },
      w2: { rank: 'flat', color: 'yellow' },
      w6: { rank: 'flat', color: 'yellow' }
    }
  };

  this.addHouse = function(key) {
    this.data.houses[key] = {
      rank: 'flat',
      color: 'yellow'
    };
    this.data.render();
  };
};
