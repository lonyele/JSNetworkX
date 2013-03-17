"use strict";
/*globals jsnx*/
/*exported examples*/
var examples = (function() {
  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  return [
    function(cb) {
      var n = random(3, 8);
      var G = jsnx.complete_graph(n);
      cb(
        G,
        'Complete graph (nodes: ' + n + ')',
        {
          layout_attr: {
            charge: -120,
            linkDistance: 100
          }
        }
      );
    },
    function(cb) {
      var r = random(2, 6);
      var c = random(2, 6);
      var G = jsnx.grid_2d_graph(r, c);
      cb(G, 'Grid 2d graph (rows: ' + r + ', columns: ' + c + ')');
    },
    function(cb) {
      var n = random(4, 20);
      var G = jsnx.cycle_graph(n);
      cb(G, 'Cycle graph (nodes: ' + n + ')');
    },
    function(cb) {
      var b = random(2,5);
      var n = random(5, 20);
      var G = jsnx.full_rary_tree(b, n);
      cb(
        G,
        'Full rary tree (branch factor: ' + b + ', nodes: ' + n + ')',
        {
          layout_attr: {
            charge: -100,
            linkDistance: 20
          }
        }
      );
    },
    function(cb) {
      var n = random(5,20);
      var G = jsnx.fast_gnp_random_graph(n, 0.3);
      cb(G, 'Random graph (nodes: ' + n + ', edge probability: 0.3)');
    },
    function(cb) {
      cb(
        jsnx.karate_club_graph(),
        'Karate club graph',
        {
          layout_attr: {
            charge: -400,
            linkDistance: 60
          }
        }
      );
    }
  ];
}());
