import React from 'react';
import adaChatBubblePic from '../../assets/images/Nana Ama.png';

const NameGenChat = ({ text, text2, height }) => {
    height = height || '80px';
    
    return (
            <div className="chat-container">
                <div className="chat-bubble-pic">
                    <img src={adaChatBubblePic} alt="Arida"/>
                </div>

                <div className="chat-bubble-message" style={{
                    height: {height},
                    maxWidth: '540px',
                    padding: '20px'
                  }}>

                    {text}
                    {text2}
                </div>
            </div>
    )
};

export default NameGenChat;