module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function (inputs, exits) {
    // var things = [
    //   {id:1,label:"taladro"},
    //   {id:2,label:"bicicleta"},
    // ];
    
    //TODO: regresar y solo traer cosas que el usuario tiene permitido ver
    var things=await Thing.find();
    
    // Respond with view.
    return exits.success({
      things: things
    });

  }


};
