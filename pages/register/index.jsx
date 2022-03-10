import Head from "next/head"
import Link from "next/link"
import {Form, Input, Button, Modal} from "antd"
import ax from "../../libs/ax"

const Register = () => {

  const handleSubmit = (e)=>{
    console.info(e)
    ax.post("/user_create", {
      email : e.email,
      password : e.password
    })
    .then(res =>{
      if(res.status == 201){
        Modal.success({
          title : "Registrasi Berhasil",
          onOk : ()=>{
            window.location.href = "/login"
          }
        })
      }
    })
    .catch(err => {
      Modal.error({
        title : err.response.data.msg || "terjadi kesalahan"
      })
    })


  }

  return (
    <main className="w-screen h-screen flex flex-col bg-slate-100 justify-start items-center p-8 gap-4">
      <Head>
        <title>Registrasi Madingapp</title>
        <meta name="description" content="Registrasi ke aplikasi mading app" />
      </Head>

      <div className="w-full flex flex-col items-start gap-2">
        <h1 className="text-6xl font-thin text-orange-500 text-left">Registrasi</h1>
        <h1 className="text-4xl font-bold">Mading App</h1>
      </div>

      <Form className="w-[100%] p-4 bg-white rounded-lg shadow-lg mt-10" onFinish={handleSubmit} >

        <Form.Item className="w-full flex flex-col gap-2" rules={[{required : true}]} id="email" name="email" label="email" >
          <Input  className="w-full h-12 mt-2" />
        </Form.Item>

        <Form.Item className="w-full flex flex-col gap-2" rules={[{required : true, min : 6, message : "minimal 6 char"}]} id="password" name="password" label="password">
          <Input.Password  className="w-full h-12 mt-2"  />
        </Form.Item>

        <div className="flex items-center justify-start gap-4">
          <button type="submit" className="h-12 bg-orange-500 uppercase text-white font-light rounded-md w-[45%]">
            register  
          </button>
          <div className="w-[40%] flex flex-col">
            <p>Sudah punya akun? <Link href={"/login"}>Login disini</Link> </p>
          </div>
        </div>

      </Form>

    </main>
  );
};



export default Register;
