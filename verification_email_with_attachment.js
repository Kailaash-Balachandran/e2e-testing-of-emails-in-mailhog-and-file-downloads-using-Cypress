const mailer = require('nodemailer');
const fs = require('fs');

const smtp = mailer.createTransport({
  host: 'localhost',
  port: '1025',
  auth: {
    user: 'user',
    pass: 'password',
  }
});

const mailOptions = {
  from: 'noreply@test.com',
  to: 'johndoe@test.com',
  subject: 'Email sent with attachments',
  attachments: [
    {
      filename: 'text1.txt',
      content: 'hello world!',
      contentType: 'text/plain'
    },
    {
      filename: 'image.jpeg',
      content: fs.createReadStream('./files/image.jpeg')
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
