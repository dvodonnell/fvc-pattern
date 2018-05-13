import Flow from './../../lib/flow.js';

import ViewUsername from './../view/username.js';
import ViewPassword from './../view/password.js';

const Dashboard = function() {

    Flow.apply(this, arguments);

};

Dashboard.prototype = Object.assign({}, Flow.prototype, {

    tmpl : `
        <div class="inner-container">
            <section></section>
        </div>
    `,

    views : {
        username : {
            inst : ViewUsername,
            onRender : function(view) {
                view.addListener('next', () => {
                    this.goToView('password');
                })
            }
        },
        password : {
            inst : ViewPassword,
            onRender : function(view) {
                view.addListener('done', () => {
                    this.emit('complete');
                })
            }
        }
    },

    render : function() {

        this.$el.innerHTML = this.tmpl;
        this._render();



    }

});

export default Dashboard;