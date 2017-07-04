function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(78);
      reject('city not found');
    }, 1000);
  });
}

getTempPromise('Sydney').then(function(temp) {
  console.log('promise suucess', temp);
}, function (err) {
  console.log('promiss error', err);
});

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }else{
      reject('some param is not a number');
    }
  });
}

addPromise(1, 2).then(function(result) {
  console.log('success: ', result);
}, function (err) {
  console.log('err: ', err);
});

addPromise(1, '2').then(function(result) {
  console.log('success: ', result);
}, function (err) {
  console.log('err: ', err);
});
