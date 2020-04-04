import React from 'react'
import Typist from 'react-typist';

function Content(): React.ReactElement {
    return (
        <Typist>
            <pre>
                <span className="var-highlight">let</span>
                {`
            object = {
                name: 'Foo',  
                type: 'Bar',
                location: 'Earth',
                properties:['Javascript',
                            'HTML',
                            'CSS'];
            }
            `}
            </pre>
        </Typist >
    )
}

export default Content

{/* <div className="Content">
                협업과 소통을 좋아하는 주니어 개발자 입니다. <br />
                다양한 분야에 관심이 많아 배움을 즐기고 있습니다.  <br />
                또, 아이디어를 기록하고, 실제 구체화 가능한지에 대한 고민을 하곤 합니다.
            </div> */}