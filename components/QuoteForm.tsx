// components/QuoteForm.tsx
const QuoteForm = () => {
  return (
        <section className="px-4 py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Request a Quote</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="border p-3 rounded" />
            <input type="email" placeholder="E-mail" className="border p-3 rounded" />
            <input type="tel" placeholder="Phone Number" className="border p-3 rounded" />
            <select className="border p-3 rounded">
              <option>Choose Time Frame</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
            </select>
            <select className="border p-3 rounded">
              <option>Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="border p-3 rounded">
              <option>Choose Quantity</option>
              <option>1</option>
              <option>5</option>
              <option>10+</option>
            </select>
            <textarea
              placeholder="Please describe your project"
              className="border p-3 rounded md:col-span-2"
              rows={4}
            ></textarea>
            <p className="text-sm text-gray-600 md:col-span-2">
              By submitting this form you agree to our{' '}
              <a href="#" className="underline text-blue-600">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="underline text-blue-600">
                Privacy Policy
              </a>
              .
            </p>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow md:col-span-2 w-fit mx-auto"
            >
              Loerum Ipsum →
            </button>
          </form>
        </div>
      </section>
  );
};

export default QuoteForm;
