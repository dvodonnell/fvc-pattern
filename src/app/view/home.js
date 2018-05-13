import View from './../../lib/view.js';

const Home = function() {

    View.apply(this, arguments);

};

Home.prototype = Object.assign({}, View.prototype, {

    tmpl : `
        <div class="inner-container">
            <h1>Home!</h1>
        </div>
    `,

    render : function() {

        this.$el.innerHTML = this.tmpl;

    }

});

export default Home;