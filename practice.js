/*function signature/sample */
function sendNotification(email) {
  if ( email.indexOf('@') === -1 ) {
    return "Invalid Email";
  }

  const parts = email.split("@");

  const username = parts[0];
  const domain = parts[1];

  return `${username} sent you an email from ${domain}`;
}

console.log(sendNotification('ami@gmail.com'));
