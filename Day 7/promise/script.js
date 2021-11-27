let completed = true;
let service = new Promise(function (resolve, reject) {
  if (completed) {
    resolve("Order sent");
  } else {
    reject("Order failed due to issues");
  }
});
service
  .then((message) => console.log(message))
  .catch((reason) => console.log(reason))
  .finally((message) => console.log("It's working"));
