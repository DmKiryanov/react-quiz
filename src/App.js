import React from "react";
import "./App.css";


const questions = [
  {
    title: "Какая компания владеет Bugatti, Bentley, Lamborghini, Audi и Porsche?",
    variants: ["BMW", "Mercedes", "FIAT", "Volkswagen"],
    correct: 3,
  },
  {
    title: "Назовите самый большой остров в мире",
    variants: ["Мадагаскар", "Борнео", "Гренландия", "Новая Гвинея"],
    correct: 2,
  },
  {
    title: "Как называется единица измерения скорости и направления движения компьютерной мыши?",
    variants: ["Мисти", "Микси", "Мигги", "Микки"],
    correct: 3,
  },
  {
    title: "Что на самом деле представляет из себя легендарный зеленый код из «Матрицы»?",
    variants: ["Рецепт суши", "Рецепт пельменей", "Рецепт жаркое", "Рецепт Пад Тая"],
    correct: 0,
  },
  {
    title: "Кто на самом деле рисовал Розу в «Титанике»?",
    variants: ["Леонардо ДиКаприо", "Билли Зейн", "Джеймс Кэмерон", "Кэти Бейтс"],
    correct: 2,
  },
  {
    title: "В каком городе проходили Олимпийские игры 2000 года?",
    variants: ["Лондон", "Париж", "Сидней", "Москва"],
    correct: 2,
  },
  {
    title: "Сколько людей находится на льду во время хоккейного матча, включая игроков и судей?",
    variants: ["10", "16", "13", "12"],
    correct: 1,
  },
  {
    title: "У какого животного язык самый длинный по отношению к длине тела?",
    variants: ["Муравьед", "Солнечный медведь", "Колибри", "Хамелеон"],
    correct: 3,
  },
  {
    title: "Кто-то с «мусофобией» страдает страхом перед каким животным?",
    variants: ["Сурикаты", "Слоны", "Мыши", "Страусы"],
    correct: 2,
  },
  {
    title: "Какой город в мире самый большой по плотности населения?",
    variants: ["Пекин", "Манила", "Мумбаи", "Нью-Йорк"],
    correct: 1,
  },
];


function Result({correct}) {
  return (
    <div className="result">
      {
        correct > 7 ? (<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result-img" />) : 
        ((correct < 8 && correct > 4) ? (<img src="https://cdn-icons-png.flaticon.com/512/10942/10942081.png" alt="result-img" />) :
        (<img src="https://cdn-icons-png.flaticon.com/512/187/187143.png" alt="result-img" />))
      }
      <h2>
        Вы отгадали {correct} ответа из {questions.length} 
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {

  const percent = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {
          question.variants.map((el, index) => {
            return (
              <li onClick={() => onClickVariant(index)} key={index}>{el}</li>
            );
          })
        }
      </ul>
      <div className="num-questions">
        <p>Вопрос {step + 1} из {questions.length}</p>
      </div>
    </>
  );
}

function Start({onClickStart}) {
  return (
    <div className="start-window">
      <h1>&#127891; Тест на эрудицию и широкий кругозор</h1>
      <button onClick={onClickStart}>Пройти тест</button>
    </div>
  )
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const [start, setStart] = React.useState(true);

  const onClickVariant = (index) => {
    setStep(step + 1);
    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  const onClickStart = () => {
    setStart(false);
  }

  return (
    <div className="App">
      {
        start ? (<Start onClickStart={onClickStart} />) : (
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant} />) :
        (<Result correct={correct} />))
      }
    </div>
  );
}

export default App;