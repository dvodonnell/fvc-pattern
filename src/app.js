import FVC from '/lib/fvc.js';

import FlowDashboard from './app/flow/dashboard.js';

function App ($el) {

    this.$el = $el;

}

App.prototype = {

    run : function() {

        this.flow = new FlowDashboard(this.$el);
        this.flow.render();

    }

};

export default App;