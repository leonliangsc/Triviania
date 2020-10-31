import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Question from '../components/Question';
import QuestionsGetter from '../components/Question';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders questions data", async () => {
    const fakeQuestion = {    
        question: "The best NBA player?",    
        incorrect: ["Kawhi",  "Steph", "Harden"],
        correct: "LeBron"  
    };  
    jest.spyOn(global, "fetch").mockImplementation(() =>    
        Promise.resolve({
            json: () => Promise.resolve(fakeQuestion)    
        })  
    );
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<Question id="1" />, container);
    });
  
    expect(container.querySelector("correct").textContent).toBe(fakeQuestion.correct);
    expect(container.querySelector("question").textContent).toBe(fakeQuestion.question);
  
    // remove the mock to ensure tests are completely isolated  
    global.fetch.mockRestore();});