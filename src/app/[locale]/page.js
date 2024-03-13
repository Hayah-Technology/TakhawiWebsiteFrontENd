import { useTranslations } from "next-intl";
import "./globals.css";
import { Link } from "../../navigation";
import AppPart from '../../../Components/AppPart'

export default function Home(params) {
  const t = useTranslations("home");
  return (
    <main>
      <section className="header">
        <div className="con">
          <div className="content">
            <div className="boxImg">
              <img src="/images/headerImg.webp" alt="header Img" />
            </div>

            <div className="dec">
              <h1>{t("about.title1")}</h1>
              <p>{t("about.dec")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="con">
          <div className="content">
            <h2>{t("ad.title")}</h2>
            <div className="parts">
              <div className="part">
                <div className="imgPart">
                  <img src="/images/time.png" alt="time" />
                </div>
                <h3>{t("ad.timeTitle")}</h3>
                <p>{t("ad.timedec")}</p>
              </div>
              <div className="part">
                <div className="imgPart">
                  <img src="/images/money.png" alt="money" />
                </div>
                <h3>{t("ad.provisionTitle")}</h3>
                <p>{t("ad.provisiondec")}</p>
              </div>
              <div className="part">
                <div className="imgPart">
                  <img src="/images/protection.png" alt="protection" />
                </div>
                <h3>{t("ad.securitytitle")}</h3>
                <p>{t("ad.securitydec")}</p>
              </div>
              <div className="part">
                <div className="imgPart">
                  <img src="/images/hotel.png" alt="hotel" />
                </div>
                <h3>{t("ad.hotelstitle")}</h3>
                <p>{t("ad.hotelsdec")} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="con">
          <div className="content">
            <h2> {t("who.title1")}</h2>
            <h3>{t("who.dec")}</h3>
            <h4> {t("who.title2")}</h4>
            <div className="join">
              <Link href="/investors" className="joinTeam">
                {t("who.joinTime")}
              </Link>
              <Link href="/captainsJoin" className="joinCapt">
                {t("who.joinCap")}
              </Link>
            </div>
          </div>
        </div>
      </section>
 <AppPart/>

      <section className="goals">
        <div className="con">
          <div className="content">
            <div className="part">
              <h2>  {t("goals.title1")}</h2>
              <p>
              {t("goals.dec1")}
              </p>
            </div>
            <div className="part">
              <h2>{t("goals.title2")}</h2>
              <p>
              {t("goals.dec2")}
              </p>
            </div>
            <div className="part">
              <h2>{t("goals.title3")}</h2>
              <p>
              {t("goals.dec31")}
                <br />
                {t("goals.dec32")}
                <br />
                {t("goals.dec33")}
              </p>
            </div>
            <div className="part">
              <h2>{t("goals.title4")}</h2>
              <p>
              {t("goals.dec4")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location">
        <div className="content">
          <div className="part1">
            <h2>{t("location.title")}</h2>
          </div>
          <div className="part2">
            <img src="/images/location.png" alt="location" />
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="con">
          <div className="content">
            <h2>{t("qui.title")}</h2>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    مثال لمحتوي قائمة منسدلة رقم واحد
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    مثال لمحتوي قائمة منسدلة رقم أثنين
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    مثال لمحتوي قائمة منسدلة رقم ثلاثة
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    مثال لمحتوي قائمة منسدلة رقم أربعة
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق. ومن هنا وجب على المصمم أن يضع
                      نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد
                      النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
                      علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
                      يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة
                      فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
                      مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
