function toggleAnswer(question) {
  var answer = question.nextElementSibling;

  console.log(answer.classList);

  if (answer.classList.contains("faq-answer-active")) {
    answer.classList.remove("faq-answer-active");
  } else {
    answer.classList.add("faq-answer-active");
  }
}
