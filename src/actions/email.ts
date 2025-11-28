import emailjs from '@emailjs/browser';

export async function handleSendEmail(formData: { name: string; email: string; subject: string; message: string; }) {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const now = new Date();
  const data = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const result = await emailjs.send(serviceID, templateID, {
    ...formData,
    time: data
  }, publicKey);
  return result
}