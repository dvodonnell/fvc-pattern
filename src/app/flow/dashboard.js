import Flow from './../../lib/flow.js';

import ViewHome from './../view/home.js';
import ViewAbout from './../view/about.js';
import FlowRegister from './../flow/register.js';

const Dashboard = function() {

    Flow.apply(this, arguments);

};

Dashboard.prototype = Object.assign({}, Flow.prototype, {

    tmpl : `
        <div class="container">
            <nav>
                <ul>
                    <li><a href="#" navigate="home">Home</a></li>
                    <li><a href="#" navigate="about">About</a></li>
                    <li><a href="#" navigate="register">Register</a></li>
                </ul>
            </nav>
            <section></section>
        </div>
    `,

    views : {
        home : {
            inst : ViewHome
        },
        about : {
            inst : ViewAbout
        },
        register : {
            inst : FlowRegister,
            onRender : function(flow) {
                flow.addListener('complete', () => {
                    this.goToView('home');
                });
            }
        }
    },

    render : function() {

        this.$el.innerHTML = this.tmpl;
        this._render();

    }

});

export default Dashboard;