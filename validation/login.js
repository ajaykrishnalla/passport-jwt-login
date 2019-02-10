const validator  =   require('validator');
const isEmpty    =  require('./is-empty');

module.exports  = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    

    
    if(validator.isEmpty(data.email)){
        errors.email  = 'email field is required';
    }
    if(!validator.isEmail(data.email)){
        errors.email  = 'Email invalid';
    }
    if(!validator.isLength(data.password, { min: 6 , max: 30  })){
        errors.password  = 'Password need Atleast Six characters';
    }
    if(validator.isEmpty(data.password)){
        errors.password  = 'password field is required';
    }
  
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}