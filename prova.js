function menu (prato, temp){
     let padraoTemp

     if(prato == 'pipoca'){
       padraoTemp=10;
     }
     else if (prato == 'macarrão'){
       padraoTemp=8;
     }
     else if (prato == 'carne'){
      padraoTemp=15;
    }
    else if (prato == 'feijão'){
      padraoTemp=12;
    }
    else if (prato == 'brigadeiro'){
      padraoTemp=8;
    }
    else { return 'prato inexistente';

    }
    
    if( temp < padraoTemp){
      return 'tempo inexistente';
    }
    else if(temp > ( 2 * padraoTemp )&& temp <= (3 * padraoTemp)){
      return'Pegou fogo';
    }
    else if(temp > 3 * padraoTemp){
      return'Kabummm!';
    }
    
      }
      console.log(menu('Mcarrão',50) + 'Prato pronto, bom petite!')