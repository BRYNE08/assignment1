import styled from "styled-components";
import './App.css'


import  {Input, Button, Radio, Form} from 'antd';
import { useState } from "react";

import { encrypt, decrypt } from 'caesar-shift';

import  VigenereX  from 'vigenere-x'


const {TextArea} = Input;

function App() {

 const [output, setOutput] = useState('')
 const [ceaserText, setCeaserText] = useState('')
 const [ceaserKeyText, setCeaserKeyText] = useState('')
 
 const [viginereText, setviginereText] = useState('')
 const [viginereKeyText, setviginereKeyText] = useState('')


const [value, setValue] = useState(1);

const onChange = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};

const onCeaserTextChange = (e) => {
  setCeaserText(e.target.value);
};

const onCeaserKeyTextChange = (e) => {
  setCeaserKeyText(e.target.value);
};

const handleCeaserSubmit = () => {
    setOutput(encrypt(Number(ceaserKeyText), ceaserText))
}

const handleCeaserEncode = () => {
  setOutput(decrypt( Number(ceaserKeyText), ceaserText.toLowerCase(),))
}

const onViginereTextChange = (e) => {
  setviginereText(e.target.value);
};

const onViginereKeyTextChange = (e) => {
  setviginereKeyText(e.target.value);
};

const handleViginereSubmit = () => {
    setOutput(VigenereX.encode(viginereText, viginereKeyText))
}

const handleViginereEncode = () => {
  setOutput(VigenereX.decode(viginereText, viginereKeyText))
}

  return (
    <MainContainer>
      <WelcomeText>Computer Security - Assignment 1</WelcomeText>

      <div
        style={{
          width:'100%',
          paddingLeft:'2rem',
          display:'flex',
          flexDirection:'row',
          paddingBottom:'1rem'
        }}
      >
        <Radio.Group
        style={{
          display:'flex',
          flexDirection:'row'
        }}
        onChange={onChange} value={value}>
          <Radio value={1}><span style={{paddingLeft:'10px',margin:0}}>Caesar Cipher</span></Radio>
          <div style={{marginRight:'1rem'}}/>
          <Radio value={2}><span style={{paddingLeft:'10px',margin:0}}>Vigenère Cipher</span></Radio>
        </Radio.Group>
      </div>
      <div 
        style={{
          marginTop:'3rem'
        }}
      ></div>


      {/* Ceaser Cipher */}
      {value === 1 && <Form
        style={{
          height:'100%',
          width:'100%'
        }}
      >
      <InputContainer>
        <TextArea
          name="text`"
          className="textarea"
          placeholder="Plain or encrypted text here"
          onChange={onCeaserTextChange} value={ceaserText}></TextArea>
      </InputContainer>
      <div 
        style={{
          marginTop:'3rem'
        }}
      ></div>
      {value === 1 && <InputContainer>
        <Input 
          name="key"
          className="textinput" 
          placeholder="Key of the encryption"  
          onChange={onCeaserKeyTextChange} value={ceaserKeyText}
        />
        </InputContainer>}
        <div
      style={{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'flex-end',
        marginTop:'1rem'
      }}
      >
        <Button 
          className="x-button"   
          onClick={handleCeaserSubmit}  
        >
          X
        </Button>
        <Button
          className="y-button"  
          onClick={handleCeaserEncode}    
        >
          Y
        </Button>
      </div>

      </Form>}


   {/* ///////////////////////////////////////////////////// */}

       {/* Viginere */}
      {value === 2 && <Form
        style={{
          height:'100%',
          width:'100%'
        }}
      >
      <InputContainer>
        <TextArea
          name="text`"
          className="textarea"
          placeholder="Plain or encrypted text here"
          onChange={onViginereTextChange} value={viginereText}></TextArea>
      </InputContainer>
      <div 
        style={{
          marginTop:'3rem'
        }}
      ></div>
      <InputContainer>
        <Input 
          name="key"
          className="textinput" 
          placeholder="Key of the encryption"  
          onChange={onViginereKeyTextChange} value={viginereKeyText}
        />
        </InputContainer>
        <div
      style={{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'flex-end',
        marginTop:'1rem'
      }}
      >
        <Button 
          className="x-button"   
          onClick={handleViginereSubmit}  
        >
          X
        </Button>
        <Button
          className="y-button"  
          onClick={handleViginereEncode}    
        >
          Y
        </Button>
      </div>

      </Form>}
      <div>

      <HorizontalRule />
        {output}
      </div>
      <div style={{
        marginTop:'3rem'
      }}>
        Copyright&copy;2022 <b>Chibaya</b> Software Projects
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 60vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default App;
