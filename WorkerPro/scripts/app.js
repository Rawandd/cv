const menu = document.getElementById('menu');
const navbar = document.getElementById('nav-open');
const span = document.getElementById('changeHumbergerColor');
const logo = document.getElementById('Logo');
const first = document.getElementById('firstBtn');
const second = document.getElementById('secondBtn');
const third = document.getElementById('thirdBtn');
const xom = document.getElementById('xom');
const secondSection = document.getElementById('secondSection');
const thirdSection = document.getElementById('thirdSection');
const span1 = document.getElementById('labelSpan1')
const span3 = document.getElementById('labelSpan3')
const span2 = document.getElementById('labelSpan2')


span.style.opacity = '1';

span1.addEventListener('click' , () =>{
  span1.classList.add('visibleInput');
  span2.classList.remove('visibleInput');
  span3.classList.remove('visibleInput');
})
span2.addEventListener('click' , () =>{
  span2.classList.add('visibleInput');
  span1.classList.remove('visibleInput');
  span3.classList.remove('visibleInput');
})
span3.addEventListener('click' , () =>{
  span3.classList.add('visibleInput');
  span2.classList.remove('visibleInput');
  span1.classList.remove('visibleInput');
})



menu.addEventListener('click', () =>{
  navbar.classList.toggle('openNav');
  span.classList.toggle("changeHumbergerColor");
  logo.classList.toggle('changeLogoColor');
})

span1.addEventListener('click' , () =>{
  xom.classList.add('visible')
  secondSection.classList.remove('visible')
  thirdSection.classList.remove('visible')
  secondSection.classList.add('invisible')
  thirdSection.classList.add('invisible')
})

span2.addEventListener('click' , () =>{
  xom.classList.remove('visible')
  secondSection.classList.add('visible')
  thirdSection.classList.remove('visible')
  xom.classList.add('invisible')
  thirdSection.classList.add('invisible')
})

span3.addEventListener('click' , () =>{
  xom.classList.remove('visible')
  secondSection.classList.remove('visible')
  thirdSection.classList.add('visible')
  secondSection.classList.add('invisible')
  xom.classList.add('invisible')
})