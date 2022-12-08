//decorators

function apiVersion(version: string){
   return (target) => {
      Object.assign(target.prototype, {__version: version, __name: "Pedro"})
   }
}

//attribute decorator

function minLenght(length: number){
   return (target: any, key: string) => {
      let _value = console.log(target[key])

      const getter = () => _value
      const setter = (value: string) => {
         if(value.length < length) {
            throw new Error(`Tamanho menor do que ${length}`)
         } else {
            _value = value
         }
      }
   }
}


class Api{
   @minLenght(3)
   name:string

   constructor(name:string) {
      this.name = name
   }
}


const api = new Api("produtos")
console.log(api.name)
