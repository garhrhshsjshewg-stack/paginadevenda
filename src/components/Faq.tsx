import { FAQ } from '../content';

export function Faq() {
  return (
    <section className="section" id="duvidas" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section__head section__head--center reveal">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="h2" id="faq-title">
            Perguntas que respondemos sem rodeio
          </h2>
          <p className="lead">
            Se ficar qualquer dúvida, fale com a gente antes de comprar. É melhor entender tudo agora do que se
            arrepender depois.
          </p>
        </div>

        <div className="faq">
          {FAQ.map((item, index) => (
            <details className="faq__item reveal" key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <div className="faq__answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
