const mailer = require('nodemailer');
const fs = require('fs');

const smtp = mailer.createTransport({
  host: '0.0.0.0',
  port: '1025',
  auth: {
    user: 'user',
    pass: 'password',
  }
});

const mailOptions = {
  from: 'noreply@test.com',
  to: 'johndoe@test.com',
  subject: 'Email sent with an image attachment',
  html: '<h1>This email contains an image attachment</h1>',
  attachments: [
    {
      filename: 'unsplash.jpg',
      content: fs.createReadStream('./files/unsplash.jpg'),
      contentType: 'image/jpeg'
    }
  ]
};

smtp.sendMail(mailOptions, function(err, info) {
  if (!err) {
    console.log('Mail success: ' + info.response);
  } else {
    console.log('Mail err', err);
  }
  smtp.close();
});
