editdata.player_datas[0].nickname="电脑(简单)";
editdata.player_datas[1].nickname="电脑(简单)";
editdata.player_datas[2].nickname="电脑(简单)";
editdata.player_datas[3].nickname="电脑(简单)";
editdata.player_datas[0].avatar_id=400101;
editdata.player_datas[1].avatar_id=400101;
editdata.player_datas[2].avatar_id=400101;
editdata.player_datas[3].avatar_id=400101;
editdata.config={
  'category':2,
  'meta':{'mode_id':40},
  'mode':{
    'mode':1,
    'detail_rule':{
      'begin_open_mode':0,
      'chuanma':0,
      'dora3_mode':0,
      'dora_count':3,
      'fanfu':1,
      'guyi_mode':0,
      'huansanzhang':1,
      'init_point':25000,
      'muyu_mode':0,
      'shiduan':1,
      'xuezhandaodi':1
    }
  }
}

gamebegin();
tiles0=["1m","1m","1m","2m","3m","4p","0p","6p","7m","8m","9m","9m","9m","5z"];
tiles1=["1s","1s","1s","2s","3s","5s","5s","5s","7s","8s","9s","9s","9s"];
tiles2=["1p","1p","1p","2p","3p","4m","0m","6m","7p","8p","9p","9p","9p"];  
tiles3=["3p","4p","5p","5p","6p","7p","4m","5m","6m","5m","4s","0s","6s"];
paishan="5z5z5z5z5z5z5m5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5z";
roundbegin();
huansanzhang("4p0p6p",["5s","5s","5s"],["4m","0m","6m"],["4s","0s","6s"],1);
qiepai("5z");
mopai();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
hupai(3);
for(let i=62;i>=0;i--){
  mopai();
  qiepai();
}
notileliuju();
roundend();

tiles1=["1m","9m","1p","9p","1s","9s","1z","2z","3z","4z","5m","0m","5m","6p"];
tiles2=["1p","2p","3p","4p","5p","1m","2m","3m","4m","5m","4p","0p","6p"];
tiles3=["1m","1m","1m","2m","2m","8m","8m","9m","9m","9m","5z","5z","6z"];  
tiles0=["1p","1p","1p","2p","3p","7p","8p","9p","9p","9p","6m","1s","1s"];
paishan=randompaishan("1z1z8m1z7z");
roundbegin();
huansanzhang(["6m","1s","1s"],["5m","0m","5m"],["4p","0p","6p"],["5z","5z","6z"],1);
qiepai("6p");
hupai(2);
mopai();
qiepai(true);
mopai();
qiepai(true);
mopai();
qiepai(true);
hupai();
mopai();
qiepai();
mopai();
hupai(true);
roundend();

roundbegin();
tiles2=["7s","8s","9s","6p","6p","6p","7p","7p","8p","8p","9p","1m","1m","1m"];
tiles3=["1z","1z","1z","2z","2z","2z","3s","3s","3s","4z","4z","4z","6z"];
tiles0=["1m","8s","1p","1s","1z","2z","3z","4z","5z","6z","7z","7p","8p"];  
tiles1=["2s","2s","2s","4s","4s","4s","3z","3z","3z","6s","6s","6s","6z"];
paishan=randompaishan("6z9m6z");
roundbegin();
huansanzhang(["7p","8p","8s"],["3z","3z","3z"],["9p","7s","9s"],["3s","3s","3s"],1);
hupai(true);
roundend();
gameend();
