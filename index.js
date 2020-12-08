const parentList = [
  {
    name: "Marcos Maia",
    children: "Clarice",
  },
  {
    name: "João Paulo",
    children: "Pedro",
  },
  {
    name: "Fernanda",
    children: "Rosa",
  },
  {
    name: "Patricia",
    children: "Ana",
  },
  {
    name: "Lucas",
    children: "Samira",
  },

]


function getParent(children){
  const parent = parentList.find(function(parent){
    return parent.children === children;
  })

  return parent.name
}
console.log(getParent('Samira'));


//a função deve retornar o nome do pai de acordo com o nome de seu filho passado no segundo parâmetro 
