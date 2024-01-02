export default function QuizPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1>quiz {params.id}</h1>
    </section>
  );
}
