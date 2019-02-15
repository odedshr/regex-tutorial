const levels = [
  {
    text: 'dsrisxtamtlycadhclkz\nowpxrgleemgroryskqmk\nfrkfvofswyzyrafzjief\nflncjgdkifpzddlrucaj\nvfrrsotyotyoiuxevcui\noigfythnwrottjsjzuui\nndpvnjrgltqjdppfbmhw\nkbkcgedmvhfrqizwcocs\nkfccldhruijqcftrxbnh\ngkjcateybwyyreiubbvm\nfaqvtnxznfeprlsvried\nizbaudybsrwmfklmyjfn\ntcysgbmtjrjqewaonubi\ncujawwbwjrovbowxfpxx\nafakqjxobtxdyltampkx\nptqqnkkjlaehhmjccqru\nrjkjlrkvhuqtcjawohoe\nfdiygpethdbwfkitwlsb\nnuhlaeujdfmrjuxvwfmp\nynhqdbivsxxzrdglvbsu',
    expects: ['cat']
  },
  {
    text: 'uqsiycrhaigqjsggqmic\nahdpsznvadorojgddkco\nokudypcmqricqssosrzh\noadcateasbeaqsfnompu\nygedbqsblmndjohtrwkr\nbvdigcafkknysxagcazj\njkegkfcbswifwszscdsd\nrzegpmxvfizcsolmziuq\nrqydcolrgrgdhvqbbcmx\nagvvkpcpmsfsejluuahi\nzbunlnzgnqmvjhroekan\nkioluvpznohyrfnxoftu\nbbcaauxjxkiofbwwefjq\nzofjayboelcatllavcng\nzdtytivsminbpvaapuiz\nifhwvaljlhdgbxayxetr\nkealcolvwecsighxvzgx\nqotopgcwwhxgxbikjxpx\nktmyfcatxbtxztsmypuv\nchbdfmjuxsgpmaikkm',
    expects: ['cat', 'cat', 'cat']
  },
  {
    text: 'JAmnqGEaORuoNDdGGgDD\nUMrDoGdmzbimpKdcwrIC\nyTDIGZTlFVgtbNEZnyCH\nfGizOrWMILqWQoWGCtvx\nprIRiXgFEPuSKbolEObK\neeXaTMUYOYFMyvFryQlk\ntHRLCGaFncYASrpdquHr\nTQyOIEEHnDvesMhwbGAX\nuoWBMXIrgllyMTgldfAj\nEQqjCoGPhUgvSHIAJrym\ntrMabNBXGwDOGhvmeuva\nApGBIKTarsyPdCVyblLt\ncyuzcKwjqOzGVJOZpkaJ\ncYdqEPdVcemSxUktLcwe\nPoQrhzKOSgwOYVAwynSH\nvekvzWIduwIVuJvLrzWD\nVFkrsoEhDOCLEZURzBIN\ndTBdudogiIixZOBRCAFR\nThbJLmafUJEjvjNeaEUJ\ndrkPTCJTdavvBPdGHCOo',
    expects: ['DoG', 'DOG', 'dog']
  },
  {
    text: 'PbgFUXxcjcUFcCFKFYaX\nXKHRNmNLCzrZDdxIEtDs\nOVgjdoGsCowVXXAoTozh\nvgkZgBYHsOFyaTfuIpdT\nyoIlHJnRWHJsJNAthodi\nqXlZxyEWYJjzijrcJTKK\nYjdogsTHxnJBykFDdmty\nlUVOMelsrJENTQDfnnOb\nEjglabuCunePECATGqub\nUjNOkOXJbnuNIzWLHIoF\nvpphyNwMrxLNWyFHHtuz\nTcFTJkKZgJUzeAybEXCs\nGtbHztmTqzEDLyNcvDKS\nMFTmthSdqQdppKWIdbCm\npVvFNFIIuQRMXEQWwfhD\nEBzfjctMnIpbyWmLqavB\nsMqYyaOjAGDBkdONzDlk\nFCzlGArEmJkrWlPjRIiN\nKdhTSNOWziOXhVskcuAj\nHmonWvQSsECYjExZovXd',
    expects: ['doG', 'dog', 'CAT']
  },
  {
    text: 'troop gift number hiccup cat arm supplementary nationalist identity contact scream east bold offend rough bobcat retirement dominate nationalism cancel tense heel complication prediction fresh breeze leave shower sentiment magazine provincial crime pudding acquit cat\n chimpanzee fast challenge revenge dictionary beard benefit offset sensation warm fluctuation robot catfish voyage econobox writer present different sniff deport',
    expects: ['cat', 'cat']
  },
  {
    text: 'jLfWYLYBXqaQSOVPurfq\nrIqrxKhTXiyOJJikkXIP\nySVwKqWOnIioBwmtOnFl\nMSSqlVuvjaeovhsOYMAU\nspNJfCmnhDzgJIhbdbib\ndOWHSoVLcbJLdingosJj\nOWUgYxjoiODoRNSAopTN\ncdbJwfSWRnCZVAqvXAZu\nlpiTwocwSzuvLfbhzLAe\nfVueOVxbXgkmWNfjKTrN\nGRldfvbJqUCzjdOaBEsF\nblEAegdiNGosxNtapBnA\nGwuiWJjUzNcYQLDCtXOA\neVnvMhiSPAEYotFccJMR\nnFHGecYcyFzggyiIcupT\nkYhzoXNttITtIQFcwSbb\nDNRGcPyGPvGgDdIngOSM\nnohFjQvtukFkjIqSciMm\nnJpumbNGiHozayCIEVUW\nGlUmrmFuMPPRjmiBioVt\niiSPoACO',
    expects: ['dingos', 'diNGos', 'dIngOS']
  },
  {
    text: 'wPuJPjcFFhKCgtSHeUyg\nXBnyaqGEaJTqtAYduTKK\ndavYpTjWAkPysOiCnhtp\nCteRoOHfbnwUcgqpGZBx\nfDdDgFfcdLPGgkrNOvqg\nNgExXGnwDNiStBlYQpFV\nlqSQpMwIbvUrqJhffBBW\nzYTlAtxNmKangaroosfp\nwQEjYwuRanXafYtZekYY\ncoNRAwRgZFlPzpjoxViI\nuyvSqbRsOhgCiRhXevSd\nXNpPGYawlZAKvyPThGBd\nJFdTkIAxUMWzENLyuoFk\nllCFoaHZFeNtCQdFcAwq\nbXZficipfEcWVaxUJstB\ncouKaNGaRooXUxIuAdWa\nIjeZNGCEVGjXlVpDKhky\nwqKVahqVVoqLdXzWHVgp\nFQsHqRoosVyhHYkywVea\ndmEFNzTSuUoIfbPfLIWR\n',
    expects: ['RoO','Kangaroos','KaNGaRoo','Roos']
  },
  {
    text: '6 possibilitys 9 valleys 3 planets 5 visits 8 jackets 3 decides 2 fastidiouss 4 copyrights 8 representatives 3 frauds 4 pures 3 tiles 7 commerces 8 notions 6 sniffs 4 decays 5 intermediates 9 acquisitions 1 wombat 8 lows 0 poetries 8 letters 1 reasons 4 members 5 wars 9 ideas 4 attics 4 knows 5 forgets 1 temptations 0 stools 8 layers 3 trolleys 7 distorts 4 shows 9 haves 7 polishs 6 inserts 5 substitutes 9 accompanys 4 guides 2 considerations 5 feeds 5 pitys 9 assignments 0 lobbys 7 professionals 3 pits 8 lacks 6 dives 2 crutchs 4 fames 8 beneficiarys 3 answers 3 experiences 6 stamps 3 cowers 7 budges 7 accesss 8 provides 0 chews 7 ponys 3 bikes 6 assessments 4 laundrys 0 terraces 5 modernizes 9 capitals 2 crosswalks 4 cracks 3 swings 3 frogs 5 wombats 9 folks 6 musics 4 leases 9 dominates 2 talkatives 9 wombats 8 chips 7 dialects 8 norths 5 archs 0 incidents 2 rules 8 miscarriages 9 paths 7 beats 4 spontaneouss 0 color-blinds 7 pleasants 4 lifestyles 6 killers 0 throats 3 absences 9 paragraphs 6 kidnaps 4 installs 4 majors 8 craftsmans',
    expects: ['1 wombat', '5 wombats', '9 wombats']
  },
  {
    text: '48 creeds 85 gratefuls 17 staffs 51 situations 35 pigeons 80 stewards 49 shadows 61 fixtures 52 constraints 56 acceptances 16 preys 10 feigns 64 ambiguitys 7 oppositions 98 appointments 4 rugbys 43 feminists 53 gems 1 koala 49 sharps 86 regrets 8 landscapes 35 patients 22 brackets 5 items 33 banks 33 calories 52 objects 31 matters 55 deprives 94 trees 83 reflections 36 drives 53 introduces 21 fuels 86 koalas 81 bananas 24 tips 37 scraps 82 ponys 30 delivers 95 functions 83 ditchs 46 confrontations 62 fees 28 creates 2 facades 50 plasters 40 generates 69 benefits 27 secures 93 likes 19 opinions 78 larges 37 deposits 86 societys 74 courages 98 writes 57 corpses 95 folklores 11 thins 23 miscarriages 11 rates 0 unlikelys 71 spills 9 summarys 13 qualifys 16 uncertaintys 41 disasters 34 failures 28 velvets 12 dorms 3 rescues 132 koalas 4 eauxs 39 gos 11 runners 9 hays 70 bundles 98 natives 48 whites 37 notebooks 93 dealers 83 thesiss 31 mayors 84 veins 23 suffers 33 funs 58 courtesys 44 hears 98 reasons 99 gass 31 silences 26 images 74 despises 9 maximums 59 restaurants 57 accountants 52 traditions 84 cups',
    expects: ['1 koala', '86 koalas', '132 koalas']
  },
  {
    text: '39556 8793 36587 80348 6552 60005 4 280 665 7 9899 859 2777 0 0 2 2047 2910 71 3 3145 51 48871 9064 721 336229 3 84 3 434 0 60 470 6280 84592 9 36949 37 9259 46 720 436 288 80 53 52 7159 04 741 82663991 96 6 9 98 45 4 16681 90 44 2365 11 4 454 90 9482 58 390 684 161 774 3 81938 37908 63029 6174 16 306 86 1545 6 99 73 851 727 19453 84135 9564 42 89 54 4 43 8846 567 3 9 26 55 0 63 77 4846 765 447 93 3 6 886 15 7 7521 16685 5280 4262 44 839 2717 929 05 543 18525 59 4 8 1 26 7 56 2526 600 4 85099 21 770 0 6 074 251 68399018 417 789 39 93 181 18968 4 6919 41 9365 39939 9 554 161 2 75087 211 8 6140 9 4185 87792 82 450 371 971 496 21575 78 57014 34 4 96932 87 95 2 817 9 3 6325 3 261 831 64 5934 5 4445 647 501 0 95 772 2417',
    expects: ['04 741 82663991', '074 251 68399018']
  },
  // a kid with at least one cat /kid.*\bcat\b/
  // a man with 2-3 dogs and a cat /man( dog){2,3} cat/
  // a man with at least 2 parrots and  a dog or a cat /man( parrot){2,}(dog|cat)/
  // a woman with exactly 3 ferrets /woman (ferret){3}/
]



