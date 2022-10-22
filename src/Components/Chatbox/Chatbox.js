import { useState } from "react";
import './Chatbox.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faMessage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Responsive-chatbox.css'

library.add(faMessage, faXmark)








const Chatbox = () => {
    const [showChat, setShowChat] = useState(true);
    
        const ShowBtn = () => {
            setShowChat(!showChat)

        }

                const NotShowBtn = () => {
                    setShowChat(!showChat)
                }
    
      if (!showChat) {
        return  ( 
            <div className="chat">
                 <header className="chat-header">
                    <div className="title-header">
                        <h2>Fresh Market</h2>
                        <button onClick={NotShowBtn}> <FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                       <ul className="chat-title"><li>We'll reply as soon as we can</li></ul> 
                </header>
                      <img className="chat-background" src="https://img.freepik.com/free-vector/green-curve-abstract-background_53876-99569.jpg?w=2000" alt="chat"></img>
                <div className="input-chat">
                    <input type="text" placeholder="Type your message"></input>
                     <button >Send</button>
                </div>
    
            </div>
        )
      }
    return (
<button className="ChatBtn" onClick={ShowBtn}> <FontAwesomeIcon icon={faMessage} />
        </button>
    )
}

export default Chatbox;