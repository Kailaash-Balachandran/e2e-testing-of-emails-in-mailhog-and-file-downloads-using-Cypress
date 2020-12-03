const mailer = require('nodemailer');
const fs = require('fs');

const smtp = mailer.createTransport({
  host: '127.0.0.1',
  port: '1025',
  auth: {
    user: 'user',
    pass: 'password',
  }
});

const mailOptions = {
  from: 'hoge@github.com',
  to: 'hogehoge@github.com',
  subject: 'Email with Attachment',
  html: 'Email with Attachment',
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
