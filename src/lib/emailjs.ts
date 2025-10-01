import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "SPP_vXlY3Ho-S7i6s";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_4a2jm1t";
const EMAILJS_DEMO_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID || "template_5jjpi9q";
const EMAILJS_CONTACT_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_jvhnb2f";

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send demo request email
export const sendDemoEmail = async (data: {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  companySize: string;
  hearAbout: string;
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_DEMO_TEMPLATE_ID,
      {
        to_email: "sales@cloudproai.com",
        from_email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        product: "Bevlytics",
        full_name: `${data.firstName} ${data.lastName}`,
        company_size: data.companySize,
        hear_about: data.hearAbout,
        subject: "New Request",
        message: `Bevlytics: New demo request from ${data.firstName} ${data.lastName} (${data.email}). Phone: ${data.phone || 'Not provided'}. Company size: ${data.companySize}. How they heard about us: ${data.hearAbout}`,
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error("Error sending demo email:", error);
    return { success: false, error };
  }
};

// Send contact form email
export const sendContactEmail = async (data: {
  email: string;
  name: string;
  company: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      {
        to_email: "pkhanal012@gmail.com",
        from_email: data.email,
        full_name: data.name,
        product: "Bevlytics",
        company: data.company || "Not provided",
        message: "Bevlytics: " + data.message,
        subject: "New Contact Form Submission",
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error };
  }
};

// Send auto-response email to user
export const sendAutoResponseEmail = async (
  email: string,
  type: "demo" | "contact"
) => {
  try {
    const templateId =
      type === "demo"
        ? process.env.NEXT_PUBLIC_EMAILJS_AUTO_RESPONSE_DEMO_TEMPLATE_ID ||
          "template_auto_demo"
        : process.env.NEXT_PUBLIC_EMAILJS_AUTO_RESPONSE_CONTACT_TEMPLATE_ID ||
          "template_auto_contact";

    const result = await emailjs.send(EMAILJS_SERVICE_ID, templateId, {
      to_email: email,
      subject:
        type === "demo"
          ? "Thank you for your demo request - Bevlytics"
          : "Thank you for contacting us - Bevlytics",
      message:
        type === "demo"
          ? "Thank you for requesting a demo! We will get back to you within 24-48 hours to schedule your personalized demo."
          : "Thank you for contacting us! We will get back to you within 24-48 hours.",
    });
    return { success: true, result };
  } catch (error) {
    console.error("Error sending auto-response email:", error);
    return { success: false, error };
  }
};
