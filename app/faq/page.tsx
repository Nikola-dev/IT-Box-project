import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is ITBox?",
    answer: "ITBox is a platform for managing IT resources efficiently.",
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support via the Help section in your dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard security measures to protect your data.",
  },
];

export default function FAQPage() {
  return (
    <main
      className="faq-page"
      style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}
    >
      <h1>Frequently Asked Questions</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {faqs.map((faq, idx) => (
          <li key={idx} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              {faq.question}
            </h2>
            <p style={{ margin: 0 }}>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
