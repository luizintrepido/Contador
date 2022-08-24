function contar(){
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let pass = document.getElementById('txtp')
  if(
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    pass.value.length == 0 ) { 

     res.innerHTML = 'Preencha todos os campos'
    } else {      
      res.innerHTML = 'Contando<br> '

      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(pass.value)

      if( p <= 0){
        window.alert('Passo invalido, considerando PASSO = 1')
        p =1
      }
      
      
     if ( i < f){
      for(let c = i; c <= f; c+= p){
        res.innerHTML += `${c} `
      }
      }
    }






}