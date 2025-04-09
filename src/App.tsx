import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import bg from './assets/bg.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

const generateRandomNumbers = (count: number, min: number, max: number): number[] => {
  const randomNumbers: number[] = [];

  for (let i = 0; i < count; i++) {
    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

const get5Rows = () => [
  generateRandomNumbers(5, 1, 99),
  generateRandomNumbers(5, 1, 99),
  generateRandomNumbers(5, 1, 99),
  generateRandomNumbers(5, 1, 99),
  generateRandomNumbers(5, 1, 99),
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [step, setStep] = useState<'init' | 'numbers'>('init');
  const [randomNumbers, setRandomNumbers] = useState(get5Rows());

  const submit = () => {
    window.gtag('event', '4920_engage_var6');
    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  if (step === 'numbers') {
    return (
      <>
        <div className={appSt.container}>
          <div className={appSt.textTitle}>
            <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
              Альфа Джекпот
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" color="secondary">
              Ваша счастливая комбинация чисел
            </Typography.Text>
          </div>

          <div className={appSt.wrap}>
            <div className={appSt.numbersContainer}>
              {randomNumbers[0].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: false })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>

            <div className={appSt.numbersContainer}>
              {randomNumbers[1].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: false })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>
            <div className={appSt.hr} />

            <div className={appSt.numbersContainer}>
              {randomNumbers[2].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: true })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>
            <div className={appSt.hr} />

            <div className={appSt.numbersContainer}>
              {randomNumbers[3].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: false })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>

            <div className={appSt.numbersContainer}>
              {randomNumbers[4].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: false })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: '160px' }} />

        <div className={appSt.bottomBtn}>
          <ButtonMobile
            shape="rounded"
            disabled={loading}
            block
            view="secondary"
            onClick={() => {
              window.gtag('event', '4920_combination_var6');
              setRandomNumbers(get5Rows());
            }}
          >
            Новая комбинация
          </ButtonMobile>
          <ButtonMobile
            shape="rounded"
            loading={loading}
            block
            view="primary"
            hint="Стоимость участия 200 ₽"
            onClick={submit}
          >
            Участвовать
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
            Альфа Джекпот
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Выиграйте погашение кредита
          </Typography.Text>

          <img src={bg} height={170} width="100%" className={appSt.img} />
        </div>

        <Typography.Text view="primary-medium">
          Участвуйте в Альфа Джекпот! У вас есть шанс полностью закрыть кредит или сократить ежемесячные платежи.
        </Typography.Text>
        <Typography.Text view="primary-medium">Маленький вклад сегодня — большая победа завтра. </Typography.Text>

        <div className={appSt.row}>
          <CDNIcon name="rocky_cup_m" />

          <Typography.Text view="primary-medium">Погасите кредит по цене чашки кофе!</Typography.Text>
        </div>
        <div className={appSt.row}>
          <CDNIcon name="glyph_ticket-star_m" />

          <Typography.Text view="primary-medium">
            Участвуйте и получите погашение ежемесячного платежа или всего кредита
          </Typography.Text>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          shape="rounded"
          block
          view="primary"
          onClick={() => {
            window.gtag('event', '4920_luck_var6');
            setStep('numbers');
          }}
        >
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="bold">
            Испытать удачу
          </Typography.TitleResponsive>
        </ButtonMobile>
      </div>
    </>
  );
};
