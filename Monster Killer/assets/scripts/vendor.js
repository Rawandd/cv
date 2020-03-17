const AttackBtn = document.getElementById('attack-btn');
const StrongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn')

const MonsterHealthBar = document.getElementById('monster-health');
const PlayerHealthBar = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');


function adjustHealths(maxLife) {
  MonsterHealthBar.value = maxLife;
  MonsterHealthBar.max = maxLife;
  PlayerHealthBar.value = maxLife;
  PlayerHealthBar.max = maxLife;
}

function MonsterHealth(damage) {
  const deltaDamage = Math.random() * damage;
  MonsterHealthBar.value = MonsterHealthBar.value - deltaDamage;
  return deltaDamage;
}

function PlayerHealth(damage) {
  const deltaDamage = Math.random() * damage;
  PlayerHealthBar.value = PlayerHealthBar.value - deltaDamage;
  return deltaDamage;
}

function increasePLayerHeal(Playerheal) {
  PlayerHealthBar.value += Playerheal;
  currentPlayerHealth = PlayerHealthBar.value
}

function useBonusLife(){
  bonusLife.remove();
}

function setPlayerHealth(health){
  PlayerHealthBar.value = health
}