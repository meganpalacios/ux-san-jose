import Hero from "../../components/Hero"
import Breadcrumb from "../../components/Breadcrumb"

export default function Ortodoncia() {
  return (
    <main>
      <Hero header="Ortodoncia" imageUrl="/especialidades/ortodoncia.png" />
      <section>
        <Breadcrumb paths={{ parent: "Especialidades", child: "Ortodoncia" }} />
      </section>
    </main>
  )
}