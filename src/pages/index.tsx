import { Button } from '@/components/atomes/Button/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/ask">
        <Button />
      </Link>
    </>
  );
}
