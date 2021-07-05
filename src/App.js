import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
    <div className="container">
        <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">

            <label htmlFor="email">メールアドレス
                <input id="email" type="text" name="email" ref={register({ required: true})}/>
                {errors.email && <div className="error">メールアドレスを入力してください</div>}
            </label>

            </div>
            <div className="form-group">
{/*
            <label htmlFor="password">パスワード
                <input id="password" type="password" name="password" ref={register({ required: true})}/>
                {errors.password && <div className="error">パスワードを入力してください</div>}
            </label>
*/}
            </div>
            <button type="submit">ログイン</button>
        </form>
        </div>
    </div>
    );
}

export default App;