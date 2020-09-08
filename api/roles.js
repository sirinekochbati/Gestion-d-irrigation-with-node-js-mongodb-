const Acesscontrol = require ("accesscontrol");
const ac = new Acesscontrol();
exports.roles = (function() {
ac.grant("employee")
 .readOwn("user")
 .updateOwn("user")

 
ac.grant("admin")
 .extend("employee")
 .readAny("user")
 .updateAny("user")
 .deleteAny("user")
 .readAny("parcelleElementaireByUser")
 .createAny("parcelleElementairetoUser")
 
 

     
    return ac;
    })();