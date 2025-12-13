import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase/auth";

export default function Ingresar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const userCredential = await login(email, password);
      console.log("✅ Sesión iniciada:", userCredential.user);

      navigate("/perfil");
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/invalid-email":
          setErrorMsg("El correo no es válido.");
          break;
        case "auth/user-not-found":
        case "auth/wrong-password":
          setErrorMsg("Correo o contraseña incorrectos.");
          break;
        default:
          setErrorMsg("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="section-spacing">
      <section className="max-w-lg mx-auto bg-white rounded-[1.8rem] border border-charcoal-100 shadow-sm px-6 py-8 md:px-8 md:py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-black">
            Inicia sesión
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="
                w-full rounded-2xl border border-charcoal-100
                bg-blue-100/40
                px-4 py-3 text-sm md:text-base
                focus:outline-none focus:border-purple-500
              "
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="label">
              Contraseña
            </label>

            <div
              className="
                flex items-center
                rounded-2xl border border-charcoal-100
                bg-blue-100/40
                px-4
              "
            >
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="
                  flex-1 bg-transparent border-none
                  py-3 text-sm md:text-base
                  focus:outline-none
                "
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="text-charcoal-300 text-sm md:text-base"
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          {errorMsg && (
            <p className="text-sm text-red-500 mt-1">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="main-button w-full mt-4 disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>

          <hr className="my-6 border-blue-100" />

          <p className="text-sm md:text-base text-blue-800 text-center">
            ¿Aún no tienes una cuenta?{" "}
            <a href="/crear-cuenta" className="hover:underline">
              Crea una
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
