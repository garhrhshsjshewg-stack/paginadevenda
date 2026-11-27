import { CHECKOUT_URL, CTA_LABEL } from '../content';
import { Icon } from './Icons';

const FAQ_ITEMS = [
  {
    question: 'O grupo garante lucro?',
    answer:
      'Não. Palpite é uma leitura sobre um jogo e pode errar. Não prometemos ganho, retorno ou acerto garantido. Aposte apenas o valor que você pode perder.',
  },
  {
    question: 'Quanto custa para entrar?',
    answer:
      'R$ 32,99 em pagamento único. Não existe mensalidade, assinatura ou renovação automática.',
  },
  {
    question: 'O acesso é realmente permanente?',
    answer:
      'Sim. O plano é permanente: você paga uma vez e continua com acesso ao grupo, sem prazo de validade.',
  },
  {
    question: 'Como recebo o acesso depois do pagamento?',
    answer:
      'O pagamento é processado na página da Sunize. Assim que ele é confirmado, você recebe as instruções para entrar no grupo no contato informado na compra.',
  },
  {
    question: 'O que eu encontro dentro do grupo?',
    answer:
      'Os palpites esportivos e as análises dos jogos que acompanham cada palpite, publicados para consulta dos participantes.',
  },
  {
    question: 'Preciso ter 18 anos?',
    answer:
      'Sim. O conteúdo fala de apostas esportivas e é destinado exclusivamente a maiores de 18 anos.',
  },
  {
    question: 'O pagamento é seguro?',
    answer:
      'O checkout é da Sunize, uma plataforma de pagamento. Os dados do cartão são informados lá, não neste site.',
  },
];

export function Faq() {
  return (
    <section className="section section--alt" id="duvidas">
      <div className="wrap">
        <header className="sec-head">
          <span className="eyebrow">
            <Icon name="shield" /> Dúvidas frequentes
          </span>
          <h2>Perguntas antes de entrar</h2>
          <p className="lead">Respostas diretas sobre o plano, o acesso e o conteúdo do grupo.</p>
        </header>

        <div className="faq">
          {FAQ_ITEMS.map((item) => (
            <details className="faq__item" key={item.question}>
              <summary className="faq__q">{item.question}</summary>
              <p className="faq__a">{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="faq__cta">
          <a className="btn btn--primary" href={CHECKOUT_URL}>
            {CTA_LABEL}
          </a>
        </p>
      </div>
    </section>
  );
}
