import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail } from "../firebase/auth";

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!acceptedTerms) {
      setErrorMsg("Debes aceptar los términos y condiciones.");
      return;
    }

    setIsSubmitting(true);

    try {
      const user = await registerWithEmail({
        firstName,
        lastName,
        email,
        password,
      });

      console.log("✅ Cuenta creada:", user);
      setSuccessMsg("Tu cuenta se creó correctamente.");

      navigate("/perfil");
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMsg("Este correo ya está registrado.");
          break;
        case "auth/invalid-email":
          setErrorMsg("El correo no es válido.");
          break;
        case "auth/weak-password":
          setErrorMsg("La contraseña es demasiado débil.");
          break;
        default:
          setErrorMsg(
            "Ocurrió un error al crear tu cuenta. Inténtalo de nuevo."
          );
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
            Crea tu cuenta
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="label">
                Nombres
              </label>
              <input
                id="firstName"
                type="text"
                className="
                  w-full rounded-2xl border border-charcoal-100
                  bg-blue-100/40
                  px-4 py-3 text-sm md:text-base
                  focus:outline-none focus:border-purple-500
                "
                placeholder="Tus nombres"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="label">
                Apellidos
              </label>
              <input
                id="lastName"
                type="text"
                className="
                  w-full rounded-2xl border border-charcoal-100
                  bg-blue-100/40
                  px-4 py-3 text-sm md:text-base
                  focus:outline-none focus:border-purple-500
                "
                placeholder="Tus apellidos"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

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
              ">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="
                  flex-1 bg-transparent border-none
                  py-3 text-sm md:text-base
                  focus:outline-none
                "
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="text-charcoal-300 text-sm"
                onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-2">
            <input
              id="terms"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="
                mt-1 h-4 w-4 
                rounded border-charcoal-200
                text-purple-500
              "
            />
            <label
              htmlFor="terms"
              className="text-sm md:text-base text-charcoal-300">
              Acepto los términos y condiciones
            </label>
          </div>

          {errorMsg && <p className="text-sm text-red-500 mt-1">{errorMsg}</p>}
          {successMsg && (
            <p className="text-sm text-green-600 mt-1">{successMsg}</p>
          )}

          <button
            type="submit"
            className="main-button w-full mt-4 disabled:opacity-60"
            disabled={isSubmitting}>
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          </button>

          <hr className="my-6 border-blue-100" />

          <p className="text-sm md:text-base text-blue-800 text-center">
            <a href="/iniciar-sesion" className="hover:underline">
              ¿Ya tienes una cuenta?
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
