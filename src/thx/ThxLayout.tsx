import { Typography } from '@alfalab/core-components/typography';
import rocket from '../assets/rocket.png';
import { useTimeout } from '../hooks/useTimeout';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  useTimeout(() => {
    window.location.replace(
      'alfabank:///sdui_screen?endpoint=v1%2Fgrowthhack-widget-experiment%2Fwidgets%2F0c1eaaaa-f56e-4e81-8f3a-1043f0025e0f&presentationTypeWeb=PRESENT&screenName=gh-exp-final',
    );
  }, 2000);
  return (
    <>
      <div className={thxSt.container}>
        <img src={rocket} width={135} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          Ваши интересы — наше вдохновение
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы проводим исследование для нового сервиса. Скоро расскажем о нём подробнее, следите за новостями!
        </Typography.Text>
      </div>
    </>
  );
};
