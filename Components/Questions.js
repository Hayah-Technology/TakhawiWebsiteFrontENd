"use client";
import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import questions from '../messages/questions.json'
import enQuestions from '../messages/questions_en.json'
function Questions({ lang }) {
  const t = useTranslations("home");

  // const [questions, setQuestions] = useState([]);
  // const handelData = () => {
  //   const po = axios
  //     .get("https://dashboard.takhawe.com/api/home")
  //     .then((res) => {
  //       setQuestions(res.data.questions);
  //     })
  //     .catch((res) => {
  //       console.log(res);
  //     });
  // };
  // useEffect(() => {
  //   handelData();
  // }, []);
  
  return (
    <section className="questions">
      <div className="con">
        <div className="content">
          {/* {questions.length > 0 ? (
            <>
              <h2>{t("qui.title")}</h2>
              <div className="accordion" id="accordionExample">
                {questions.map((item, i) => {
                  return (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${
                            i === 0 ? null : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question[lang]}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          i === 0 ? "show" : null
                        } `}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer[lang]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null} */}
          {questions.questions.length > 0 ? (
            <>
              <h2>{t("qui.title")}</h2>
              <div className="accordion" id="accordionExample">
                {lang === 'ar' ? questions.questions.map((item, i) => {
                  return (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${
                            i === 0 ? null : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          i === 0 ? "show" : null
                        } `}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                }) : enQuestions.questions.map((item, i) => {
                  return (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${
                            i === 0 ? null : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          i === 0 ? "show" : null
                        } `}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Questions;
