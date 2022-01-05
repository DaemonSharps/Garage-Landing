import React from "react"
import { Col, Row } from "react-bootstrap"
import {PageSection} from "./PageSection"

export const AboutBlock  = () =>(
    <PageSection>
        <h2 className="headerText"><div>О нас</div></h2>
        <Row>
            <Col md="6">
                <p className="g-text-small g-text-block text-start">
                    Помiстье​ "З КВ.М" на протяженіи нiсколькихъ ​лiтъ​ является оффиціальной резиденціей ​Васильева​ Арсенія
                    Игоревича и его компаніи. Построеное во второй половине ​ХХ​ ​века, оно, является оригинальнымъ сочетаніемъ 
                    Петровскаго барокко и современной инженерной мысли.
                </p>
            </Col>
            <Col md="6">
                <p className="g-text-small g-text-block text-start">
                    Лiпнина отъ дыма на сводчатыхъ потолкахъ и подтеки 
                    краски на главныхъ воротахъ не оставятъ равнодушными не одного посiтителя этого мiста. Интерьеръ
                    параднаго зала (другого не имiемъ) отделанъ съ необычайной роскошью. Здiсь же проходятъ ​ежедневные​
                    встрiчи, аудіенціи, пьянки и сборища.
                </p>
            </Col>
        </Row>
    </PageSection>
)