import './LoginPage.css'

function LoginPage() {

    return (
        <>
            <div className="flex flex-col items-center w-[414px] h-[852px] p-8 bg-woodsmoke-950">
                <div className="pb-6 w-[349px]">
                    <img className="h-4 w-4" src="/src/assets/icons/seta.svg" alt="icone-seta" />
                </div>
                <div className="pb-8 w-[349px]">
                    <h1 className="text-zumthor-50 text-2xl font-medium">Login</h1>
                </div>
                <div className="flex flex-col gap-2 w-[350px]">
                    <input className="input bg-transparent text-xl font-normal" type="text" id="usuario" name="usuario" placeholder="Email" />
                    <hr className="pb-8" />
                    <input className=" input bg-transparent text-xl font-normal" type="password" id="senha" name="senha" placeholder="Password" />
                    <hr />
                    <a href="">
                        <p className="text-sm text-dodger-blue-600">Forgot your password?</p>
                    </a>
                </div>
                <div className="btn w-[341px] h-[58px] bg-black mt-[460px]">
                    <button className="w-[341px] h-[58px] text-zumthor-50 text-xl font-medium">Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginPage