import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Calculadora: React.FC = () => {
  const [pantalla, setPantalla] = useState(" ");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPantalla(event.target.value);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.type === "button") {
      const buttonValue = target.value;
      if (buttonValue === "C") {
        setPantalla("0");
      } else if (buttonValue === "=") {
        try {
          if (pantalla.includes("%")) {
            const partes = pantalla.split("+");
            if (partes.length === 2) {
              const numero = parseFloat(partes[0]);
              const porcentajePartes = partes[1].split("%");
              if (porcentajePartes.length === 2) {
                const porcentaje = parseFloat(porcentajePartes[0]);
                const resultado = numero + (numero * porcentaje) / 100;
                setPantalla(resultado.toFixed(2).toString());
              }
            }
          } else {
            const resultado = eval(pantalla);
            setPantalla(resultado.toString());
          }
        } catch (error) {
          setPantalla("Error");
        }
      } else if (buttonValue === "()") {
        setPantalla((prevPantalla) => `(${prevPantalla})`);
      } else if (buttonValue === "X") {
        setPantalla((prevPantalla) => prevPantalla.slice(0, -1));
      } else if (buttonValue === "%") {
        setPantalla((prevPantalla) => prevPantalla + buttonValue);
      } else {
        if (pantalla === "0" || pantalla === "Error") {
          setPantalla(buttonValue);
        } else {
          setPantalla((prevPantalla) => prevPantalla + buttonValue);
        }
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Calculadora</h1>
        </Col>
      </Row>
      <section className="container">
        <Row>
          <Col>
            <div className="pantalla">
              <input
                type="text"
                value={pantalla}
                id="pantalla"
                readOnly
                onChange={handleInputChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="btn-cal" onClick={handleInputClick}>
              <input type="button" value="C" id="1" />
              <input type="button" value="()" id="2" />
              <input type="button" value="%" id="2" />
              <input type="button" value="/" id="3" />
              <input type="button" value="7" id="4" />
              <input type="button" value="8" id="5" />
              <input type="button" value="9" id="6" />
              <input type="button" value="*" id="7" />
              <input type="button" value="4" id="8" />
              <input type="button" value="5" id="9" />
              <input type="button" value="6" id="10" />
              <input type="button" value="-" id="11" />
              <input type="button" value="1" id="12" />
              <input type="button" value="2" id="13" />
              <input type="button" value="3" id="14" />
              <input type="button" value="+" id="15" />
              <input type="button" value="X" id="16" />
              <input type="button" value="0" id="17" />
              <input type="button" value="." id="18" />
              <input type="button" value="=" id="19" />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Calculadora;
