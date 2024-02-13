import React from "react";
import HeaderPage from "../../../Components/HeaderPage";
import ContactUs from "../../../Components/ContactUS";
import ModalJop from "../../../Components/ModalJop";

function page() {
  return (
    <>
      <HeaderPage title={"كن جزءًا من مهمتنا"} title2={"نحن نبحث ان اشخاص متحمسين للانضمام لتخاوي "} img={"/images/header1.png"} />
      <section className="jobs">
        <div className="con">
          <div className="content">
            <h2>4 وظائف بأنتظارك</h2>
            <div className="allJobs">
              <div className="job">
                <div className="info">
                  <h3>محاسب AP/AR</h3>
                  <div className="details">
                    <h4>عمل جزئي</h4>
                    <di v className="loc">
                      <svg
                        width="22"
                        height="30"
                        viewBox="0 0 22 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.348 26.973C7.607 23.721 5.508 20.675 3.092 17.892C1.476 16.052 0.5 13.639 0.5 11C0.5 5.205 5.205 0.5 11 0.5C16.795 0.5 21.5 5.205 21.5 11C21.5 13.638 20.525 16.051 18.917 17.895C16.499 20.68 14.401 23.726 12.659 26.98C11.954 28.278 11.441 29.236 11.441 29.236C11.354 29.399 11.184 29.5 11 29.5C10.816 29.5 10.646 29.399 10.559 29.236L9.348 26.973ZM11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5ZM11 5.5C14.036 5.5 16.5 7.964 16.5 11C16.5 14.036 14.036 16.5 11 16.5C7.964 16.5 5.5 14.036 5.5 11C5.5 7.964 7.964 5.5 11 5.5ZM11 7.5C9.068 7.5 7.5 9.068 7.5 11C7.5 12.932 9.068 14.5 11 14.5C12.932 14.5 14.5 12.932 14.5 11C14.5 9.068 12.932 7.5 11 7.5ZM11 8.5C12.38 8.5 13.5 9.62 13.5 11C13.5 12.38 12.38 13.5 11 13.5C9.62 13.5 8.5 12.38 8.5 11C8.5 9.62 9.62 8.5 11 8.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                        <path
                          d="M11 13.5C12.3807 13.5 13.5 12.3807 13.5 11C13.5 9.61929 12.3807 8.5 11 8.5C9.61929 8.5 8.5 9.61929 8.5 11C8.5 12.3807 9.61929 13.5 11 13.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                      </svg>

                      <p>الرياض , السعودية</p>
                    </di>
                  </div>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                  className="moreDetails"
                >
                  تفاصيل
                </button>
              </div>
              <div className="job">
                <div className="info">
                  <h3>محاسب AP/AR</h3>
                  <div className="details">
                    <h4>عمل جزئي</h4>
                    <di v className="loc">
                      <svg
                        width="22"
                        height="30"
                        viewBox="0 0 22 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.348 26.973C7.607 23.721 5.508 20.675 3.092 17.892C1.476 16.052 0.5 13.639 0.5 11C0.5 5.205 5.205 0.5 11 0.5C16.795 0.5 21.5 5.205 21.5 11C21.5 13.638 20.525 16.051 18.917 17.895C16.499 20.68 14.401 23.726 12.659 26.98C11.954 28.278 11.441 29.236 11.441 29.236C11.354 29.399 11.184 29.5 11 29.5C10.816 29.5 10.646 29.399 10.559 29.236L9.348 26.973ZM11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5ZM11 5.5C14.036 5.5 16.5 7.964 16.5 11C16.5 14.036 14.036 16.5 11 16.5C7.964 16.5 5.5 14.036 5.5 11C5.5 7.964 7.964 5.5 11 5.5ZM11 7.5C9.068 7.5 7.5 9.068 7.5 11C7.5 12.932 9.068 14.5 11 14.5C12.932 14.5 14.5 12.932 14.5 11C14.5 9.068 12.932 7.5 11 7.5ZM11 8.5C12.38 8.5 13.5 9.62 13.5 11C13.5 12.38 12.38 13.5 11 13.5C9.62 13.5 8.5 12.38 8.5 11C8.5 9.62 9.62 8.5 11 8.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                        <path
                          d="M11 13.5C12.3807 13.5 13.5 12.3807 13.5 11C13.5 9.61929 12.3807 8.5 11 8.5C9.61929 8.5 8.5 9.61929 8.5 11C8.5 12.3807 9.61929 13.5 11 13.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                      </svg>

                      <p>الرياض , السعودية</p>
                    </di>
                  </div>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                  className="moreDetails"
                >
                  تفاصيل
                </button>
              </div>
              <div className="job">
                <div className="info">
                  <h3>محاسب AP/AR</h3>
                  <div className="details">
                    <h4>عمل جزئي</h4>
                    <di v className="loc">
                      <svg
                        width="22"
                        height="30"
                        viewBox="0 0 22 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.348 26.973C7.607 23.721 5.508 20.675 3.092 17.892C1.476 16.052 0.5 13.639 0.5 11C0.5 5.205 5.205 0.5 11 0.5C16.795 0.5 21.5 5.205 21.5 11C21.5 13.638 20.525 16.051 18.917 17.895C16.499 20.68 14.401 23.726 12.659 26.98C11.954 28.278 11.441 29.236 11.441 29.236C11.354 29.399 11.184 29.5 11 29.5C10.816 29.5 10.646 29.399 10.559 29.236L9.348 26.973ZM11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5ZM11 5.5C14.036 5.5 16.5 7.964 16.5 11C16.5 14.036 14.036 16.5 11 16.5C7.964 16.5 5.5 14.036 5.5 11C5.5 7.964 7.964 5.5 11 5.5ZM11 7.5C9.068 7.5 7.5 9.068 7.5 11C7.5 12.932 9.068 14.5 11 14.5C12.932 14.5 14.5 12.932 14.5 11C14.5 9.068 12.932 7.5 11 7.5ZM11 8.5C12.38 8.5 13.5 9.62 13.5 11C13.5 12.38 12.38 13.5 11 13.5C9.62 13.5 8.5 12.38 8.5 11C8.5 9.62 9.62 8.5 11 8.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                        <path
                          d="M11 13.5C12.3807 13.5 13.5 12.3807 13.5 11C13.5 9.61929 12.3807 8.5 11 8.5C9.61929 8.5 8.5 9.61929 8.5 11C8.5 12.3807 9.61929 13.5 11 13.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                      </svg>

                      <p>الرياض , السعودية</p>
                    </di>
                  </div>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                  className="moreDetails"
                >
                  تفاصيل
                </button>
              </div>
              <div className="job">
                <div className="info">
                  <h3>محاسب AP/AR</h3>
                  <div className="details">
                    <h4>عمل جزئي</h4>
                    <di v className="loc">
                      <svg
                        width="22"
                        height="30"
                        viewBox="0 0 22 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.348 26.973C7.607 23.721 5.508 20.675 3.092 17.892C1.476 16.052 0.5 13.639 0.5 11C0.5 5.205 5.205 0.5 11 0.5C16.795 0.5 21.5 5.205 21.5 11C21.5 13.638 20.525 16.051 18.917 17.895C16.499 20.68 14.401 23.726 12.659 26.98C11.954 28.278 11.441 29.236 11.441 29.236C11.354 29.399 11.184 29.5 11 29.5C10.816 29.5 10.646 29.399 10.559 29.236L9.348 26.973ZM11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5ZM11 5.5C14.036 5.5 16.5 7.964 16.5 11C16.5 14.036 14.036 16.5 11 16.5C7.964 16.5 5.5 14.036 5.5 11C5.5 7.964 7.964 5.5 11 5.5ZM11 7.5C9.068 7.5 7.5 9.068 7.5 11C7.5 12.932 9.068 14.5 11 14.5C12.932 14.5 14.5 12.932 14.5 11C14.5 9.068 12.932 7.5 11 7.5ZM11 8.5C12.38 8.5 13.5 9.62 13.5 11C13.5 12.38 12.38 13.5 11 13.5C9.62 13.5 8.5 12.38 8.5 11C8.5 9.62 9.62 8.5 11 8.5Z"
                          fill="#5A42E6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.001 27.943C11.208 27.559 11.476 27.063 11.779 26.505C13.555 23.189 15.695 20.081 18.162 17.239C19.618 15.569 20.5 13.387 20.5 11C20.5 5.757 16.243 1.5 11 1.5C5.757 1.5 1.5 5.757 1.5 11C1.5 13.386 2.382 15.568 3.845 17.234C6.312 20.075 8.453 23.184 10.229 26.501L11.001 27.943ZM11 4.5C7.413 4.5 4.5 7.413 4.5 11C4.5 14.587 7.413 17.5 11 17.5C14.587 17.5 17.5 14.587 17.5 11C17.5 7.413 14.587 4.5 11 4.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                        <path
                          d="M11 13.5C12.3807 13.5 13.5 12.3807 13.5 11C13.5 9.61929 12.3807 8.5 11 8.5C9.61929 8.5 8.5 9.61929 8.5 11C8.5 12.3807 9.61929 13.5 11 13.5Z"
                          fill="#5A42E6"
                          fill-opacity="0.35"
                        />
                      </svg>

                      <p>الرياض , السعودية</p>
                    </di>
                  </div>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                  className="moreDetails"
                >
                  تفاصيل
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <ModalJop />
    </>
  );
}

export default page;
