'''
el proposito de la decomposicion es solucionar un problema
diviendolo en varias partes.

este caso el cuerpo y las acciones de una persona
'''
class persona:
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.redSocial = redSocial(True, True)

    def datos(self):
        print(f'''
        nombre: {self.nombre}
        apellido: {self.apellido}
        edad: {self.edad}
        ''')

class redSocial:
    def __init__(self, tieneRS, estado):
        self.tieneRS = tieneRS
        self.estado = estado
        self.numeroSeguidores = 0
        self.seguidores = list()
        self.fechaRegistro = str()
    
    def agregarSeguidor(self, usuario):
        self.numeroSeguidores +=1
        self.seguidores.append(usuario)