'use strict';

var i = 600;

function genHourlyReport(location) {
  var randGen = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
  for (i = 600; i <= 2000; i += 100) {
    if (i < 1000) {
      location.genResults.push(('0' + i + ' hours:' + randGen + 'cookies'));
    } else {
      location.genResults.push((i + ' hours:' + randGen + 'cookies'));
    }
  }

  console.log(location.genResults);
}
/*
documentselect UL
firstchild (li)
next sibling (li2)
print
next sibling (li3)
print
parentnode (ul1)
next sibling (u2)
firstchild (li1 of u2)
next sibling (li2 of u2)


function register(location) {
  location.gen();
  var printThis = '';
  for (var i = 0; i < location.genResults.length; i++) {
    printThis += '<li>' + location.genResults[i] + '</li>';
  }

  return printThis;
}

document.queryselector('ul').innerHTML = register();
var nextItem = document.queryselector('ul')
document.nextSibling
*/

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  genResults: [],
  gen: function () {
    genHourlyReport(pike);
  },
};

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  genResults: [],
  gen: function () {
    return genHourlyReport(seaTac);
  },

};

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  genResults: [],
  gen: function () {
    return genHourlyReport(seaCenter);
  },
};

var theHill = {
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  genResults: [],
  gen: function () {
    return genHourlyReport(theHill);
  },
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  genResults: [],
  gen: function () {
    return genHourlyReport(alki);
  },
};
