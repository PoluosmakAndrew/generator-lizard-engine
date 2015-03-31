/**
 * Created by LizardEngine on <%=CreatedDate%>
 *
 * NPM package: https://www.npmjs.com/package/lizard-engine
 * Github: https://github.com/PoluosmakAndrew/lizard-engine
 *
 * Support: https://github.com/PoluosmakAndrew/lizard-engine/issues
 */

var lizard = require('lizard-engine');

module.exports = function(req, res){

  var view = new lizard.View(req, res, module.id);
  var locals = view.locals;

  view.on('init', function(next){

      locals.name = '<%=ControllerName%>';

      next();

  });

  view.render('<%=ControllerName%>.html');
};
