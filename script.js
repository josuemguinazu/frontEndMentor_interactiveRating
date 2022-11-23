const numberVal = [];

const ratingNumbers = () => {
  const num1_ = document.querySelector('#num1');
  const num2_ = document.querySelector('#num2');
  const num3_ = document.querySelector('#num3');
  const num4_ = document.querySelector('#num4');
  const num5_ = document.querySelector('#num5');
  const optionNumbers = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5,
  };

  num1_.insertAdjacentHTML('afterend', optionNumbers.num1);
  num2_.insertAdjacentHTML('afterend', optionNumbers.num2);
  num3_.insertAdjacentHTML('afterend', optionNumbers.num3);
  num4_.insertAdjacentHTML('afterend', optionNumbers.num4);
  num5_.insertAdjacentHTML('afterend', optionNumbers.num5);
  getNumberSelected(optionNumbers);
};

const getNumberSelected = () => {
  const numbersDiv = document.querySelector('.numbers');
  numbersDiv.addEventListener('click', (e) => {
    const numberSelected = parseInt(e.target.innerText);
    numberVal.push(numberSelected);
    if (numberVal.length <= 1) {
      showNumberSelected(numberVal);
    }
  });
};
ratingNumbers();

const showNumberSelected = (numberVal) => {
  const selNum = document.querySelector('#selNum');
  selNum.insertAdjacentHTML('afterend', numberVal.at(-1));
};

const submitOverlay = () => {
  const submitBtn = document.querySelector('#submitBtn');
  submitBtn.addEventListener('click', thankYouCard);
};

const thankYouCard = () => {
  const main = document.querySelector('.main');
  const overlay = document.querySelector('.overlay');
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block';
    main.style.display = 'none';
  } else {
    overlay.style.display = 'none';
    main.style.display = 'block';
  }
};
submitOverlay();
