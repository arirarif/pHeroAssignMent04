
function checkAt(mail) {
  if (mail.indexOf("@") === -1) {
    return "Invalid email";
  }

  const duiVag = mail.split("@");

  user = duiVag[0];
  dom = duiVag[1];

  return `${user} email sent form ${dom}`
}

console.log(checkAt('arirgmail.com'));

