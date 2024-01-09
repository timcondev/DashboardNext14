import { redirect } from 'next/navigation';
import { auth } from '/app/auth';

export default function Home() {
  return <>const session = auth() if (!session) {redirect('/login')}</>;
}
