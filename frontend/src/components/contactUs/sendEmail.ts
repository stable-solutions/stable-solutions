import emailjs from 'emailjs-com';

interface FormData {
  yourname: string;
  youremail: string;
  yourphone: string;
  yourbusiness: string;
  yourmessage: string;
}

// EmailJS function to send email
export const sendEmail = async (formData: FormData) => {
  try {
    const result = await emailjs.send(
      'service_lgj3s6j',  // Replace with your EmailJS service ID
      'template_rex01be',  // Replace with your EmailJS template ID
      {
        name: formData.yourname,
        email: formData.youremail,
        phone: formData.yourphone,
        business: formData.yourbusiness,
        message: formData.yourmessage,
      },
      'V5SwMmxqkrhVqdj1a'  // Replace with your EmailJS user ID
    );
    return result;
  } catch (error) {
    throw new Error('Email sending failed');
  }
};
