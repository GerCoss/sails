module.exports = {


    friendlyName: 'View available things',


    description: 'Display "Available things" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/things/available-things'
        }

    },


    fn: async function(inputs, exits) {
        // var things = [
        //   {id:1,label:"taladro"},
        //   {id:2,label:"bicicleta"},
        // ];

        var me = await User.findOne({
                id: this.req.me.id
            })
            .populate('friends');

        var friendIds = _.pluck(me.friends, 'id');

        var things = await Thing.find({
            //this.req.me es el usuario que se a logeado
            or: [
                { owner: this.req.me.id },
                { owner: { in: friendIds } }
            ]
        });

        // Respond with view.
        return exits.success({
            things: things
        });

    }


};