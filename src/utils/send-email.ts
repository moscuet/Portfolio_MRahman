import { FormData } from '@/components/ContactForm';
import { toast } from '@/components/ui/ToastNotification';


export function sendEmail(data: FormData): Promise<any> {
  const apiEndpoint = '/api/email';
  console.log('form data from api', data);

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    return res.json();
  });
}