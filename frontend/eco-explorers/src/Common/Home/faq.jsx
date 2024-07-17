import React from 'react'
import { useState } from 'react';
import './faq.css';
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is Green Trade Exchange?',
      answer: 'Green Trade Exchange is a platform for trading green credits...'
    },
    {
      id: 2,
      question: 'How can companies benefit from Green Trade Exchange?',
      answer: 'Companies can benefit by reducing their carbon footprint...'
    },
    {
      id: 3,
      question: 'How can individuals participate?',
      answer: 'Individuals can participate by purchasing green credits...'
    },
    {
      id: 4,
      question: 'How do NGOs use Green Trade Exchange?',
      answer: 'NGOs can raise funds for their environmental projects...'
    }
    // Add more questions as needed
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the answer
    }
  };
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {questions.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div
            className="question"
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
            <span className="toggle-icon">{activeIndex === index ? '➖' : '➕'}</span>
          </div>
          {activeIndex === index && (
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Faq;