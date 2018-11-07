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
        forbidden: {
            description: 'El usuario esta hacendo este request no tiene permisos para borrar esto',
            responseType: 'forbidden'
        }
    },


    fn: async function(inputs, exits) {

        var thing = await Thing.findOne({
            id: inputs.id
        });

        if (thing.owner !== this.req.me.id) {
            throw 'forbidden';
        }

        await Thing.destroy({ id: inputs.id });

        return exits.success();

    }


};