import Link from 'next/link';
import { test } from './home.css';
import postgres from 'postgres';

const sql = postgres(process.env.DB_URL!, {
  user: 'postgres',
  password: process.env.DB_PASSWORD,
});
async function Quizzes() {
  const quiz = await sql`
    SELECT * FROM asana
  `;
  console.log(quiz);

  return (
    <ul>
      <li>
        <Link href='/quiz/1'>1</Link>
      </li>
      <li>
        <Link href='/quiz/2'>2</Link>
      </li>
      <li>
        <Link href='/quiz/3'>3</Link>
      </li>
    </ul>
  );
}

export default function Home() {
  return (
    <section>
      <Quizzes />
      <h1>hello nextjs</h1>
      <p className={test}>hello wwww 안녕안녕</p>
    </section>
  );
}
