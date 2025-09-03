import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Home, TreesIcon as Tree, Shield, Users } from 'lucide-react'

const Caracteristicas = () => {
  return (
    <section id="caracteristicas" className="py-16 bg-amber-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-semibold text-center text-amber-900">Características únicas</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Home className="w-12 h-12 mb-4 text-amber-600" />
                  <h3 className="mb-2 text-xl font-semibold text-amber-900">Casas Modernas</h3>
                  <p className="text-center text-amber-700">Diseños contemporáneos con todas las comodidades.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Tree className="w-12 h-12 mb-4 text-amber-600" />
                  <h3 className="mb-2 text-xl font-semibold text-amber-900">Áreas Verdes</h3>
                  <p className="text-center text-amber-700">Amplios espacios para disfrutar de la naturaleza.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Shield className="w-12 h-12 mb-4 text-amber-600" />
                  <h3 className="mb-2 text-xl font-semibold text-amber-900">Seguridad 24/7</h3>
                  <p className="text-center text-amber-700">Vigilancia constante para tu tranquilidad.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="w-12 h-12 mb-4 text-amber-600" />
                  <h3 className="mb-2 text-xl font-semibold text-amber-900">Comunidad Unida</h3>
                  <p className="text-center text-amber-700">Un ambiente familiar y acogedor.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Caracteristicas
