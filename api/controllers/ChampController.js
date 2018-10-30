/**
 * ChampController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: function (req,res) {
        Champ.find()
            .then(function(champs){
                if(!champs || champs.length === 0){
                    return res.send({
                        'success': false,
                        'message': 'No records found'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Records fetched',
                    'data':champs
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to fetch records',
                })
            })
    }

};

