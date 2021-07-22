class persona:
    def __init__(self, nombre, x, y):
        self.nombre = nombre
        self.x = x
        self.y = y
    
    def presentar(self):
        print(f"Hola, yo soy {self.nombre}")

    def posicionActual(self, segunda_cordenada):
        cord1 = (self.x - segunda_cordenada.x)**2
        cord2 = (self.y - segunda_cordenada.y)**2

        return (cord1+cord2)**0.5

if __name__ == '__main__':

    daniel = persona('daniel',10, 20)
    daniel.presentar()
    
    print(daniel.posicionActual(daniel))

    if isinstance(daniel, persona):
        print("Soy tambien una instancia de clase")