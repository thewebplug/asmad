import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init("c25k-BQixcUIpb1gu");

export const sendEmail = async (templateParams) => {
  try {
    const result = await emailjs.send(
      "service_p63hc0v", 
      "template_31aawom", 
      templateParams
    );
    console.log('Email sent successfully', result.text);
    return result;
  } catch (error) {
    console.error('Failed to send email', error);
    throw error;
  }
};