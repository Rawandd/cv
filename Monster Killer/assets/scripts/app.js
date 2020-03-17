const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;


const MONSTER_ATTACK_EVENT = MONSTER_ATTACK_VALUE;

let HEAL_VALUE = 20;


let choosenMaxLife;

function chooseHealth() {

  const choosenMaxHealth = prompt("بڕی خوێنی هەردوکتان دیاری بکە", '100');
  const enteredValue = parseInt(choosenMaxHealth);
  if (isNaN(enteredValue) || enteredValue <= 0) {
    throw { message: 'You entered Wrong input Please cheack it again'};
  }
  return enteredValue;
}

try{
  choosenMaxLife = chooseHealth();
}catch(err) {
  choosenMaxLife = 100;
  console.log(err);
  alert('ئینپوتەکەت هەڵەیە، ئێمە ١٠٠ مان بۆ دیاری کردیت')
}

adjustHealths(choosenMaxLife);

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLife = true;

let battelLog = [];

function events(ev, val, healthMon, healthPlayer) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: healthMon,
    finalPlayerHealth: healthPlayer
  }
  if (ev === 'ATTACK') {
    logEntry.target = 'MONSTER'
  } else if (ev === 'STRONG_ATTACK') {
    logEntry.target = "MONSTER"
  } else if ('MONSTER_ATTACK') {
    logEntry.target = "PLAYER"
  } else if (ev === 'health') {
    logEntry.target = "PLAYER"
  }
  battelLog.push(logEntry);
}


function finishing() {
  let beforeUseBonusLife = 15;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    useBonusLife();
    currentPlayerHealth = PlayerHealthBar.value = beforeUseBonusLife;
    alert("تۆ ئەمردیت، بەڵام چانسێکی ترت وەرگرت و خوێنەکەت 15% زیادی کرد");
    setPlayerHealth(beforeUseBonusLife);
  }

  if (currentMonsterHealth <= 0) {
    alert("پیرۆزە، بردتەوە")
    const retry = prompt("ئەگەر ئەتەوێت بەردەوامبیت پەنجە بنێ بە دوگمەی 'A' ـدا");
    if (retry == 'a' || retry=='A') {
      currentMonsterHealth = MonsterHealthBar.value = choosenMaxLife;
      currentPlayerHealth = PlayerHealthBar.value = choosenMaxLife;
    } else {
      MonsterHealthBar.value = 0;
      PlayerHealthBar.value = 0;

      StrongAttackBtn.disabled = true;
      AttackBtn.disabled = true;
      healBtn.disabled = true;
      logBtn.disabled = true;
    }
  }
  else if (currentPlayerHealth <= 0) {
    alert("تۆ دۆڕایت")
    const retry = prompt("ئەگەر ئەتەوێت بەردەوامبیت پەنجە بنێ بە دوگمەی 'A' ـدا");

    if (retry == 'a' || retry == 'A') {
      currentMonsterHealth = MonsterHealthBar.value = choosenMaxLife;
      currentPlayerHealth = PlayerHealthBar.value = choosenMaxLife;
    } else {
      MonsterHealthBar.value = 0;
      PlayerHealthBar.value = 0;

      StrongAttackBtn.disabled = true;
      AttackBtn.disabled = true;
      healBtn.disabled = true;
      logBtn.disabled = true;
    }
  }
}


function attackMonster(mode) {
  let maxDamage;

  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
    dam = 'ATTACK'
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
    dam = 'STRONG_ATTACK'
  }
  const monsterHealthAfterAttack = MonsterHealth(maxDamage);
  currentMonsterHealth -= monsterHealthAfterAttack;

  events(dam,
    monsterHealthAfterAttack,
    currentMonsterHealth,
    currentPlayerHealth
  );

  const playerHealthAfterAttack = PlayerHealth(MONSTER_ATTACK_EVENT);
  currentPlayerHealth -= playerHealthAfterAttack;

  events('MONSTER_ATTACK',
     playerHealthAfterAttack,
     currentMonsterHealth,
     currentPlayerHealth
  );
  finishing();
}

function StrongAttack() {
  attackMonster('STRONG_ATTACK');
}

function attack() {
  attackMonster('ATTACK')
}

function healPlayerHandler() {

  let healValue;

  if (currentPlayerHealth >= (choosenMaxLife - HEAL_VALUE)) {
    alert("ناتوانیت خوێنەکەت بۆ زیاتر لە 100 زیاد بکەیت");
    healValue = choosenMaxLife - currentPlayerHealth;
    increasePLayerHeal(healValue);
  }
  else {
    increasePLayerHeal(HEAL_VALUE);
    currentPlayerHealth = PlayerHealthBar.value;
    healValue = HEAL_VALUE;
  }
  const playerHealthAfterAttack = PlayerHealth(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerHealthAfterAttack;

  events('health',
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
 );


  finishing();
}

function logHandler (){
  for (const i of battelLog) {
    for (const key in i) {
      console.log(`${key} => ${i[key]}`);
    }
  }
}

AttackBtn.addEventListener('click', attack);
StrongAttackBtn.addEventListener('click', StrongAttack);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click' , logHandler);