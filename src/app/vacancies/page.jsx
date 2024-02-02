import React from 'react';
import officeImg from '../../../public/img/vacancies/office-tab.jpg';
import office2 from '../../../public/img/vacancies/office2-tab.jpg';
import ruby from '../../../public/img/vacancies/employee-1.jpg';
import fand from '../../../public/img/vacancies/employee-2.jpg';
import smm from '../../../public/img/vacancies/employee-3.jpg';
import designer from '../../../public/img/vacancies/employee-4.jpg';
import manager from '../../../public/img/vacancies/employee-5.jpg';
import Image from 'next/image';
import styles from './Vacancies.module.css';
import Section from '@/components/Section/Section';
import Container from '@/components/container/Container';
import Icon from '@/components/Icon/Icon';

const Vacancies = () => {
  return (
    <Container>
      <Section>
        <div>
          <div className={styles.imageContainer}>
            <Image
              src={officeImg}
              alt="office img"
              className={styles.centerCrop}
            />
          </div>
          <div className={styles.vacTitleContainer}>
            <h2 className={styles.vacTitle}>
              Стати частиною команди <br />
              <span>ДрукАрмії</span>
            </h2>
            <p className={styles.vacTitleDescription}>
              Над проектом працюють люди, які вважають що їхні професійні
              навички та досвід, розуміння своєї справи та компетенції можуть
              бути корисними у спільній справі на шляху до перемоги.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <div className={styles.vacContainerLine}>
            <h3 className={`${styles.vacTitle} ${styles.vacSubTitle}`}>
              Зараз відкриті <span>Вакансія:</span>
            </h3>
            <p
              className={`${styles.vacTitleDescription} ${styles.vacSubTitle}`}
            >
              Якщо ви вважаєте що можете допомогти, ми раді вітати вас у нашій
              команді.
            </p>
          </div>
          <div className={styles.vacancieContainer}>
            <Image src={ruby} alt="employee" className={styles.vacancieImg} />
            <div className={styles.vacancieDescriptionContainer}>
              <h4 className={styles.vacancieTitle}>Ruby-on-Rail-розробник</h4>
              <ul>
                <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                <li className={styles.skillsDescription}>
                  Не менше 4 років професійного досвіду розробки програмного
                  забезпечення;
                </li>
                <li className={styles.skillsDescription}>
                  Знання Ruby / Ruby on Rails;
                </li>
                <li className={styles.skillsDescription}>
                  Досвід розробки на основі тестування/поведінки, зокрема RSpec;
                </li>
                <li className={styles.skillsDescription}>
                  Володіння як документами, так і системами реляційних баз даних
                  (зокрема MySQL, PostgreSQL);
                </li>
                <li className={styles.skillsDescription}>
                  Перевірена здатність писати читабельний код і ефективне,
                  масштабоване програмне забезпечення.
                </li>
              </ul>
              <button className={styles.btnRespond} type="button">
                Відгукнутися
              </button>
            </div>
          </div>
          <div className={styles.vacancieContainer}>
            <Image src={fand} alt="employee" className={styles.vacancieImg} />
            <div className={styles.vacancieDescriptionContainer}>
              <h4 className={styles.vacancieTitle}>Фандрайзер</h4>
              <ul>
                <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                <li className={styles.skillsDescription}>
                  Володіння високим рівнем письмової та усної української та
                  англійської мов;
                </li>
                <li className={styles.skillsDescription}>
                  Відповідальність, висока мотивація та вміння працювати у
                  стресових ситуаціях та в умовах стислих дедлайнів;
                </li>
                <li className={styles.skillsDescription}>
                  Вміння добре аналізувати ситуацію, обирати найкращі позиції по
                  проєктах агенції та доносити їх до потенційного спонсора,
                  донора;
                </li>
                <li className={styles.skillsDescription}>
                  Впевнена експертиза в роботі з грантовими пропозиціями та
                  підготовкою необхідної документації, для самостійного
                  отримання фінансування, так і для залучення підприємства до
                  участі у конкурсі на його отримання.
                </li>
              </ul>
              <button className={styles.btnRespond} type="button">
                Відгукнутися
              </button>
            </div>
          </div>
          <div className={styles.vacancieContainer}>
            <Image src={smm} alt="employee" className={styles.vacancieImg} />
            <div className={styles.vacancieDescriptionContainer}>
              <h4 className={styles.vacancieTitle}>SMM-managers</h4>
              <ul>
                <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                <li className={styles.skillsDescription}>
                  Вміння працювати з соціальними мережами та розуміння їх
                  основних принципів;
                </li>
                <li className={styles.skillsDescription}>
                  Можливість працювати в офісі повний робочий день;
                </li>
                <li className={styles.skillsDescription}>
                  Високий рівень володіння українською та російською граматикою.
                </li>
              </ul>
              <button className={styles.btnRespond} type="button">
                Відгукнутися
              </button>
            </div>
          </div>
          <div className={styles.vacancieContainer}>
            <Image
              src={designer}
              alt="employee"
              className={styles.vacancieImg}
            />
            <div className={styles.vacancieDescriptionContainer}>
              <h4 className={styles.vacancieTitle}>Графічний дизайнер</h4>
              <ul>
                <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                <li className={styles.skillsDescription}>
                  Навички фотореалістичної візуалізації об'єктів — інтер'єр та
                  екстер'єр, візуалізація -статична. Анімація — буде додатковою
                  перевагою;
                </li>
                <li className={styles.skillsDescription}>
                  Відмінне знання пакету 3D-візуалізації: SketchUp, 3DSmax+VRay
                  або Corona, Adobe Photoshop, Adobe After effects, бажано Pro
                  на 3ddd;
                </li>
                <li className={styles.skillsDescription}>
                  Обов’язкове знання меблевих фабрик та виробників різного
                  цінового діапазону, навички комплектації приватних інтер'єрів.
                </li>
              </ul>
              <button className={styles.btnRespond} type="button">
                Відгукнутися
              </button>
            </div>
          </div>
          <div className={styles.vacancieContainer}>
            <Image
              src={manager}
              alt="employee"
              className={styles.vacancieImg}
            />
            <div className={styles.vacancieDescriptionContainer}>
              <h4 className={styles.vacancieTitle}>
                Менеджер з холодних дзвінків
              </h4>
              <ul>
                <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                <li className={styles.skillsDescription}>
                  Клієнтоорієнтованість;
                </li>
                <li className={styles.skillsDescription}>
                  Загальні комунікативні навички, уміння переконувати;
                </li>
                <li className={styles.skillsDescription}>
                  Вміння презентувати та продавати продукт;
                </li>
                <li className={styles.skillsDescription}>
                  Вміння продати пісок в пустелі!!!
                </li>
                <li className={styles.skillsDescription}>
                  Пунктуальна, енергійна і охайна людина.
                </li>
              </ul>
              <button className={styles.btnRespond} type="button">
                Відгукнутися
              </button>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div>
          <div className={styles.imageContainer}>
            <Image
              src={office2}
              alt="office img"
              className={styles.centerCrop}
            />
          </div>
          <h3 className={styles.vacTitle}>
            Стати частиною команди <span>ДрукАрмії</span>
          </h3>
          <p className={styles.vacTitleDescription}>
            Якщо ви розумієте, як ваші компетенції можуть бути корисними для
            допомоги у досягненні цілей, для яких була створена ДрукАрмія, будь
            ласка, напишіть на пошту. Ваш внесок може мати велике значення,
            дозволяючи використовувати ваші унікальні навички та знання для
            спільного блага.{' '}
          </p>
          <div className={styles.vacanciesContacts}>
            <a href="+380739207804"> +38 0(73) 920 78 04</a>
            <a href="3d@drukarmy.org.ua">3d@drukarmy.org.ua</a>
            <button className={styles.btnContactUs} type="button">
              <Icon name="icon-people" className={styles.btnSvg} />
              Напишіть нам
            </button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Vacancies;