class Game {
  constructor(levels) {
    this.levels = levels;
    this.levelPtr = 0;
    this.currentLevel = this.levels[this.levelPtr];
    this.dData = document.getElementById('data');
    this.dPattern = document.getElementById('pattern');
    this.dMatches = document.getElementById('matches');
    this.dSuccess = document.getElementById('success');

    this.pattern = '';
    this.options = '';
    this.dPattern.onkeyup = () => this.onPatternUpdated();

    document.getElementById('next').onclick = () => this.nextLevel();

    this.refreshDisplay();
  }

  onPatternUpdated() {
    const string = this.dPattern.value;
    if ((string.match(/\//g) || []).length < 2) {
      [this.pattern, this.options] = [];
    } else {
      [, this.pattern, this.options] = this.dPattern.value.split('/');
    }
    this.refreshAndValidate();

    if (this.dPattern.value.length) {
      this.dPattern.style.width = `${this.dPattern.value.length}em`;
    } else {
      this.dPattern.style.width = '';
    }
  }

  refreshAndValidate () {
    this.refreshDisplay();
    if (this.isMatch(this.currentLevel.text, this.getRegExp(this.pattern, this.options), this.currentLevel.expects)) {
      this.dSuccess.setAttribute('aria-hidden', false);
    }
  }

  getRegExp(pattern, options) {
    try {
      return new RegExp(pattern, options);
    }
    catch (err) {
      if (err.message.indexOf('Invalid flags') > -1) {
        this.dMatches.innerHTML = `Invalid flags provided: "${options}"`;
      } else {
        this.dMatches.innerHTML = err;
      }
      return '';
    }
  }

  refreshDisplay() {
    this.displayData(this.getHighlightedText(this.currentLevel.text, this.getRegExp(`(${this.pattern})`, this.options)))
    this.displayMatches(this.currentLevel.text, this.pattern ? this.getRegExp(this.pattern, this.options) : false);
  }

  displayData(data) {
    this.dData.innerHTML = data.replace(/\n/g,'<br/>');
  }

  displayMatches(data, rePattern) {
    this.dMatches.innerHTML = rePattern ? JSON.stringify(Array.from(data.match(rePattern) || [])) : '';
  }
  
  isMatch(data, rePattern, expects) {
    return JSON.stringify(Array.from(data.match(rePattern) || [])) === JSON.stringify(expects);
  }
  
  getHighlightedText(data, rePattern) {
    if (rePattern !== '') {
      return data.replace(rePattern, '<b>$1</b>');
    }

    return data;
  }

  nextLevel() {
    document.getElementById(`scene-${this.levelPtr++}`).setAttribute('aria-hidden', true);
    document.getElementById(`scene-${this.levelPtr}`).setAttribute('aria-hidden', false);
    this.currentLevel = this.levels[this.levelPtr];
    this.dSuccess.setAttribute('aria-hidden', true);
    this.dPattern.value = '';
    this.flags = { g: false, m: false, i: false };
    document.querySelectorAll('.js-flag').forEach(dFlag => {dFlag.checked = false; });
    this.onPatternUpdated();
    this.dPattern.focus();
  }
}

window.onload = () => {
  return new Game(levels);
}