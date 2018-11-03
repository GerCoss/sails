module.exports = {


    friendlyName: 'Destroy one thing',


    description: 'Borra una cosa de la base de datos mediante su id',


    inputs: {
        id: {
            type: 'number',
            required: true
        }
    },


    exits: {

    },


    fn: async function(inputs, exits) {

        await Thing.destroy({ id: inputs.id });

        return exits.success();

    }


};