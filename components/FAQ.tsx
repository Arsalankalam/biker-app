// components/FAQ.tsx
export default function FAQ() {
  return (
    <section className="bg-gray-50 py-12 px-4 text-black">
      <h2 className="text-2xl font-bold text-center mb-8">FREQUENTLY ASKED QUESTIONS (FAQS)</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="border-b pb-4">
          <div className="flex justify-between font-semibold">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <span>–</span>
          </div>
          <p className="mt-2 text-gray-600">
            Volutpat amet aliquet morbi suspendisse convallis...
          </p>
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-between border-b py-4 font-semibold">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <span>+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
