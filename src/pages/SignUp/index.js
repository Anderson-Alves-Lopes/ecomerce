import React, { useEffect } from "react";
import { TemplateContainer, TemplateTitle, ErrorMessage } from "../../components/Template";
import { SignInArea} from "./styled";

import { useState } from "react";

import { OlxApi } from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";

//suporte@b7web.com.br 12345

// teste 321 PB teste@teste.com 1234 -invalido --> $2b$10$rZQw55gn5t8moxSQA1JTJeDqSB0x8bh/ybMMW7Cg3eoG.Yrkbu24C

export const SignUp = () => { 
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const [stateList, setStateList] = useState([]);

    useEffect(()=>{
        const getStates = async () => {
            const slist = await OlxApi.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confirmPassword) {
            setError('Senhas não batem');
            setDisabled(false);
            return;
        }

        const json = await OlxApi.register(name, email, password, stateLoc);
        // console.log()
        // alert(json.token)
        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            
            window.location.href = '/';
        }
        setDisabled(false);
    }

    return (
        <TemplateContainer>
            <TemplateTitle>Cadastro</TemplateTitle>
            <SignInArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName" className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input type="text" name="fullName" id="fullName"
                                disabled={disabled}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="stateLoc" className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select name="stateLoc" id="stateLoc" 
                                value={stateLoc} 
                                onChange={e=>setStateLoc(e.target.value)}
                                required
                            >
                                <option></option>
                                {stateList.map((item, index)=>
                                    <option key={index} value={item._id}>{item.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label htmlFor="email" className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" name="email" id="email"
                                disabled={disabled}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="password" className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" name="password" id="password"
                                disabled={disabled}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="confirmPass" className="area">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input type="password" name="confirmPass" id="confirmPass"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="submit" className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button id="submit" name="submit" disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </SignInArea>
        </TemplateContainer>
    );
}