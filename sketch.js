const database = firebase.database();

// Get a reference to the element you want to retrieve the value from
const elementRef = database.ref('msg');

function draw() {
  input();
  elementRef.once('value')
    .then((snapshot) => {
      const elementValue = snapshot.val();
      document.getElementById('m1').innerHTML = elementValue
    });
  database.ref('fmsg').once('value')
    .then((snapshot) => {
      const elementValue2 = snapshot.val();
      document.getElementById('m2').innerHTML = elementValue2
    });
}

function input() {
  const userInput = document.getElementById('user-input');
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', function () {
    const inputVal = userInput.value;
    database.ref('fmsg').set(inputVal);
  });
}