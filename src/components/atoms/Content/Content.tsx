import React from 'react'
import Typist from 'react-typist';

function Content(): React.ReactElement {
    return (
        <div className="content">
            <pre>
                <Typist>
                    {
                        `${"\u00a0"}let 이찬행 = {  
     type: 'Programmer',
     location: 'South Korea',
     character:['협업과 소통을 좋아하는 주니어 개발자 입니다.']
     skills:[]
 }`}
                    <Typist.Delay ms={500} />
                </Typist >
            </pre>
        </div>
    )
}

export default Content

{/* <div className="Content">
                협업과 소통을 좋아하는 주니어 개발자 입니다. <br />
                다양한 분야에 관심이 많아 배움을 즐기고 있습니다.  <br />
                또, 아이디어를 기록하고, 실제 구체화 가능한지에 대한 고민을 하곤 합니다.
            </div> */}