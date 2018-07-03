module.exports = function (app, options) {
  var remotes = app.remotes();

  // Set X-Total-Count for all search requests
  var applyXTotal = function (ctx, next) {
    var filter;
    if (ctx.args && ctx.args.filter) {
      filter = ctx.args.filter.where;
    }

    if (!ctx.res._headerSent) {
      this.count(filter, function (err, count) {
        ctx.res.set('X-Total-Count', count);
        next();
      });
    } else {
      next();
    }
  };
  var pattern = options && Array.isArray(options.pattern) ? options.pattern : ['*.find'];
  for (var i=pattern.length-1; i>=0; i--) {
    remotes.after(pattern[i], applyXTotal);
  }

  // Changes by Thomas Vié
  // for nested relational models
  var relationMethodNames = options.relationMethodNames;
  // Function has to calculate count for nested pattern
  // With __count__relatedModelName


  var models = app.models();
 
  for(let model of models) {
    for(let relationMethodName of relationMethodNames) {
      model.afterRemote(relationMethodName, function (ctx, output, next) {
        // Get Model name (final model)
        //TODO check if works in all cases
       
        const relatedModel = app.models[ctx.resultType[0]];
        
        var filter;
        if (ctx.args && ctx.args.filter) {
          filter = ctx.args.filter.where;
        }
        relatedModel.count(filter, function(err, count) {
          if(err) {
            throw new Error(err);
          }
          if (!ctx.res._headerSent) {
            ctx.res.set('X-Total-Count', count);
            next();
          } else {
            throw new Error('Headers already sent !'); 
          }
        });
      });
    }
  }
};
