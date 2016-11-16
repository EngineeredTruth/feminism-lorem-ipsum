angular.module('app').service('srvc', function() {
  this.feministlexicon = [
    'dogma',
    'capitalism',
    'paradigm',
    'misogyny',
    'big is beautiful',
    'useless',
    'Fine Arts',
    'Architecture',
    'English major',
    'assumption',
    'consumption',
    'Instagram',
    'equality',
    'Why are men not attracted to me?',
    'false narrative',
    'over educated',
    'performing artist',
    'bigotry',
    'sexism',
    '75 cents to the dollar',
    'climate change',
    'equal rights',
    'discrimination',
    'Why men never call me back?',
    'You Don’t Hate Feminism. You Just Don’t Understand It.',
    'tumblr',
    'Christian Grey',
    'We still expect you to pay for dates.',
    '5 Reasons why men should still buy us an enagement ring.',
    'vague',
    'gender elitism',
    'I want equal pay, but men should still pay for dates',
    'Why do I friendzone all the nice guys?',
    'objectified',
    'equaly pay for shitty work'
  ]
  this.connectingWords = [
    'the',
    'and',
    'but',
    'or',
    'so',
    'if'
  ]

  this.generateLorem = (x, num, l) => {
    let results = '';
    for(let i = 0; i < num; i++){
      results = results.concat(x[Math.round((Math.random()*(l - 0) + 0))]+ ' ');
    }
    console.log('srvc: ', results)
    return results;
  }


  })
