export const Card = () => {
  return (
    <div className="Card">
      <img
        src="https://media.fstatic.com/6HAeEE2_DOIgRIkx7FI2-RN1T94=/full-fit-in/629x300/media/articles/main/2020/07/02/theterminator-2000332614.jpeg"
        alt="Exterminador do futuro"
        width="300"
        height="180"
      />
      <h1>Exterminador do futuro</h1>
      <hr />5 Estrelas | Ação | +16 | 2008
      
      <details>
        <summary>Descrição completa</summary>
        <p>
          Trata-se do primeiro da franquia Terminator. Produzido por Hemdale
          Film Corporation, Pacific Western Productions e Cinema '84 e
          distribuído pela Orion Pictures, é estrelado por Arnold
          Schwarzenegger, Michael Biehn, Linda Hamilton, Lance Henriksen e Paul
          Winfield.
        </p>
      </details>
      <p className="valor">
        Valor: <strong>R$ 30,60</strong> em até 3x de <strong>R$ 10,20</strong>{" "}
        ou <strong>R$ 26,40</strong> a vista
      </p>
      <button>COMPRAR</button>
    </div>
  );
};
